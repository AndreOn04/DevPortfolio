/* eslint-disable no-unused-vars */
import React from 'react'
import Html from '../assets/HTML.png';
import Css from '../assets/CSS.png';
import react from '../assets/react.png';
import JS from '../assets/JS.png';
import Mysql from '../assets/mysql.png';
import Php from '../assets/php.png';
import Node from '../assets/node.png';
import BootsTrap from '../assets/bootstrap.png';
import Git from '../assets/git.jpeg';
import GitHub from '../assets/github.png';

const About = () => {
  return (
    <div className='relative top-40 font-inter' id='about'>
        <br /><br/><br/><br/>
        <div className='bg-gray-100 py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>Sobre Mim</h2>
                    {/* <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Marcio André 👋</p> */}
                    <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                        Desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais, expertise em ReactJS, HTML, CSS e JavaScript, buscando crescer na área de desenvolvimento.
                    </p>
                </div>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                        <div>
                            <h3 className='text-2xl font-semibold text-gray-900'>Minha Jornada</h3>
                            <p className='mt-4 text-lg text-gray-600'>
                                Comecei minha jornada na programação em 2022, cheio de curiosidade e vontade de aprender. Iniciei meus estudos explorando aulas teóricas e já colocava em prática o que aprendia. Logo consegui meu primeiro freela, desenvolvendo o front-end de um site. Esse projeto foi um marco para mim, pois além de ser meu primeiro trabalho na área, ele me mostrou que eu poderia transformar o que estava aprendendo em algo real e útil. Depois disso, aprofundei meus estudos em <b>JavaScript</b> e, com mais confiança, comecei a explorar <b>ReactJS</b>, o que abriu muitas possibilidades. Mesmo enfrentando desafios para encontrar oportunidades no mercado, continuei estudando e me especializando. Hoje, estou cursando <b>Análise e Desenvolvimento de Sistemas</b> e, com o objetivo de longo prazo é me tornar um desenvolvedor mobile. Tenho me dedicado a aprender <b>Dart</b> e <b>Flutter</b>, enquanto continuo praticando e me aprimorando.
                            </p>
                        </div>
                        <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                            <h3 className='text-2xl font-semibold text-red-600'>Habilidades & Expertise</h3>
                            <div className='flex items-center justify-center flex-wrap gap-3'>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={Html} alt="" className='w-10'/>
                                    <span className='font-semibold'>HTML5</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={Css} alt="" className='w-10'/>
                                    <span className='font-semibold'>Css3</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={JS} alt="" className='w-10'/>
                                    <span className='font-semibold'>JavaScript</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={react} alt="" className='w-8 rounded-full'/>
                                    <span className='font-semibold'>ReactJS</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={Php} alt="" className='w-10'/>
                                    <span className='font-semibold'>PHP</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={Mysql} alt="" className='w-10'/>
                                    <span className='font-semibold'>MySQL</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={Node} alt="" className='w-10'/>
                                    <span className='font-semibold'>NodeJS</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={Git} alt="" className='w-10'/>
                                    <span className='font-semibold'>Git</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={GitHub} alt="" className='w-10'/>
                                    <span className='font-semibold'>GitHub</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={BootsTrap} alt="" className='w-10'/>
                                    <span className='font-semibold'>BootsTrap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <h3 className='text-2xl font-semibold text-gray-900'> Mais Sobre Mim </h3>
                    <p className='mb-20 mt-4 text-lg text-gray-600'>
                        Minha maior motivação é criar aplicações que sejam bonitas, funcionais e que realmente resolvam problemas do dia a dia. Cada novo aprendizado e cada novo projeto são passos importantes para alcançar meus objetivos na programação.   
                    </p>
                </div>
                <br /><br /><br /><br />
            </div>
        </div>
    </div>
  )
}

export default About