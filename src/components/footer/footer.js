import React from 'react'
import './footer.css';
import LogoFooter from '../../assets/images/logodark.png';

const Footer = () => {
    return (

        <footer className="footer-background dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-center">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center d-flex-centrado">
                            <img src={LogoFooter} className="mr-3" alt="FlowBite Logo" />
                        </a>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Politicas de privacidad</a>
                                </li>
                                <li>
                                    <a href="https://flowbite.com/" className="hover:underline">Terminos y condiciones</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer