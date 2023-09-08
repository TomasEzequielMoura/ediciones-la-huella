import { useState } from "react";
import { cards } from "./cards";
import "./clientes-accordion.css";

const ClientsAccordion = () => {
    const [active, setActive] = useState(0);
    const handleToggle = (index) => setActive(index);

    return (
        <>
            <div className="container" id='clientes-satisfechos'>
                <h2 className='subtitle'>Clientes Agradecidos</h2>
                <h3 className='subsubtitle2'>Nuestra mayor satisfacción es lograr que nuestros clientes deseen  compartir con nosotros la felicidad de inmortalizar sus historias.</h3>
                <section className="clientes-accordion">
                    {cards.map((card, index) => {
                        const isActive = active === index ? "active" : "";
                        return (
                            <article key={card.image} className={isActive} onClick={() => handleToggle(index)}>
                                <img src={card.image} alt='acordion img' />
                                <div className="content">
                                    <div>
                                        <h2>{card.header}</h2>
                                        <p>{card.text}</p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </section>
            </div>

        </>

    );
};

export default ClientsAccordion;