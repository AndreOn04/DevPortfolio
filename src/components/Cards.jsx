/* eslint-disable react/prop-types */
import GitHub from '../assets/github (3).png';

const Cards = ({item}) => {
  return (
    <div className='border border-red-500 rounded-lg w-[350px] lg:w[400px] bg-red-50'>
        <img src={item.image} alt="" className='rounded-lg'/>
        <div className='p-4'>
            <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
            <p>{item.desc}</p>
            <div className='flex gap-3 mt-4'>
                <button className='bg-red-500 text-white px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Acessar</a></button>
                <button className='bg-black text-white px-3 py-2 rounded-md'>
                    <a href="https://github.com/AndreOn04" target='_blank' className='flex gap-1'>
                        <img src={GitHub} alt="" className='w-6'/>
                        GitHub
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards