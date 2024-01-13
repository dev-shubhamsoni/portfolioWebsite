import { Button } from "../ui/button"

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
            <div data-cursor-text="PERN Stack" className="w-[16rem] h-[5rem] flex justify-center items-center">
                <Button className = " border-[#000] border-2" variant="outline">Chat App using Sockets!</Button>
                
            </div>

            <div data-cursor-text="PERN Stack" className="w-[16rem] h-[5rem] flex justify-center items-center">
                <Button className = " border-[#000] border-2" variant="outline">Dashboard with Power Bi</Button>
                
            </div>



        </div>
    )
}