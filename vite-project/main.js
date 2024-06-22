import './public/styles.css'
AOS.init();

const images = {
  "JS logo": `<img src="/js.png" alt="JS logo" class="rounded-full" style="width: 100px; height: 100px">`,
  "TS logo": `<img src="/ts.png" alt="TS logo" style="width: 100px; height: 100px">`,
  "React logo": `<img src="/react.png" alt="React logo" style="width: 100px; height: 100px">`,
  "Java logo": `<img src="/java.png" alt="Java logo" style="width: 100px; height: 100px">`, 
  "SQL logo": `<img src="/sql.png" alt="SQL logo" style="width: 100px; height: 100px">`,
  "PHP logo": `<img src="/php.png" alt="PHP logo" style="width: 100px; height: 100px">`,
  "Vite logo": `<img src="/vite.png" alt="Vite logo" style="width: 100px; height: 100px">`,
  "HTML logo": `<img src="/html.png" alt="HTML logo" style="width: 100px; height: 100px">`,
  "CSS logo": `<img src="/css.png" alt="CSS logo" style="width: 100px; height: 100px">`,
  "C# logo": `<img src="/CS.png" alt="C# logo" style="width: 100px; height: 100px">`,
  "C logo": `<img src="/C.png" alt="C logo" style="width: 100px; height: 100px">`,
  "Python logo": `<img src="/python.png" alt="Python logo" style="width: 100px; height: 100px">`,
  "Git hub logo": `<img src="/gh.png" alt="Git hub logo" style="width: 100px; height: 100px">`,
  "Git lab logo": `<img src="/gl.png" alt="Git lab logo" style="width: 100px; height: 100px">`,
  "Tailwindcss logo": `<img src="/tailw.png" alt="Tailwindcss logo" style="width: 100px; height: 100px">`,
  "Bootsrap logo": `<img src="/boot.png" alt="Bootsrap logo" style="width: 100px; height: 100px">`,
  "Chakra logo": `<img src="/chakra.png" alt="Chakra logo" style="width: 100px; height: 100px">`,
  "Figma logo": `<img src="/figma.png" alt="Figma logo" style="width: 100px; height: 100px">`,
  };

  const skillsTable = document.querySelector('#skillsT');
  for(const key in images){
    skillsTable.innerHTML += images[key];
  }
  // let count = 0;
  // let row = createRow();
  
  // for (const key in images) {
  //     if (count % 5 === 0 && count !== 0) {
  //         skillsTable.appendChild(row);
  //         row = createRow();
  //     }
  //     const td = document.createElement('td');
  //     const image = images[key];
  //     td.innerHTML = image;
  //     td.style.padding = '2.5%';
  //     row.appendChild(td);
  //     count++;
  // }

  // if (row.children.length > 0) {
  //     skillsTable.appendChild(row);
  // }
  
  // function createRow() {
  //     return document.createElement('tr');
  // }

  const schools = document.querySelectorAll('#experience img');
  let soccer = Array.from(document.querySelectorAll('#soccer img'));

  soccer.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.classList.add('scale-110');
    });

    image.addEventListener('mouseleave', () => {
      image.classList.remove('scale-110');
    });
  });

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const burgerMenuBtn = document.getElementById('burger-menu-btn');
const navLinkss = document.querySelectorAll('.navl');
const header = document.querySelector('header');

  burgerMenuBtn.addEventListener('click', function() {
    const overlayDiv = header.querySelector('.overlay-div');
  
    if (overlayDiv) {
      overlayDiv.remove();
    } else {
      const overlayDiv = document.createElement('div');
      overlayDiv.classList.add('overlay-div', 'opacity-50', 'nav-bg', 'fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'z-10', 'flex', 'justify-center', 'items-center');
  
      navLinkss.forEach(link => {
        link.classList.add('block', 'text-2xl', 'text-center', 'py-4', 'mr-4');
        overlayDiv.appendChild(link.cloneNode(true));
      });

      header.appendChild(overlayDiv);
    }
  });
  