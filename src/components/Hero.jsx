/* eslint-disable no-unused-vars */
import React from 'react'
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Hero = () => {
  return (
    <section className='relative '>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center lg:h-[90h] justify-between'>
                <div className='md:w1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg-mt-0 mt-10'>
                <br /><br></br>
                    <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'> Olá, me chamo<br/> <span className='text-red-500'>Marcio</span> André </h1>
                    <p className='md:text-2xl text-xl mb-4'>Desenvolvedor <span className='text-red-500'>Front-End.</span></p>
                    <p className='mb-4'>Sou um desenvolvedor apaixonado por tecnologia, expertise na criação de páginas modernas e eficientes.<br/> Adoro desenvolver projetos visualmente atraentes e funcionais que oferecem soluções para desafios reais.</p>
                    <a href="https://drive.google.com/file/d/1NpEJcDuMEaGSUzcBL67OkyCVIosWWZMw/view?usp=sharing" target='_blank' download>
                        <button className='bg-black text-white px-3 py-2 w-max rounded-md' >Download Currículo</button>
                    </a>
                </div>
            </div>
        </div>
        <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
            <a href="https://github.com/AndreOn04" target='_blank'>
                <img src={github} alt="" className='w-20' />
            </a>
            <a href="https://www.linkedin.com/in/marcioandre-dev" target='_blank'>
                <img src={linkedin} alt="" className='w-20' />
            </a>
        </div>
    </section>
  )
}

export default Hero