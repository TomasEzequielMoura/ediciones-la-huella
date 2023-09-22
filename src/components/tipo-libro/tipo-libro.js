import React from 'react'
import './tipo-libro.css';

import circulo1 from '../../assets/images/futuras-generaciones.jpg';
import circulo2 from '../../assets/images/volver-a-vivir.jpg';
import circulo3 from '../../assets/images/mapa-bitacora.jpg';
// import circulo4 from '../../assets/images/Luis.jpg';

const tipoLibroTitleList = [['Legado a futuras', 'generaciones'], ["Preservar", "tus mejores fotos"], ['Bitácora', 'de tus viajes']];
const tipoLibroDescriptionList = [
  'Te interesa conservar tus memorias y las que tus padres y abuelos te solían contar? Nosotros te ayudamos a que seas vos quien relate en un libro de edición privada la Historia de tu Familia a las generaciones venideras. Juntos hagamos que tu historia perdure en el tiempo.',
  'Te brindamos la posibilidad de preservar tus momentos mas preciados en imágenes que contarán tus historias. Nuestro compromiso es convertir tus fotos sueltas en relatos visuales que perdurarán en un libro a través del tiempo.',
  'La bitácora de un viaje es mucho más que el registro de fechas y lugares: es dejar un testimonio documentado con las experiencias, las sensaciones y las impresiones que conformaron tu travesía. Leerlas, será como volver a vivir las emociones de tus viajes.'
];

const imagenes = [circulo1, circulo2, circulo3]

class MobileTipoLibro extends React.Component {
  render() {
    const { title1, title2, description, imagen } = this.props;

    return (
      <div>
        <div className='contenedor'>
          <div className='contenedor_tarjeta'>
            <div className='remplazohref'>
              <figure>
                <div className='frontal'>
                  <img src={imagen} className='fluid' alt="card-user" />
                  <h4>{title1}<br></br>{title2}</h4>
                </div>
                <div className='trasera'>
                  <p>
                    {description}
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

class DesktopTipoLibro extends React.Component {
  render() {
    const { title1, title2, description, imagen } = this.props;

    return (
      <div className="card">
        <div className="img-box">
          <img src={imagen} alt="alineadores" />
        </div>
        <div className="content">
          <div>
            <h2>{title1} <br></br>{title2}</h2>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const TipoLibro = () => {
  return (
    <section id="tipo-libros" className='container'>
      <div>
        <h2 className='subtitle'>¿Qué tipo de libro te gustaría realizar?</h2>
        <h3 className='subsubtitle2'>En nuestras vidas existen momentos y personas especiales que merecen un regalo único</h3>
      </div>
      <div className="container-tipo-libro hidden lg:block">

        <div className='column-card'>
          {
            tipoLibroTitleList.map((item, index) => (
              <DesktopTipoLibro title1={item[0]} title2={item[1]} description={tipoLibroDescriptionList[index]} imagen={imagenes[index]} key={index + 1} />
            ))
          }

          {/* <div className="card">
            <div className="img-box">
              <img src={circulo1} alt="alineadores" />
            </div>
            <div className="content">
              <div>
                <h2>Legado a futuras generaciones</h2>
                <p>
                  Te interesa conservar tus memorias y las que tus padres y abuelos te solían contar? Nosotros te ayudamos a que seas vos quien relate en un libro de edición privada la Historia de tu Familia a las generaciones venideras. Juntos hagamos que tu historia perdure en el tiempo.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-box">
              <img src={circulo3} alt="ortodoncia" />
            </div>
            <div className="content">
              <div>
                <h2>Preservar tus mejores fotos</h2>
                <p>
                  Te brindamos la posibilidad de preservar tus momentos mas preciados en imágenes que contarán tus historias. Nuestro compromiso es convertir tus fotos sueltas en relatos visuales que perdurarán en un libro a través del tiempo.
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
                <h2>Bitácora de tus viajes</h2>
                <p>
                  La bitácora de un viaje es mucho más que el registro de fechas y lugares: es dejar un testimonio documentado con las experiencias, las sensaciones y las impresiones que conformaron tu travesía. Leerlas, será como volver a vivir las emociones de tus viajes.
                </p>
              </div>
            </div> 
          </div> */}
        </div>
      </div>
      <div className='container cards-section lg:hidden'>
        <div lg={3} md={2} xs={1} className='corregir-margin'>
          {
            tipoLibroTitleList.map((item, index) => (
              <MobileTipoLibro title1={item[0]} title2={item[1]} description={tipoLibroDescriptionList[index]} imagen={imagenes[index]} key={index} />
            ))
          }
          {/* <div>
              <div className='contenedor'>
                <div onclick="" className='contenedor_tarjeta'>
                  <div className='remplazohref'>
                    <figure>
                      <div className='frontal'>
                        <img src={circulo1} className='fluid' alt="card-user" />
                        <h4>Legado a futuras<br />generaciones</h4>
                      </div>
                      <figcaption className='trasera'>
                        <p>
                          Te interesa conservar tus memorias y las que tus padres y abuelos te solían contar? Nosotros te ayudamos a que seas vos quien relate en un libro de edición privada la Historia de tu Familia a las generaciones venideras. Juntos hagamos que tu historia perdure en el tiempo.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <div className='contenedor'>
                <div className='contenedor_tarjeta'>
                  <div className='remplazohref'>
                    <figure>
                      <div className='frontal'>
                        <img src={circulo3} className='fluid' alt="card-user" />
                        <h4>Preservar<br></br>tus mejores fotos</h4>
                      </div>
                      <figcaption className='trasera'>
                        <p>
                          Te brindamos la posibilidad de preservar tus momentos mas preciados en imágenes que contarán tus historias. Nuestro compromiso es convertir tus fotos sueltas en relatos visuales que perdurarán en un libro a través del tiempo.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='contenedor'>
                <div className='contenedor_tarjeta'>
                  <div className='remplazohref'>
                    <figure>
                      <div className='frontal'>
                        <img src={circulo2} className='fluid' alt="card-user" />
                        <h4>Bitácora<br></br>de tus viajes</h4>
                      </div>
                      <figcaption className='trasera'>
                        <p>
                          La bitácora de un viaje es mucho más que el registro de fechas y lugares: es dejar un testimonio documentado con las experiencias, las sensaciones y las impresiones que conformaron tu travesía. Leerlas, será como volver a vivir las emociones de tus viajes.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div> 
            </div> */}
        </div>
      </div>
    </section>
  )
}

export default TipoLibro