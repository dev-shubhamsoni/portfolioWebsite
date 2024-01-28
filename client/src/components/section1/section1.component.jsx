import NodeIcon from '../../assets/icons/icons8-nodejs.svg'
import ReactIcon from '../../assets/icons/icons8-react.svg'
import PostgresIcon from '../../assets/icons/icons8-postgresql.svg'
import HtmlIcon from '../../assets/icons/icons8-html-5.svg'
import Css3Icon from '../../assets/icons/css3-svgrepo-com.svg'
import Javascript from '../../assets/icons/javascript-svgrepo-com.svg'
import Express from '../../assets/icons/icons8-express-js.svg'
import Typescript from '../../assets/icons/typescript-svgrepo-com.svg'
import Git from '../../assets/icons/icons8-git.svg'
import Tailwind from '../../assets/icons/tailwind-svgrepo-com.svg'
import './section.styles.scss'

import { motionPathForReact, motionPathForNodeIcon, motionPathForPostgresIcon } from '../section1/motionpathData.js'

import { gsap } from "gsap";
import { useEffect } from 'react';

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Draggable } from "gsap/Draggable";

export const Section1 = ({ contactHandleButtonClick }) => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.registerPlugin(Draggable)

    const playAnimationforReactIcon = () => {
        gsap.to("#react-div", {
            motionPath: {
                path: motionPathForReact,
                // autoRotate: true,
            },
            duration: 70,
            repeat: -1,
            // rotation: "-180_short",

        }).reverse(0);

    }

    const playAnimationforNodeIcon = () => {

        gsap.to("#node-div", {
            motionPath: {
                path: motionPathForNodeIcon,
                // autoRotate: true,
            },
            duration: 50,
            repeat: -1,
            // rotation: "-180_short",

        }).reverse(0);

    }

    const playAnimationforPostgresIcon = () => {

        gsap.to("#postgres-div", {
            motionPath: {
                path: motionPathForPostgresIcon,
                // autoRotate: true,
            },
            duration: 60,
            repeat: -1,
            // rotation: "-180_short",

        }).reverse(0);

    }

    useEffect(() => {

        playAnimationforReactIcon();
        playAnimationforNodeIcon();
        playAnimationforPostgresIcon();

        Draggable.create("#javascript-div, #html-div, #css-div, #javascript-div, #express-div, #typescript-div, #tailwind-div");
        // Draggable.create("#postgres-div");


    }, []);


    return (
        <div className='section-1 flex justify-center h-[100%] max-w-[100vw]
        
        sm:h-[39.8rem]
        '>


            <div className=' w-[100%]'>

                {/* Text Area */}

                <div className=' flex flex-col justify-center items-center mt-[5rem]  relative
                
                    lg:ml-[3rem] lg:mt-[3rem] lg:items-start
                '>

                    <h2 className='mb-[-5px] text-[1.7rem] text-[#999EB9] 
                    
                    md:max-lg:leading-[1.2em] md:max-lg:px-[8rem] 
                    lg:max-xl:ml-[2rem]
                    '>On the way to master the art of Full Stack Development.</h2>

                    <h2 className=' text-[1.6rem] py-5
                    
                    sm:py-0
                    md:max-lg:pt-3 
                    lg:max-xl:ml-[2rem]
                    '>Nice to meet you, I’m
                        <span onClick={() => contactHandleButtonClick()} className=' cursor-pointer' data-cursor-text="Hire me!"> Shubham Soni</span> </h2>

                    {/* Git Icon */}

                    <div id='javascript-div' className=' absolute top-[100%] right-[20%] hidden
                    
                    md:block md:max-lg:right-[2%]
                    xl:top-[20%] xl:right-[25%]
                    
                    '>

                        <img src={Git} alt='react-icon' height='70px' width='70px' />
                    </div>

                </div>

                {/* Icons Area below 768px */}

                <div className=' flex flex-wrap gap-[1rem] justify-center align-middle py-5
                
                sm:max-md:px-[8rem]
                md:hidden
                '>

                    <img src={ReactIcon} alt='react-icon' height='100px' width='100px' />
                    <img src={PostgresIcon} alt='react-icon' height='70px' width='70px' />
                    <img src={NodeIcon} alt='react-icon' height='100px' width='100px' />
                    <img src={Express} alt='react-icon' height='55px' width='55px' />
                    <img src={HtmlIcon} alt='react-icon' height='70px' width='70px' />
                    <img src={Css3Icon} alt='react-icon' height='55px' width='55px' />
                    <img src={Javascript} alt='react-icon' height='55px' width='55px' />
                    <img src={Typescript} alt='react-icon' height='55px' width='55px' />
                    <img src={Git} alt='react-icon' height='70px' width='70px' />
                    <img src={Tailwind} alt='react-icon' height='55px' width='55px' />
                </div>


                {/* Icons Area 768px above */}

                <div className='  h-[22rem] relative hidden
                
                md:block
                '>

                    {/* React Icon */}
                    <div id='react-div' className='react-div absolute left-200 top-150
                    
                    md:max-lg:left-[-30%]
                    '>
                        <img src={ReactIcon} alt='react-icon' height='100px' width='100px' />

                    </div>
                    {/* Node Icon */}
                    <div id='node-div' className=' absolute right-20'>

                        <img src={NodeIcon} alt='react-icon' height='100px' width='100px' />
                    </div>

                    {/* Postgres Icon */}
                    <div id='postgres-div' className=' absolute left-[50%]'>

                        <img src={PostgresIcon} alt='react-icon' height='70px' width='70px' />
                    </div>

                    {/* Html Icon */}
                    <div id='html-div' className=' absolute bottom-[20%]
                    
                    md:max-lg:ml-[2rem]
                    lg:max-xl:ml-[3rem]
                    '>

                        <img src={HtmlIcon} alt='react-icon' height='70px' width='70px' />
                    </div>

                    {/* Css Icon */}
                    <div id='css-div' className=' absolute bottom-20 left-[25%]'>

                        <img src={Css3Icon} alt='react-icon' height='55px' width='55px' />
                    </div>

                    {/* javascript Icon */}
                    <div id='javascript-div' className=' absolute bottom-5 left-[50%]'>

                        <img src={Javascript} alt='react-icon' height='55px' width='55px' />
                    </div>

                    {/* Express Icon */}
                    <div id='express-div' className=' absolute right-[20%] top-[30%]
                    
                    md:max-lg:left-[10%] md:max-lg:top-[10%]
                    '>

                        <img src={Express} alt='react-icon' height='55px' width='55px' />
                    </div>

                    {/* Typescript Icon */}
                    <div id='typescript-div' className=' absolute bottom-[30%] right-[5%]'>

                        <img src={Typescript} alt='react-icon' height='55px' width='55px' />
                    </div>

                    {/* Tailwind Icon */}
                    <div id='tailwind-div' className=' absolute bottom-[10%] right-[20%]'>

                        <img src={Tailwind} alt='react-icon' height='55px' width='55px' />
                    </div>



                </div>

                {/* Small Intro Area */}

                <div className=' flex items-start ml-[2rem] mr-[2rem]  justify-between flex-col
                
                sm:flex-row sm:mt-[-3rem]
                md:max-lg:ml-[3rem] md:max-lg:pb-[5rem]

                '>

                    <div className='flex items-start flex-col pt-[4rem]
                    
                    lg:pt-0 lg:max-xl:ml-[3rem] lg:max-xl:mt-[5rem] 
                    '>

                        <p>_______________</p>
                        <p className=' text-[13px] mt-[1rem]
                        
                        lg:max-xl:text-[1rem]
                        '>A breif about me!</p>


                        <p className=' textSizeIntroSection1 mt-[1rem] text-left text-[#9b9fb7] pb-5
                        
                        
                        lg:hidden
                        '>"I'm a freelance front-end developer.
                            For the past 2 years, I have worked on various projects.
                            After I graduated from college in 2020, I focused on a few government jobs but was unable
                            to clear them. After 2 years of hard work, I gave up on my first dream and started working
                            towards another 'Software development'. However, the preparation time didn't go in vain; it taught
                            me <b>perseverance</b>, <b>time management</b>, and, most of all, <b>patience</b>."
                        </p>

                        <p className=' text-[13px] mt-[1rem] text-left text-[#9b9fb7] hidden
                        
                        lg:block lg:max-xl:text-[0.9rem]
                        '>"I'm a freelance front-end developer.
                            For the past 2 years, I have worked on various projects. <br></br>
                            After I graduated from college in 2020, I focused on a few government jobs but was unable <br></br>
                            to clear them. After 2 years of hard work, I gave up on my first dream and started working <br></br>
                            towards another 'Software development'. However, the preparation time didn't go in vain;<br></br> it taught 
                            me <b>perseverance</b>, <b>time management</b>, and, most of all, <b>patience</b>."
                        </p>
                    </div>

                    <div className='items-end flex-col hidden
                    
                    md:block md:max-lg:mt-[3rem]
                    lg:max-xl:mt-[5rem]
                    '>
                        <p>_______________</p>
                        <p className=' text-[13px] mt-[1rem] text-right'>You can Drag the<br></br> Static Icons!</p>



                    </div>



                </div>


            </div>



        </div>
    )
}