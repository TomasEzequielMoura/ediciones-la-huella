import React from 'react'
import Header from '../../components/header/header'
import Intro from '../../components/intro/intro'
import Footer from '../../components/footer/footer'
import TipoLibro from '../../components/tipo-libro/tipo-libro'
import './home.css';
import FAQ from '../../components/faq/faq'
import ClientesAccordion from '../../components/clientes-accordion/clientes-accordion'
import ContactUs from '../../components/contact-us/contact-us'

const Home = ({details}) => {

    console.log(details)

    return (
        <>
            <Header/>
            <Intro />
            <TipoLibro />
            <FAQ />
            <ClientesAccordion />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home