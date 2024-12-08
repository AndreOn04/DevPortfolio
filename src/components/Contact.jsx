/* eslint-disable no-unused-vars */
import React from 'react'
import Linkedin from '../assets/linkedin.png';
import GitHub from '../assets/github (3).png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
        <div className='mb-16 max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
                    <h2 className='text-3xl font-bold mb-3 text-red-500'>Entre em Contato</h2>
                    <p className='mb-4 text-white/85'>Estou sempre aberto a novas oportunidades e colaboração. Sinta-se à vontade para entrar em contato!</p>
                    <div className='flex space-x-4'>
                        <a href="https://www.linkedin.com/in/marcioandre-dev" target='_blank' className='text-foreground/60 hover:text-foreground/80'>
                            <img src={Linkedin} alt="" className='h-6 w-6'/>
                        </a>
                        <a href="https://github.com/AndreOn04" target='_blank' className='text-foreground/60 hover:text-foreground/80'>
                            <img src={GitHub} alt="" className='h-6 w-6'/>
                        </a>
                    </div>
                    <Lottie animationData={contact} className='w[-350px] mx-auto lg:w-[500px]' />
                </div>
                <form className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'> 
                    <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contato</h1>
                    <div className='mb-4'>
                        <span className='block text-sm font-medium text-gray-700 mb-2'>E-mail</span>
                        <span>andreonlinemt@yahoo.com</span>
                    </div>
                    <div className='mb-4'>
                        <span className='block text-sm font-medium text-gray-700 mb-2'>WhatsApp</span>
                        <span>(65) 99622-9366</span>
                    </div>
                </form>
            </div>
        </div>    
    </section>
  )
}

export default Contact