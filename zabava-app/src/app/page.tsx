'use client'
import {useRouter } from 'next/navigation'
import PrimaryAppBar from "./components/AppBar";
import './page.css' 
import WovenImageList from './components/WovenImageList';
import Image from 'next/image';

export default function Home() {

  const router = useRouter()

  return (
    <main className='home-main'>
      <header><PrimaryAppBar></PrimaryAppBar></header>
        <div className="home-body">
          <div className="home-top-content">
            <div className="home-call-to-action">
              <h2>O incrível universo dos eventos de espera!</h2>
              <p>Organize e participe de eventos incríveis. Viva e
                promova experiências inesquecíveis. Do presencial
                ao virtual, do pré ao pós-evento, tudo em um só lugar
              </p>
              <div className="home-call-to-action-buttons-container">
              <button className="organizar-evento">                  
                  <span className="text">ORGANIZAR EVENTOS</span>
                  <span className="circle"></span>
                </button>

                <button className="explorar-evento">
                  <svg viewBox="0 0 24 24" className="arr-22" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                  </svg>
                  <span className="text2">EXPLORAR EVENTOS</span>
                  <span className="circle2"></span>
                  <svg viewBox="0 0 24 24" className="arr-12" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="home-top-image-box">
              <WovenImageList></WovenImageList>
            </div>
          </div>
          <div className="home-middle-content">
            <Image
                  src="/fast-clock.png"
                  width={100}
                  height={100}
                  loading='lazy'
                  alt="Fast clock image"
                  id='fast-clock-image' />
              <p>MAIS RAPIZES PARA SEUS EVENTOS</p>
              <Image
                  src="/eficiency-icon.png"
                  width={100}
                  height={100}
                  loading='lazy'
                  alt="Eficiency icon image"
                  id='eficiency-icon-image' />
              <p>FLUIDEZ, EFICIÊNCIA E COMODIDADE PARA CADASTRAR SEUS EVENTOS</p>
              <Image
                  src="/security-icon.png"
                  width={100}
                  height={100}
                  loading='lazy'
                  alt="Security icon image"
                  id='security-icon-image' />
              <p>SEGURANÇA NA HORA DE MONTAR SUA EXPERIÊNCIA</p>              
          </div>
          <div className="home-botton-content">

          </div>
        </div>
      <footer></footer>
    </main>
  );
}
