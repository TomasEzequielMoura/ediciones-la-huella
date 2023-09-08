// import { useState } from 'react'
// import "./contact-us.css";

// import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
// import { EnvelopeIcon } from '@heroicons/react/24/outline';

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default function ContactUs() {
//     const [agreed, setAgreed] = useState(false)

//     const msg = {
//         to: 'tomimoura@gmail.com',
//         from: 'tomimoura@gmail.com', // Use the email address or domain you verified above
//         subject: 'Sending with Twilio SendGrid is Fun',
//         text: 'and easy to do anywhere, even with Node.js',
//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };

//     sgMail
//         .send(msg)
//         .then(() => {
//             console.log("OK")

//         })
//         .catch((error) => {
//             console.error(error);
//         })

//     return (
//         <section className="contact-us container">
//             <div className="mx-auto max-w-2xl text-center">
//                 <h2 className='subtitle'>Contactanos</h2>
//                 <h3 className='subsubtitle2'>¡Llena el formulario! Estamos listos para escuchar tu historia</h3>
//             </div>
//             <div className="columns-2 d-flex-centrado direction-row gap-x-8">
//                 <form action="#" method="POST" className="mt-10 columns-xl">
//                     <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                         <div>
//                             <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
//                                 Nombre
//                             </label>
//                             <div className="mt-2.5">
//                                 <input
//                                     placeholder='Nombre'
//                                     type="text"
//                                     name="first-name"
//                                     id="first-name"
//                                     autoComplete="given-name"
//                                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
//                                 Apellido
//                             </label>
//                             <div className="mt-2.5">
//                                 <input
//                                     placeholder='Apellido'
//                                     type="text"
//                                     name="last-name"
//                                     id="last-name"
//                                     autoComplete="family-name"
//                                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>
//                         <div className="sm:col-span-2">
//                             <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
//                                 Correo electrónico
//                             </label>
//                             <div className="mt-2.5">
//                                 <input
//                                     placeholder='Correo electrónico'
//                                     type="email"
//                                     name="email"
//                                     id="email"
//                                     autoComplete="email"
//                                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>
//                         <div className="sm:col-span-2">
//                             <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
//                                 Celular
//                             </label>
//                             <div className="relative mt-2.5">
//                                 <input
//                                     placeholder='Celular'
//                                     type="tel"
//                                     name="phone-number"
//                                     id="phone-number"
//                                     autoComplete="tel"
//                                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>
//                         <div className="sm:col-span-2">
//                             <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
//                                 Mensaje
//                             </label>
//                             <div className="mt-2.5">
//                                 <textarea
//                                     placeholder='Plasme su idea'
//                                     name="message"
//                                     id="message"
//                                     rows={4}
//                                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     defaultValue={''}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-10">
//                         <div className='mt-5'>
//                             <a href="#contactUs">
//                                 <nav className="button-creative button-primary-creative">
//                                     <ul>
//                                         <li>
//                                             Contactanos<span></span><span></span><span></span><span></span>
//                                         </li>
//                                     </ul>
//                                 </nav>
//                             </a>
//                         </div>
//                     </div>
//                 </form>
//                 <div className='contacto'>
//                     <p><DevicePhoneMobileIcon className="h-5 w-5 text-blue-500" />+54 9 11  6048 5610</p>
//                     <p><EnvelopeIcon className="h-5 w-5 text-blue-500" />contacto@edicioneslahuella.com.ar</p>
//                     <p><EnvelopeIcon className="h-5 w-5 text-blue-500" />mefontaina@gmail.com</p>
//                 </div>
//             </div>
//         </section>
//     )
// }

import React, { useState } from "react"
const Message = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    const PostData = () => {
        fetch("/send", {
            method: "post",
            headers: {
                "Content - Type": "application / json"
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        }).then(res => res.json())
            .then(data => {
                alert(data.message)
                setMessage("")
                setName("")
                setSubject("")
                setEmail("")
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div style={{ maxWidth: "60%", display: "flex", flexDirection: "column", alignItems: "center" }} className=" mycard">
            <div className="card auth-card input-field">
                <h2>Send me a Message</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={() => PostData()}
                >
                    Send Message
                </button>
            </div >
        </div >
    )
}
export default Message