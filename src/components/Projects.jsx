/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import Gerador from '../assets/gerador.png';
import Ecommerce from '../assets/E-commerce.png';
import Shopping from '../assets/myshopeasy.png';
import FitClub from '../assets/fitCLub.png';
import NetFlix from '../assets/netflix.png';    
import Cards from './Cards';

const Projects = () => {
    const projectJson = [
        {
            title: 'Gerador de Currículos',
            desc: 'Aplicação que gera currículos para os usuários',
            image: Gerador,
            live: "https://ocurriculo.com.br/",
        },
        {
            title: 'E-commerce',
            desc: 'E-commerce para a venda de produtos de beleza',
            image: Ecommerce,
            live: "https://megacompras.netlify.app/",
        },
        {
            title: 'MyShopeasy',
            desc: 'Aplicação Semelhante ao Mercado Livre',
            image: Shopping,
            live: "https://myshopeasy.netlify.app/",
        },
        {
            title: 'Fit Club',
            desc: 'Aplicação de treinamento de musculação',
            image: FitClub,
            live: "https://fit-club-jet.vercel.app/",
        },
        {
            title: 'NetFlix',
            desc: 'Aplicação de streaming de filmes e séries',
            image: NetFlix,
            live: "https://netfliix-app.netlify.app/",
        }
    ]
    
  return (
    <section id='project' className='relative bg-gray-700 py-10 px-4'>
        <div className='mb-16 max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>Projetos</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
                {projectJson.map((items) => {
                    return <Cards item={items}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default Projects