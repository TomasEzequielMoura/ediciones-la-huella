import React from 'react'
import './tipo-libro.css';

import circulo1 from '../../assets/images/4mujeres.jpg';
import circulo2 from '../../assets/images/Mechi.jpg';
import circulo3 from '../../assets/images/Rita.jpg';
import circulo4 from '../../assets/images/Luis.jpg';

const TipoLibro = () => {
  return (
    <>
      <section id="tipo-libros" style={{ height: 'auto' }}>
        <div>
          <h2 className='subtitle'>¿Qué tipo de libro te gustaría realizar?</h2>
          <h3 className='subsubtitle2'>En nuestras videas existen momentos y personas especiales que merecen un regalo único</h3>
        </div>
        <div className="container container-tipo-libro">
          <div className='column-card'>
            <div className="card">
              <div className="img-box">
                <img src={circulo1} alt="alineadores" />
              </div>
              <div className="content">
                <div>
                  <h2>Historia de vida familiar</h2>
                  <p>
                    Cada familia tiene una historia única que contar, y estamos aquí para ayudarte a darle vida. Nuestra misión es transformar las experiencias, valores y lecciones de tu familia en una historia que inspirará y conectará a lo largo del tiempo.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img-box">
                <img src={circulo4} alt="limpieza" />
              </div>
              <div className="content">
                <div>
                  <h2>Trayectoria de una empresa</h2>
                  <p>
                    Cada empresa es un viaje único. Te ofrecemos la oportunidad única de preservar y compartir la historia de tu negocio. Somos los narradores que transformarán los hitos, los desafíos superados y los momentos memorables de tu empresa en una historia que perdurará a lo largo del tiempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='column-card'>
            <div className="card">
              <div className="img-box">
                <img src={circulo3} alt="ortodoncia" />
              </div>
              <div className="content">
                <div>
                  <h2>Preservar tus mejores fotos</h2>
                  <p>
                    Te brindamos la oportunidad de inmortalizar tus momentos más preciados en imágenes que contarán tus historias a lo largo del tiempo. Nuestro compromiso es capturar la esencia de tus recuerdos y convertirlos en tesoros visuales que perdurarán para siempre.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img-box">
                <img src={circulo2} alt="ortodoncia" />
              </div>
              <div className="content">
                <div>
                  <h2>Bítacora de tus viajes</h2>
                  <p>
                    Explorar y revivir cada uno de tus emocionantes viajes a través de nuestras detalladas bitácoras. La bítacora de un viaje es mucho más que un simple registro de fechas y lugares; es un testimonio documentado de las experiencias, los encuentros y las impresiones que conforman tu travesía.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default TipoLibro