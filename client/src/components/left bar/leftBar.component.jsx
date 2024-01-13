import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

import './leftbar.styles.scss'
import { useState, useEffect } from "react"
export const LeftBar = ({ handleButtonClick, projectHandleButtonClick, contactHandleButtonClick }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleMediaQuery = (event) => {
          if (event.matches) {
            // Media query matches, invoke your function here
            setMenuOpen(true)
          }
        };
    
        const mediaQuery = window.matchMedia('(min-width: 768px)'); // Adjust the media query as needed
    
        // Initial check
        handleMediaQuery(mediaQuery);
    
        // Add event listener for changes
        mediaQuery.addEventListener('change', handleMediaQuery);
    
        // Cleanup the event listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQuery);
        };
      }, []);

    return (


        <>
            <Button onClick = {() => setMenuOpen(!menuOpen)} className=' hover:bg-[#7077A1] hover:border-2  z-10 fixed right-[1rem] top-[2rem] bg-[#424769] h-12 w-12 
            
            md:hidden' 
            variant="outline" size="icon">
            {menuOpen ? <Cross1Icon className=" h-6 w-6 text-white " /> : <HamburgerMenuIcon className="h-6 w-6 text-white " />}
            </Button>

            {menuOpen && <div className='mobileLeftPanel z-10 bg-white border-r-[2px] border-[#000] h-[100vh] fixed left-0 w-[18vw] leading-[1.2rem]
            text-[1.1rem]

            sm:max-md:w-[15vw] sm:max-md:text-[1rem]
            md:max-lg:w-[10vw] textSizeLeftBarMdLg
            lg:max-xl:w-[8vw] buttonTextProjectComponentLgXl lg:text-[1rem]
            xl:text-[1rem] xl:w-[5vw] 
        '>

                <div data-cursor="-inverse" className=' border-b-2 border-[#000] bg-[#4CAF50] h-[20vh] flex justify-center items-center'>

                    <p onClick={() => projectHandleButtonClick()}
                        className=' text-white -rotate-90 hover:scale-[115%] cursor-pointer transition duration-500 ease-in-out'
                    >Projects</p>

                </div>

                <div className='  border-b-[2px] border-[#000] h-[20vh] flex justify-center items-center'>

                    <p onClick={() => handleButtonClick()} className=' -rotate-90 hover:scale-[115%] cursor-pointer transition duration-500 ease-in-out
                

                xl:text-[1rem]
                '
                    >About</p>

                </div>

                <div data-cursor-text="Soon!" className='  border-b-[2px] border-[#000] h-[20vh] flex justify-center items-center'>

                    <p className=' -rotate-90 hover:scale-[115%] cursor-pointer transition duration-500 ease-in-out'
                    >Blog </p>

                </div>

                <div data-cursor-text='Now!' className='border-b-[2px] border-[#000] h-[20vh] flex justify-center items-center'>

                    <p onClick={() => contactHandleButtonClick()} className=' -rotate-90 hover:scale-[115%] cursor-pointer transition duration-500 ease-in-out'
                    >Hire me!</p>

                </div>

                <div className='  bg-[#000927] h-[20vh] flex justify-center items-center'>

                    <p onClick={() => contactHandleButtonClick()} className=' text-[#fff] -rotate-90 hover:scale-[115%] cursor-pointer transition duration-500 ease-in-out'
                    >Full-Stack Developer</p>

                </div>




            </div>}



        </>


    )
}