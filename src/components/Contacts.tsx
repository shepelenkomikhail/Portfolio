import ContactIcons from "./ContactIcons.tsx";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contacts() {
    const [isEmailError, setIsEmailError] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    };

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value);
    };

    const handleMessageInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageInput(e.target.value);
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidEmail(emailInput)) {
            setIsEmailError(true);
            return;
        }

        setIsEmailError(false);

        const templateParams = {
            email: emailInput,
            message: messageInput,
            name: nameInput
        };

        emailjs
            .send('service_pvr2o38', 'template_nvwgrzd', templateParams, 'XXUk0SDweb88v_cui')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setNameInput('');
                setEmailInput('');
                setMessageInput('');
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('Failed to send email. Error:', error);
                alert('Error sending message. Please try again.');
            });
    };

    return (
        <div className="flex flex-col gap-12 lg:gap-16 mb-12 2xl:mb-36" id={"contacts"}>
            <div>
                <h1 className="text-titleYellow">contact me.</h1>
                <p className="text-lg w-8/12 font-medium mt-4">Available 24/7!</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-7">
                    <p className="font-semibold text-3xl lg:text-4xl">Let's work together!</p>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-xl">Email</p>
                        <p className="text-md lg:text-xl">shepelenkomykhailo@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-xl">Phone</p>
                        <p className="text-md lg:text-xl">+36 30 736 44 29 | +380 99 276 07 34</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-xl">Telegram | WhatsApp</p>
                        <p className="text-md lg:text-xl">+380 50 546 15 18</p>
                    </div>
                    <div className="flex gap-5 mt-4 mb-12 lg:mb-0">
                        <ContactIcons />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Name"
                            value={nameInput}
                            onChange={handleNameInput}
                            className="w-full lg:w-96 2xl:w-128 h-12 border-2 border-gray-300 rounded-md p-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={emailInput}
                            onChange={handleEmailInputChange}
                            className={`w-full lg:w-96 2xl:w-128 h-12 border-2 ${isEmailError ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 mt-5`}
                        />
                        <textarea
                            placeholder="Message"
                            value={messageInput}
                            onChange={handleMessageInputChange}
                            className="w-full lg:w-96 2xl:w-128 h-48 border-2 border-gray-300 rounded-md p-2 mt-5"
                        />
                        <div className="relative w-40 h-14 group mt-8">
                            <div className="absolute translate-x-1.5 translate-y-1.5 bg-buttonYellow transition-transform rounded-md opacity-90 w-full h-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                            <button className="absolute w-full h-full border border-[#474306] rounded-md text-gray-900" type="submit">
                                <span className="relative z-10 text-[#474306]">Send</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
