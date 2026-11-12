import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * A small editor window that types out real-looking code from my stack, file by file, in a loop.
 * Cheap: one setTimeout chain; it only runs while the window is on screen and the tab is visible.
 * With prefers-reduced-motion the first file is shown fully typed and nothing animates.
 */

interface Snippet {
  file: string
  lang: 'csharp' | 'ts'
  code: string
}

const snippets: Snippet[] = [
  {
    file: 'OrderEndpoints.cs',
    lang: 'csharp',
    code: `app.MapPost("/api/orders", async (
    CreateOrderRequest request,
    OrderService orders,
    CancellationToken ct) =>
{
    // prices and fees are computed on the server
    var result = await orders.PlaceAsync(request, ct);
    return result.ToHttp();
});`,
  },
  {
    file: 'DeliveryRules.cs',
    lang: 'csharp',
    code: `public static bool IsSlotOpen(
    DeliverySlot slot, DateTime now)
{
    var cutOff = slot.Start.AddHours(-2);
    return slot.Capacity > 0 && now < cutOff;
}`,
  },
  {
    file: 'useCartQuote.ts',
    lang: 'ts',
    code: `export function useCartQuote(lines: CartLine[]) {
  return useQuery({
    queryKey: ['quote', lines],
    queryFn: () => api.post<Quote>('/cart/quote', lines),
    staleTime: 30_000,
  })
}`,
  },
]

const KEYWORDS = {
  csharp:
    'public|private|static|async|await|var|return|new|class|record|bool|int|string|void|if|else|true|false|null|using|namespace',
  ts: 'export|function|return|const|let|await|async|import|from|type|interface|new|true|false|null',
}

type TokenKind = 'plain' | 'comment' | 'string' | 'number' | 'keyword' | 'type' | 'fn'
interface Token {
  text: string
  kind: TokenKind
}

function tokenize(code: string, lang: Snippet['lang']): Token[] {
  const re = new RegExp(
    String.raw`(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(\d[\d_]*)\b|\b(${KEYWORDS[lang]})\b|\b([A-Z][A-Za-z0-9]*)\b|\b([a-zA-Z_]\w*)(?=\s*[(<])`,
    'gm',
  )
  const tokens: Token[] = []
  let last = 0
  for (const m of code.matchAll(re)) {
    if (m.index > last) tokens.push({ text: code.slice(last, m.index), kind: 'plain' })
    const kind: TokenKind = m[1] ? 'comment' : m[2] ? 'string' : m[3] ? 'number' : m[4] ? 'keyword' : m[5] ? 'type' : 'fn'
    tokens.push({ text: m[0], kind })
    last = m.index + m[0].length
  }
  if (last < code.length) tokens.push({ text: code.slice(last), kind: 'plain' })
  return tokens
}

const colour: Record<TokenKind, string> = {
  plain: 'text-ink/85',
  comment: 'text-faint italic',
  string: 'text-[var(--code-str)]',
  number: 'text-[var(--code-num)]',
  keyword: 'text-[var(--code-kw)]',
  type: 'text-[var(--code-type)]',
  fn: 'text-[var(--code-fn)]',
}

function Highlighted({ tokens, upTo }: { tokens: Token[]; upTo: number }) {
  const out = []
  let used = 0
  for (let i = 0; i < tokens.length && used < upTo; i++) {
    const t = tokens[i]
    const text = t.text.slice(0, upTo - used)
    used += text.length
    out.push(
      <span key={i} className={colour[t.kind]}>
        {text}
      </span>,
    )
  }
  return <>{out}</>
}

export default function CodeTyper() {
  const reduceMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState(() => (reduceMotion ? snippets[0].code.length : 0))
  const [running, setRunning] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const snippet = snippets[index]
  const tokens = useMemo(() => tokenize(snippet.code, snippet.lang), [snippet])
  const done = typed >= snippet.code.length
  const lineCount = snippet.code.split('\n').length

  // Run only while visible on screen and the tab is in the foreground
  useEffect(() => {
    if (reduceMotion) return
    const el = rootRef.current
    if (!el) return
    let onScreen = false
    const update = () => setRunning(onScreen && !document.hidden)
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting
      update()
    })
    io.observe(el)
    document.addEventListener('visibilitychange', update)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', update)
    }
  }, [reduceMotion])

  useEffect(() => {
    if (!running) return
    let timer: number
    if (done) {
      // admire the finished file, then move on to the next one
      timer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % snippets.length)
        setTyped(0)
      }, 2800)
    } else {
      const next = snippet.code[typed]
      const delay = next === '\n' ? 220 : next === ' ' ? 18 : 26 + Math.random() * 45
      timer = window.setTimeout(() => {
        // type leading indentation in one go, like an editor's auto-indent
        let n = typed + 1
        if (next === '\n') while (snippet.code[n] === ' ') n++
        setTyped(n)
      }, delay)
    }
    return () => window.clearTimeout(timer)
  }, [running, done, typed, snippet])

  return (
    <div ref={rootRef} className="card overflow-hidden font-mono text-[12px] leading-6 sm:text-[13px]">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2/80 px-3 py-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex min-w-0 gap-1 overflow-hidden">
          {snippets.map((s, i) => (
            <span
              key={s.file}
              className={`truncate rounded-md px-2 py-0.5 text-[11px] transition ${
                i === index ? 'bg-bg/70 text-ink' : 'text-faint'
              }`}
            >
              {s.file}
            </span>
          ))}
        </div>
      </div>

      <div className="flex overflow-x-auto py-4 [scrollbar-width:none]" role="img" aria-label={`Code sample: ${snippet.file}`}>
        <ol className="shrink-0 pr-4 pl-4 text-right text-faint/60 select-none" aria-hidden="true">
          {Array.from({ length: lineCount }, (_, i) => (
            <li key={i}>{i + 1}</li>
          ))}
        </ol>
        {/* The full code is rendered invisibly underneath so the window never changes size while typing */}
        <pre className="grid pr-6 whitespace-pre" aria-hidden="true">
          <code className="invisible col-start-1 row-start-1">{snippet.code}</code>
          <code className="col-start-1 row-start-1">
            <Highlighted tokens={tokens} upTo={typed} />
            <span
              className={`ml-px inline-block h-[1.15em] w-[2px] translate-y-[3px] bg-accent ${done || !running ? 'animate-[blink_1s_steps(1)_infinite]' : ''}`}
            />
          </code>
        </pre>
      </div>

      <div className="flex items-center justify-between border-t border-line px-4 py-1.5 text-[10.5px] text-faint" aria-hidden="true">
        <span>{snippet.lang === 'csharp' ? 'C# · .NET 10' : 'TypeScript · React 19'}</span>
        <span>
          Ln {snippet.code.slice(0, typed).split('\n').length}, Col {typed - snippet.code.lastIndexOf('\n', typed - 1)}
        </span>
      </div>
    </div>
  )
}
