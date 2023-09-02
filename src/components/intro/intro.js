import React from 'react'
import VideoCaras from '../../assets/videos/caras.mp4';
import './intro.css';

import ReactPlayer from 'react-player'

const Intro = () => {
  return (
    <section className='intro-background'>
      <div className='container mx-auto intro'>
        <div className="columns-2 d-flex-center ">
          <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Hacemos que tu historia perdure en el tiempo.
            </h1>
            <h2 className="text-4xl font-extrabold text-gray-700 dark:text-white">
              Animate vos también a dejar tu huella.
            </h2>
            <div className='mt-5'>
              <a href="#contactUs">
                <nav className="button-creative button-secondary-creative contactanos-home">
                  <ul>
                    <li>
                      Contactanos<span></span><span></span><span></span><span></span>
                    </li>
                  </ul>
                </nav>
              </a>
            </div>
          </div>
          <ReactPlayer
            className='video-intro'
            url={VideoCaras}
            width='100%'
            height='100%'
            controls={false}
            loop={true}
            playing={true}
            muted={true} />
        </div>
      </div>
    </section>
  )
}

export default Intro