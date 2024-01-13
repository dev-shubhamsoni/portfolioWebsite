import CrossIcon from '../../../assets/icons/cross-svgrepo-com.svg'
import PokiDexImage from '../../../assets/images/pokidex.png'

import { Button } from '@/components/ui/button'
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons"

import './project.styles.scss'


export const ProjectDropDown = ({ projectIsOpen, setProjectIsOpen }) => {

    return (
        <>
            {projectIsOpen && <div className=' max-w-[100%] aboutDropDown flex flex-col justify-between  border-b-2 transition-all bg-[#FAFBFF] h-[100vh] absolute top-0 left-0 w-[90.2rem] z-10 
            
            lg:h-[38rem] xl:left-[5%] lg:px-[2rem] lg:max-xl:w-[100%] xl:w-[95vw]
            
            '>

                <div className='  pl-[2rem] pt-[30px]  '>
                    <h2 className=' underline text-[1.7rem] text-left'>Projects!</h2>
                </div>


                <div className=' scrollbarToHide h-[30rem] ml-[2rem] mr-[2rem] mt-[2rem] overflow-y-auto'>

                    <div className=' section-1 flex justify-between pb-5 flex-col
                    
                    xl:flex-row xl:max-2xl:gap-[10rem]
                    '>

                        <div className=' section-1-left w-[100%]
                        
                        xl:w-[45%] 
                        '>
                            <div className=' flex flex-col items-center'>

                                <img src={PokiDexImage} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-10 xl:mt-5
                                '>

                                    <Button variant="outline" 
                                    className = "w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                        <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Project!
                                    </Button>

                                    <h2 className=' text-xl underline xl:w-[10vw]'>Poki-Dex</h2>

                                    <Button variant="outline" 
                                    className = "w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
                                        <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
                                    </Button>
                                </div>
                                <div className='flex  flex-col mt-5 '>

                                    <p className=' text-left pb-3'>________________________</p>

                                    <div>
                                        <h3 className=' text-left underline text-[20px] font-bold'>About</h3>
                                        <p className=' text-left pt-2'>PokeSearch is an interactive web application that allows users to search for and explore details about various Pokémon. With a user-friendly interface, it provides a seamless experience for Pokémon enthusiasts to discover information about their favorite creatures.</p>
                                        <p className=' text-left pt-2 font-bold'>Responsive Design, Web API, Infinite Scrolling, CDN for Images</p>
                                    </div>

                                    <p className=' text-right pt-2'>________________________</p>


                                </div>
                            </div>

                        </div>


                        <div className=' section-1-left w-[100%] mt-[4rem]
                        
                        xl:w-[45%] xl:mt-[0rem]
                        '>
                            <div className=' flex flex-col items-center'>

                                <img src={PokiDexImage} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-10 xl:mt-5
                                '>

                                    <Button variant="outline" 
                                    className = "w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                        <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Project!
                                    </Button>

                                    <h2 className=' text-xl underline xl:w-[10vw]'>Poki-Dex</h2>

                                    <Button variant="outline" 
                                    className = "w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
                                        <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
                                    </Button>
                                </div>
                                <div className='flex  flex-col mt-5 '>

                                    <p className=' text-left pb-3'>________________________</p>

                                    <div>
                                        <h3 className=' text-left underline text-[20px] font-bold'>About</h3>
                                        <p className=' text-left pt-2'>PokeSearch is an interactive web application that allows users to search for and explore details about various Pokémon. With a user-friendly interface, it provides a seamless experience for Pokémon enthusiasts to discover information about their favorite creatures.</p>
                                        <p className=' text-left pt-2 font-bold'>Responsive Design, Web API, Infinite Scrolling, CDN for Images</p>
                                    </div>

                                    <p className=' text-right pt-2'>________________________</p>


                                </div>
                            </div>

                        </div>
                        

                    </div>

                </div>



                <div className=' border-t-2 flex gap-4 h-[4rem]  justify-center items-center flex-wrap
                
                lg:gap-16
                '>

                    <p data-cursor="-hidden" className=' text-[#003FFF] underline text-[14px] font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>Email</p>
                    <p data-cursor="-hidden" className=' text-[#003FFF] underline text-[14px] font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>Resume</p>
                    <p data-cursor="-hidden" className=' text-[#003FFF] underline text-[14px] font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>LinkedIn</p>
                    <p data-cursor="-hidden" className=' text-[#003FFF] underline text-[14px] font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>Git hub</p>
                    <p data-cursor="-hidden" className=' text-[#003FFF] underline text-[14px] font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>Instagram</p>


                </div>

                <img onClick={() => setProjectIsOpen(false)} src={CrossIcon} className="  cursor-pointer absolute right-5 top-5 hover:animate-bounce" height='30px' width='30px'></img>

            </div>}
        </>
    )

}