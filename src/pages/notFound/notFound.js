import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './notFound.css';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="container grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className='mt-5'>
              <a href="/">
                <nav className="button-creative button-creative-auto button-primary-creative">
                  <ul>
                    <li>
                      Contactanos<span></span><span></span><span></span><span></span>
                    </li>
                  </ul>
                </nav>
              </a>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound