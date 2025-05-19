import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"


const Projects = () => {

    const [currIndex, setCurrIndex] = useState(0);
    const [cardsToShow, setcardsToShow] = useState(1);

    const nextProjext = () => {
        setCurrIndex((prevIdx)=> (prevIdx + 1) % projectsData.length)
    }

    useEffect(()=>{
        const updateCardsToShow = () => {
            if(window.innerWidth >= 1024){
                setcardsToShow(projectsData.length);
            } else {
                setcardsToShow(1);
            }
        }
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.addEventListener('resize', updateCardsToShow);
    }, [])

    const prevProjext = () => {
        setCurrIndex((prevIdx)=> prevIdx === 0 ? projectsData.length - 1 : prevIdx - 1)
    }


  return (
    <motion.div
        initial={{opacity: 0, x: -200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
    
        className='contatiner mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='font-light underline underline-offset-4 decoration-1 under' >Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProjext}>
                <img className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project' src={assets.left_arrow} alt="" />
            </button>
            <button onClick={nextProjext}>
                <img className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project' src={assets.right_arrow} alt="" />
            </button>
        </div>
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currIndex * 100) / cardsToShow}%)`}}>
                {
                    projectsData.map((project, index)=>(
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img className='w-full h-auto mb-14' src={project.image} alt="" />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inlne-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-demibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>{project.price} <span className='px-1'>|</span> {project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </motion.div>
  )
}

export default Projects
