import perfil from './assets/perfil.png';
import bg from './assets/bg.jpg'
import reactImg from './assets/react.svg'

import { MdOutlineMailOutline, MdOutlineMarkEmailRead } from 'react-icons/md'
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill } from 'react-icons/ri'

import './App.css'
import { useRef, useState } from 'react';
import LinkButton from './components/LinkButton';

function App() {

  const [emailCopied, setEmailCopied] = useState(false)

  const text = useRef(null)

  const handleClickEmail = async () =>{
    await navigator.clipboard.writeText(text.current.textContent)
    setEmailCopied(true)
    setTimeout(() => {
      setEmailCopied(false)
    }, 2000);
  }

  return (
    <main className='w-screen h-screen bg-blue-100 text-slate-950 font-montserrat'>
      <div className='h-full  relative sm:w-1/2 xl:w-1/3 flex flex-col items-center z-0 sm:m-auto md:gap-5 overflow-hidden'>
        <div className='h-1/4 w-full relative'>
          <img src={bg} alt="" className='h-full w-full'/>
          <div className='w-40 absolute -bottom-6 left-1/2 -translate-x-1/2 sm:w-1/3'>
            <img src={perfil} alt="" className='rounded-full'/>
          </div>
        </div>
        <div className='w-3/4 p-4 flex flex-col rounded-b-2xl gap-2'>
          <img src={reactImg} alt="" className='w-10 self-end'/>
          <h1 className='text-2xl font-bold mt-2'>Wellington Vieira</h1>
          <span className=''>Desenvolvedor React</span>
          <span className='text-sm'>Freelancer</span>
        </div>
        <div className='px-6 text-sm text-justify font-semibold'>
          <p>Olá, sou Ton, desenvolvedor front-end, disponível para vagas de emprego.</p>
        </div>
        <div className='w-full flex gap-2 items-center justify-start p-4 px-5 cursor-pointer text-lg' onClick={handleClickEmail}>
          {!emailCopied ?
            <div className='w-full flex items-center gap-2 border-b-2 border-blue-800'>
              <MdOutlineMailOutline className='text-xl'/><span ref={text} className='p-2'>wtvsantos@gmail.com</span>
            </div> :
            <div className='w-full flex items-center gap-2 border-b-2 border-amber-500 font-bold'>
              <MdOutlineMarkEmailRead className='text-xl'/>
              <span className='p-2'>Email Copiado.</span>
            </div>
          }
        </div>
        <div className='w-1/2 md:w-40 flex flex-col gap-2 text-2xl font-bold invert'>
          <LinkButton link='https://portfolio-ten-sepia-20.vercel.app' color='lime-500'>
            <span className='text-xs'>&#60; <span className='text-lg'>T</span> /&#62;</span>
            <span className='text-base'>Portfólio</span>
          </LinkButton>
          <LinkButton link='https://github.com/wellingtonVieiraSantos' color='slate-600'>
            <RiGithubFill/>
            <span className='text-base'>GitHub</span>
          </LinkButton>
          <LinkButton link='https://www.linkedin.com/in/wellingtonsantos2022/' color='red-500'>
            <RiLinkedinBoxFill/>
            <span className='text-base'>Linkedin</span>
          </LinkButton>
          <LinkButton link='https://www.instagram.com/tonsantos_26' color='green-400'>
            <RiInstagramFill/>
            <span className='text-base'>Instagram</span>
          </LinkButton>
        </div>
        <div className='w-full h-1/2 absolute bg-gradient-to-t from-blue-700 via-[#00D8FF] to-blue-100 bottom-0 -z-10'></div>
      </div>
    </main>
  )
}

export default App
