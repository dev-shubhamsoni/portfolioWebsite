import { Button } from "../ui/button"
import './bottomBar.styles.css'

export const BottomBar = () => {
    return (
        <div className='     hidden
        
        md:flex md:bg-white md:border-t-[2px] md:border-[#000] md:h-[5rem] md:fixed md:bottom-0 md:max-lg:w-screen md:max-lg:left-[10%]
        
        lg:max-xl:w-[91vw] lg:max-xl:left-[8vw]
        xl:w-[screen] xl:left-[5%]
        lg:w-[100%]
        '>

            <div data-cursor-text='Soon!' className=" bg-black w-[12rem] h-[5rem] flex justify-center align-middle items-center">
                <p className=' text-[#fff]  hover:scale-[110%]  transition duration-500 ease-in-out'
                >Projects i'm <br></br> working on!</p>
            </div>
            <div className="w-[100%] flex justify-between mr-[6rem]">
                <div data-cursor-text="PERN Stack" className="w-[16rem] h-[5rem] flex justify-center items-center">
                    <Button className=" border-[#000] border-2" variant="outline">Chat App using Sockets!</Button>

                </div>

                <div data-cursor-text="Resume" className=" w-[18rem] h-[5rem] flex justify-center items-center ">
                    {/* <a href="https://drive.google.com/drive/u/4/folders/1tD4GPmeLbnNIpZjJkPQiVRCiQhlBIlke" rel="noreferrer" target="_blank">
                        <Button className=" text-white bg-[#2a9d8f] border-[#000] border-2" variant="outline">Download Resume</Button>
                    </a> */}
                   
                    <a href="https://drive.google.com/drive/u/4/folders/1tD4GPmeLbnNIpZjJkPQiVRCiQhlBIlke" rel="noreferrer" target="_blank">
                    <button className="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 w-[14vw] border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                        Resume
                    </button>
                    </a>
                    

                </div>
            </div>



        </div>
    )
}