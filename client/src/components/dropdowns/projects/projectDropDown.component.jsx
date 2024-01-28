import CrossIcon from '../../../assets/icons/cross-svgrepo-com.svg'
import PokiDexImage from '../../../assets/images/pokidex.png'
import DashboardImage from '../../../assets/images/dashboard jpeg.png'
import Frweb from '../../../assets/images/frweb.png'
import NasaDashboard from '../../../assets/images/Nasa Dashboard.png'
import PongSockets from '../../../assets/images/Pong with sockets.png'
import PaintImage from '../../../assets/images/paint.png'
import kanbanBoard from '../../../assets/images/kanban.png'

import { Button } from '@/components/ui/button'
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons"

import './project.styles.scss'


export const ProjectDropDown = ({ projectIsOpen, setProjectIsOpen }) => {

    return (
        <>
            {projectIsOpen && <div className=' max-w-[100%] aboutDropDown flex flex-col justify-between  border-b-2 transition-all bg-[#FAFBFF] h-[100vh] absolute top-0 left-0 w-[90.2rem] z-10 
            
            lg:h-[38rem] xl:left-[5%] lg:px-[2rem] lg:max-xl:w-[100%] xl:w-[93.5vw]
            
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

                                <img src={DashboardImage} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-8 xl:mt-5
                                '>
                                    <a href='https://dashboard.devshubhamsoni.in' rel='noreferrer' target="_blank">

                                        <Button variant="outline"
                                            className="w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                            <ExternalLinkIcon className="mr-2 h-4 w-4" />View Project!
                                        </Button>
                                    </a>

                                    <h2 className=' text-xl underline xl:w-[16vw]'>Dashboard - PERN stack</h2>

                                    {/* https://github.com/dev-shubhamsoni/PERN-Dashboard */}
                                    <a href='https://github.com/dev-shubhamsoni/PERN-Dashboard' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
                                            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
                                        </Button>
                                    </a>

                                </div>
                                <div className='flex  flex-col mt-5 '>

                                    <p className=' text-left pb-3'>________________________</p>

                                    <div>
                                        <h3 className=' text-left underline text-[20px] font-bold'>About</h3>
                                        <p className=' text-left pt-2'>Implemented interactive <u>line charts</u> and <u>pie charts</u>  to visualize key performance indicators and both client-side and server-side pagination mechanisms to enhance the user experience by efficiently managing and displaying large datasets on the dashboard. Efficient data retrieval and display through RESTful API integration with <u>RTK Query</u>, <u>state management with Redux</u>. Utilized <u>SQL JOIN</u> operations to integrate data from multiple tables, consolidating information for a unified and comprehensive view in the dashboard. <b><u>Postgres, Typescript, React, Node, Express.js</u></b></p>
                                        <p className=' text-left pt-2 font-bold'>Line & pie charts, server & client side pagination, REST API, Redux, SQL</p>
                                    </div>

                                    <p className=' text-right pt-2'>________________________</p>


                                </div>
                            </div>

                        </div>


                        <div className=' section-1-right w-[100%] mt-[4rem]
                        
                        xl:w-[45%] xl:mt-[0rem]
                        '>
                            <div className=' flex flex-col items-center'>

                                <img src={Frweb} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-10 xl:mt-5
                                '>

                                    <a href='https://frweb.devshubhamsoni.in/' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                            <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Project!
                                        </Button>
                                    </a>

                                    <h2 className=' text-xl underline xl:w-[15vw]'>Face Recognition app</h2>

                                    <a href='https://github.com/dev-shubhamsoni/face-recogonition-web-app--Full-Stack' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
                                            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
                                        </Button>
                                    </a>
                                </div>
                                <div className='flex  flex-col mt-5 '>

                                    <p className=' text-left pb-3'>________________________</p>

                                    <div>
                                        <h3 className=' text-left underline text-[20px] font-bold'>About</h3>
                                        <p className=' text-left pt-2'> Developed an innovative face recognition application which allows users to upload images for <u>real-time face detection with precision</u>. Implemented a secure <u>user authentication system</u>, enabling seamless <u>sign-up & login</u> functionalities, enhancing the project's user experience and privacy features.
                                        </p>
                                        <p className=' text-left pt-2 font-bold'>REST API, SQL, Postgres, Typescript, React, Node, Express.js</p>
                                    </div>

                                    <p className=' text-right pt-2'>________________________</p>


                                </div>
                            </div>

                        </div>


                    </div>

                    {/* second section */}

                    <div className=' section-1 flex justify-between pb-5 pt-10 flex-col
                    
                    xl:flex-row xl:max-2xl:gap-[10rem]
                    '>

                        <div className=' section-1-left w-[100%]
                        
                        xl:w-[45%] 
                        '>
                            <div className=' flex flex-col items-center'>

                                <img src={NasaDashboard} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-14 xl:mt-5
                                '>
                                    <a href='https://ba12-x84x.onrender.com/' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                            <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Project!
                                        </Button>
                                    </a>

                                    <h2 className=' text-xl underline xl:w-[12vw]'>NASA Dashboard</h2>

                                    <a href='https://github.com/dev-shubhamsoni/NASA-launch' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
                                            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
                                        </Button>
                                    </a>
                                </div>
                                <div className='flex  flex-col mt-5 '>

                                    <p className=' text-left pb-3'>________________________</p>

                                    <div>
                                        <h3 className=' text-left underline text-[20px] font-bold'>About</h3>
                                        <p className=' text-left pt-2'>NASA Mission Control Dashboard built using the <u>MERN stack</u>, seamlessly integrating <u>SpaceX API</u> for real-time rocket launch data along with a responsive user interface. We can schedule or delete <u>(CRUD)</u> the launch from the dashboard itself and data updates in Realtime.
                                        </p>
                                        <p className=' text-left pt-2 font-bold'>REST API, MONGO DB, Postgres, React, Node, Express.js, SpaceX API</p>
                                    </div>

                                    <p className=' text-right pt-2'>________________________</p>


                                </div>
                            </div>

                        </div>


                        <div className=' section-1-right w-[100%] mt-[4rem]
                        
                        xl:w-[45%] xl:mt-[0rem]
                        '>
                            <div className=' flex flex-col items-center'>

                                <img src={PokiDexImage} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-10 xl:mt-5
                                '>

                                    <a href='https://pokidex.devshubhamsoni.in/' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                            <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Project!
                                        </Button>
                                    </a>

                                    <h2 className=' text-xl underline xl:w-[10vw]'>Poki-Dex</h2>

                                    <a href='https://github.com/dev-shubhamsoni/Poki-dex-react-vite' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
                                            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
                                        </Button>
                                    </a>
                                </div>
                                <div className='flex  flex-col mt-5 '>

                                    <p className=' text-left pb-3'>________________________</p>

                                    <div>
                                        <h3 className=' text-left underline text-[20px] font-bold'>About</h3>
                                        <p className=' text-left pt-2'>PokeSearch is an interactive web application that allows users to <u>search</u> for and explore details about various Pokémon. With a user-friendly interface, it provides a seamless experience for Pokémon enthusiasts to discover information about their favorite creatures. Implemented <u>infinite scrolling</u> feature eliminating the need for traditional pagination and enhancing accessibility. Used <u>Context API</u> for state management
                                        </p>
                                        <p className=' text-left pt-2 font-bold'>Pokemon API, React, Context API</p>
                                    </div>

                                    <p className=' text-right pt-2'>________________________</p>


                                </div>
                            </div>

                        </div>


                    </div>

                    {/* third section */}

                    <div className=' section-1 flex justify-between pb-5 flex-col pt-10
                    
                    xl:flex-row xl:max-2xl:gap-[10rem]
                    '>

                        <div className=' section-1-left w-[100%]
                        
                        xl:w-[45%] 
                        '>
                            <div className=' flex flex-col items-center'>

                                <img src={PongSockets} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-10 xl:mt-5
                                '>

                                    <a href='https://www.youtube.com/watch?v=jr_7jeMBgYE' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                            <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Demo!
                                        </Button>
                                    </a>

                                    <h2 className=' text-xl underline xl:w-[12vw]'>Multiplayer Pong</h2>

                                    <a href='https://github.com/dev-shubhamsoni/pong-with-sockets' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
                                            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
                                        </Button>
                                    </a>
                                </div>
                                <div className='flex  flex-col mt-5 '>

                                    <p className=' text-left pb-3'>________________________</p>

                                    <div>
                                        <h3 className=' text-left underline text-[20px] font-bold'>About</h3>
                                        <p className=' text-left pt-2'>Developed a <u>real-time multiplayer Pong</u> game using <u>Sockets.io</u>, enabling seamless connection between hundreds of players concurrently. Implemented robust server-client communication to <u>synchronize game state across multiple instances</u>, ensuring a smooth and responsive gaming experience.</p>
                                        <p className=' text-left pt-2 font-bold'>React, Sockets, Javascript </p>
                                    </div>

                                    <p className=' text-right pt-2'>________________________</p>


                                </div>
                            </div>

                        </div>


                        <div className=' section-1-right w-[100%] mt-[4rem]
                        
                        xl:w-[45%] xl:mt-[0rem]
                        '>
                            <div className=' flex flex-col items-center'>

                                <img src={PaintImage} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-10 xl:mt-5
                                '>
                                    <a href='https://paint.devshubhamsoni.in/' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                            <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Project!
                                        </Button>
                                    </a>

                                    <h2 className=' text-xl underline xl:w-[12vw]'>Paint Clone</h2>
                                    <a href='https://github.com/dev-shubhamsoni/js-paint-canvas' rel='noreferrer' target="_blank">
                                        <Button variant="outline"
                                            className="w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
                                            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
                                        </Button>
                                    </a>
                                </div>
                                <div className='flex  flex-col mt-5 '>

                                    <p className=' text-left pb-3'>________________________</p>

                                    <div>
                                        <h3 className=' text-left underline text-[20px] font-bold'>About</h3>
                                        <p className=' text-left pt-2'>I developed a dynamic Paint Clone using HTML, CSS, and JavaScript with the <u>Canvas API</u>. This interactive web application allows users to unleash their creativity by drawing and sketching with various tools. The project features an intuitive user interface, <u>real-time drawing updates</u>, and the ability to download the masterpiece as an image. Additionally, users can store their drawings in <u>local storage</u> and access them conveniently from the toggle bar, enhancing the personalized experience and enabling easy access to saved artwork.</p>
                                        <p className=' text-left pt-2 font-bold'>Responsive Design, Web API, Infinite Scrolling, CDN for Images</p>
                                    </div>

                                    <p className=' text-right pt-2'>________________________</p>


                                </div>
                            </div>

                        </div>


                    </div>

                    {/* fourth section */}

                    {/* <div className=' section-1 flex justify-between pb-5 flex-col pt-10
                    
                    xl:flex-row xl:max-2xl:gap-[10rem]
                    '>

                        <div className=' section-1-left w-[100%]
                        
                        xl:w-[45%] 
                        '>
                            <div className=' flex flex-col items-center'>

                                <img src={kanbanBoard} alt='pokidex' className=' rounded-2xl w-[670px] object-contain' />

                                <div className=' flex flex-col mt-10 mx-2 gap-5 items-center
                                
                                xl:flex-row xl:justify-between xl:items-end xl:gap-10 xl:mt-5
                                '>

                                    <Button variant="outline"
                                        className="w-[14rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[10vw]">
                                        <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Project!
                                    </Button>

                                    <h2 className=' text-xl underline xl:w-[10vw]'>Poki-Dex</h2>

                                    <Button variant="outline"
                                        className="w-[12rem] buttonTextProjectComponentToLg buttonTextProjectComponentLgXl xl:w-[8vw]">
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


                        <div className=' section-1-right w-[100%] mt-[4rem]
                        
                        xl:w-[45%] xl:mt-[0rem]
                        '>


                        </div>


                    </div> */}

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