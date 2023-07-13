'use client'

import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const currentForm = form.current;
        if (currentForm == null) return;

        setIsSent(true);
        
        emailjs.sendForm(
            'service_9zf8hv5',
            'template_b16qquo',
            currentForm,
            'RT9dPzlkKTjB6VHGV'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    function onResubmit() {
        setIsSent(false);
        const form: HTMLFormElement | null = document.getElementById("contact-form") as HTMLFormElement;
        if (form) {
            form.reset();
        }
    }


    return (
        <form id={'contact-form'} ref={form} onSubmit={sendEmail}>
            <div className="md:flex md:items-center mb-4">
                <div className={'md:w-[15%] font-bold text-left'}>
                    <label className={'mr-4 text-white'}>Name</label>
                </div>
                <div className={'md:w-[85%]'}>
                    <input
                        required
                        type="text"
                        name="user_name"
                        className={"shadow text-green-900 bg-white appearance-none border-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-600"}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-4">
                <div className={'md:w-[15%] font-bold text-left'}>
                    <label className={'mr-4 text-white'}>Email</label>
                </div>
                <div className={'md:w-[85%]'}>
                    <input
                        type="email"
                        name="user_email"
                        className={"mb-2 shadow text-green-900 bg-white appearance-none border-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-600"}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-4">
                <div className={'md:w-[15%] font-bold text-left'}>
                    <label className={'mr-4 text-white'}>Message</label>
                </div>
                <div className={'md:w-[85%]'}>
                <textarea
                    required
                    name="message"
                    className={"mb-2 shadow text-green-900 bg-white appearance-none border-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-600"}
                />
                </div>
            </div>
            {isSent
                ? <div>
                    <p className={'mt-2 text-white'}>Message sent successfully!</p>
                    <button
                        type="submit"
                        onClick={onResubmit}
                        className={"mt-2 shadow bg-green-800 hover:bg-green-900 hover:cursor-pointer transition-colors duration-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"}>
                        Submit another one
                    </button>
                </div>
                : <input
                    type="submit"
                    value="Send"
                    className={"shadow bg-green-800 hover:bg-green-900 hover:cursor-pointer transition-colors duration-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"}
                />}
        </form>
    );
};