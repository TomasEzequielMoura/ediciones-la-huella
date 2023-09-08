import React, { useState, useEffect } from 'react'
import "./contact-us.css";

import { DevicePhoneMobileIcon, CheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useForm } from 'react-hook-form';

import { ProgressBar } from 'react-loader-spinner'

import emailjs from '@emailjs/browser';

const toastifySuccess = () => {
    toast('Form sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
    });
};

const ContactUs = () => {

    const [waitingEmailJS, setWaitingEmailJS] = useState(false)
    const [emailJSSent, setEmailJSSent] = useState(false)

    const onSubmit = async (data) => {

        setWaitingEmailJS(true)

        console.log(data)

        const { firstName, lastName, email, phoneNumber, message } = data;

        console.log('firstName: ', firstName);
        console.log('lastName: ', lastName);
        console.log('email: ', email);
        console.log('phoneNumber: ', phoneNumber);
        console.log('Message: ', message);

        try {
            const templateParams = {
                firstName,
                lastName,
                email,
                phoneNumber,
                message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
            setWaitingEmailJS(false)
            setEmailJSSent(true)
        } catch (e) {
            console.log(e);
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    return (
        <section className="contact-us container">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className='subtitle'>Contactanos</h2>
                <h3 className='subsubtitle2'>¡Llena el formulario! Estamos listos para escuchar tu historia</h3>
            </div>
            <div className="columns-2 d-flex-centrado direction-row gap-x-8">
                {
                    waitingEmailJS ?
                        <div className='msg-sent'>
                            <ProgressBar
                                height="80"
                                width="80"
                                ariaLabel="progress-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass="progress-bar-wrapper"
                                borderColor='#231f20'
                                barColor='#5c2332'
                            />
                        </div>
                        :
                        <div className='form-size'>
                            {
                                emailJSSent ?
                                    <div className='msg-sent'>
                                        <p>
                                            <CheckIcon className="text-blue-500" /><br />
                                            ¡Su mensaje fue enviado! En las proximas horas nos contactaremos.
                                        </p>
                                    </div>
                                    :
                                    <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                            <input type="hidden" name="access_key" value="18310a53-c945-4c16-a70c-e72dd5d5e5ea" />
                                            <div>
                                                <label htmlFor="firstNamee" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Nombre *
                                                </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        placeholder='Nombre'
                                                        type="text"
                                                        name="firstName"
                                                        id="firstName"
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        {...register('firstName', {
                                                            required: { value: true, message: 'Por favor ingrese su nombre' },
                                                            maxLength: {
                                                                value: 30,
                                                                message: 'Maximo 30 caracteres'
                                                            }
                                                        })}
                                                    ></input>
                                                    {errors.firstName && <span className='errorMessage'>{errors.firstName.message}</span>}
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Apellido *
                                                </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        placeholder='Apellido'
                                                        type="text"
                                                        name="lastName"
                                                        id="lastName"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        {...register('lastName', {
                                                            required: { value: true, message: 'Por favor ingrese su apellido' },
                                                            maxLength: {
                                                                value: 30,
                                                                message: 'Maximo 30 caracteres'
                                                            }
                                                        })}
                                                    ></input>
                                                    {errors.lastName && <span className='errorMessage'>{errors.lastName.message}</span>}
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Correo electrónico *
                                                </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        placeholder='Correo electrónico'
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        autoComplete="email"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        {...register('email', {
                                                            required: true,
                                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                        })}
                                                    ></input>
                                                    {errors.email && (
                                                        <span className='errorMessage'>Por favor ingrese un email valido</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Celular *
                                                </label>
                                                <div className="relative mt-2.5">
                                                    <input
                                                        placeholder='Celular'
                                                        type="tel"
                                                        name="phoneNumber"
                                                        id="phoneNumber"
                                                        autoComplete="tel"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        {...register('phoneNumber', {
                                                            required: true,
                                                            pattern: /^\+?[1-9]\d{1,14}$/
                                                        })}
                                                    ></input>
                                                    {errors.phoneNumber && (
                                                        <span className='errorMessage'>Por favor ingrese un celular valido</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Mensaje *
                                                </label>
                                                <div className="mt-2.5">
                                                    <textarea
                                                        placeholder='Plasme su idea'
                                                        name="message"
                                                        id="message"
                                                        rows={4}
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        defaultValue={''}
                                                        {...register('message', {
                                                            required: true
                                                        })}
                                                    ></textarea>
                                                    {errors.message && <span className='errorMessage'>Por favor, ingrese un mensaje</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <div className='mt-5'>
                                                <a href="#contactUs">
                                                    <nav className="button-creative button-primary-creative">
                                                        <ul>
                                                            <button type="submit">
                                                                <li>
                                                                    Contactanos<span></span><span></span><span></span><span></span>
                                                                </li>
                                                            </button>
                                                        </ul>
                                                    </nav>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                            }
                        </div>
                }
                <div className='contacto-data'>
                    <p><DevicePhoneMobileIcon className="h-5 w-5 text-blue-500" />+54 9 11  6048 5610</p>
                    <p><EnvelopeIcon className="h-5 w-5 text-blue-500" />contacto@edicioneslahuella.com.ar</p>
                    <p><EnvelopeIcon className="h-5 w-5 text-blue-500" />mefontaina@gmail.com</p>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;