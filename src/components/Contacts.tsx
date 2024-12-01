import ContactIcons from "./ContactIcons.tsx";

export default function Contacts() {
    return (
        <div className="flex flex-col gap-24 mb-48">
            <div>
                <h1 className="text-titleYellow">contact me.</h1>
                <p className="text-lg w-8/12 font-medium">Available 24/7!</p>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-7">
                    <p className="font-semibold text-4xl">Let's work together!</p>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-xl">Email</p>
                        <p className="text-xl">shepelenkomykhailo@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-xl">Phone</p>
                        <p className="text-xl">+36 30 736 44 29 | +380 99 276 07 34</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-xl">Telegram | WhatsApp</p>
                        <p className="text-xl">+380 50 546 15 18</p>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <ContactIcons />
                    </div>
                </div>
                <form>
                    <div className="flex flex-col">
                        <input type="text" placeholder="Name" className="w-96 2xl:w-128 h-12 border-2 border-gray-300 rounded-md p-2"/>
                        <input type="email" placeholder="Email" className="w-96 2xl:w-128 h-12 border-2 border-gray-300 rounded-md p-2 mt-5"/>
                        <textarea placeholder="Message" className="w-96 2xl:w-128 h-48 border-2 border-gray-300 rounded-md p-2 mt-5"/>
                        <div className="relative w-40 h-14 group mt-8">
                            <div className="absolute translate-x-1.5 translate-y-1.5 bg-buttonYellow
                                               transition-transform rounded-md opacity-90 w-full h-full
                                               group-hover:translate-x-0 group-hover:translate-y-0">
                            </div>
                            <button className="absolute w-full h-full border border-[#474306] rounded-md text-gray-900"
                                    type={"submit"}>
                                <span className="relative z-10 text-[#474306]">Send</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}