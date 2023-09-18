import React from "react";
import "./faq.css";

const accordionQuestionList = [ '¿Necesito saber redactar?', '¿Cuánto tiempo se necesita?'];
const accordionAnswerList = [
    'No es necesario que te guste escribir. Nuestro equipo de redactores hace que tus relatos sean narrados como una verdadera historia', 
    'En una primera reunión delineamos los alcances de tu proyecto, definimos sus interlocutores, y establecemos los plazos de entrega. A partir de allí, solo restará que disfrutes del reencuentro con viejas fotos, cartas y tesoros personales que merecen un espacio en tu libro.'
];

class Accordion extends React.Component {
    render() {
        const { title, description, expand, onClick } = this.props;

        return (
            <div className="item-faq">
                <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
                    {title}
                </dt>
                <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
                    <p>{description}</p>
                </dd>
            </div>
        );

    }
}

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            block1: true,
            block2: false,
        };
    }

    toggle = (index) => () => {

        let notIndex;
        if(index == 2){
            notIndex = 1
        } else {
            notIndex = 2
        }

        this.setState({ [`block${index}`] : !this.state[`block${index}`] });
        this.setState({ [`block${notIndex}`] : !this.state[`block${notIndex}`] });
    }

    render() {
        return <div className="container faq-section" id='faq'>
            <h2 className='subtitle'>Preguntas Frecuentes</h2>
            <h3 className='subsubtitle2'>Respuestas a las preguntas más comunes</h3>
            <dl className="accordion">
                {
                    accordionQuestionList.map((item, index) => (
                        <Accordion title={item} description={accordionAnswerList[index]} key={index} onClick={this.toggle(index + 1)} expand={this.state[`block${index + 1}`]} />
                    ))
                }
            </dl>
        </div>;
    }
}

export default Application