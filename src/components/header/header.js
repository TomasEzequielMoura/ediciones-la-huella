import React from 'react'

import LogoHeader from '../../assets/images/logo.png';
import './header.css';
import {  useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = ({details}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="header container">
            <nav className="mx-auto flex items-center justify-between pt-6 pb-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img className="logo-header w-auto" src={LogoHeader} alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-8">
                    <a href="#tipo-libros" className=" font-semibold leading-6 ">
                        Libros
                    </a>
                    <a href="#faq" className=" font-semibold leading-6 ">
                    Preguntas Frecuentes
                    </a>
                    <a  href="#clientes-satisfechos" className=" font-semibold leading-6 ">
                    Clientes Agradecidos
                    </a>
                    <a  href="#contactUs" className=" font-semibold leading-6 ">
                    Contactanos
                    </a>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#clientes-satisfechos" className="-m-1.5 p-1.5">
                            <span className="sr-only">Clientes Agradecidos</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#tipo-libros"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Libros
                                </a>
                                <a
                                    href="#faq"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Preguntas Frecuentes
                                </a>
                                <a
                                    href="#clientes-satisfechos"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Clientes Agradecidos
                                </a>
                                <a
                                    href="#contactUs"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contactanos
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header