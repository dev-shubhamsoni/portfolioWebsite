import CrossIcon from '../../../assets/icons/cross-svgrepo-com.svg'

export const AboutDropDown = ({ isOpen, setIsOpen }) => {

  return (
    <>
      {isOpen && <div className=' h-[120vh] w-[93vw] aboutDropDown flex flex-col-reverse justify-between border-b-2 transition-all bg-[#FAFBFF]  absolute top-0 left-0 z-10 
      
      sm:max-md:h-[80vh] sm:max-md:w-screen 
      md:flex-row md:max-lg:h-[80vh] md:max-lg:w-[87vw] md:max-lg:left-[10vw]
      lg:max-xl:left-[10vw] lg:max-xl:w-[88vw] lg:max-xl:h-[60vh]
      xl:h-[20rem] xl:w-[93vw] xl:left-[5vw]
      '>
        <div className=' w-[100vw] pb-[50px]  justify-center flex items-center flex-col
        
        md:mt-[3rem] md:flex-col md:w-[30vw] md:items-start md:max-lg:ml-5
        lg:justify-start
        xl:mt-[1rem] xl:pl-[50px]
        '>

          <h2 className='mt-[1rem] text-[1.7rem] text-center leading-[1.1em] mb-5
          
          md:hidden
          '>Let me Catch <br></br>you up!</h2>

          <h2 className='mt-[1rem] text-[1.7rem] text-left leading-[1.1em] hidden
          
          md:block
          '>Let me<br></br> Catch you up!</h2>

          <div className=' flex gap-5 text-[14px] 
          md:mt-[5rem] md:gap-16
          '>
            <div className=' gap-1 flex flex-col items-start'>
              <p data-cursor="-hidden" className=' text-[#003FFF] underline font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>Email</p>
              <p data-cursor="-hidden" className=' text-[#003FFF] underline font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>Resume</p>
              <p data-cursor="-hidden" className=' text-[#003FFF] underline font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>LinkedIn</p>
            </div>
            <div className='gap-1 flex flex-col items-start'>
              <p data-cursor="-hidden" className=' text-[#003FFF] underline font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>Git hub</p>
              <p data-cursor="-hidden" className=' text-[#003FFF] underline font-semibold hover:scale-[110%] cursor-pointer transition duration-500 ease-in-out'>Instagram</p>

            </div>
          </div>

        </div>


        <div className='  w-[100vw] flex flex-col pl-[50px] pb-[50px] mt-[4rem]
        
        md:w-[60vw] md:pr-[4rem]
        xl:mt-[2rem] 
        2xl:w-[50vw]
        '>

          <div className="gap-5 flex flex-col items-start mr-[3rem] h-5
          
          md:mr-5 sm:h-0
          xl:hidden
          ">
            <p className=" leading-[1.4em] text-left">Currently working as a Freelancer, I’ve been immersed in
              and development – In my current freelance endeavors, I immerse
              myself in uncovering innate user needs, shaping them
              transformative business solutions, and bringing them to life
              intuitive and delightful full-stack web development experiences
            </p>

            <p className=" leading-[1.4em] text-left">
              I thrive on the challenge of turning ideas into impactful digital realities.
              Whether it's a sleek and responsive user interface or a robust and
              scalable back-end system, I ensure that the solutions I provide not only
              meet technical requirements but also contribute to the overall success of
              the project.
            </p>
          </div>

          <div className="gap-5 flex-col items-start hidden
          
          xl:block 
          ">
            <p className=" leading-[1.4em] text-left">Currently working as a Freelancer, I’ve been immersed in designing<br></br>
              and development – In my current freelance endeavors, I immerse <br></br>
              myself in uncovering innate user needs, shaping them into<br></br>
              transformative business solutions, and bringing them to life through<br></br>
              intuitive and delightful full-stack web development experiences.<br></br>
            </p>

            <p className=" leading-[1.4em] text-left mt-3">
              I thrive on the challenge of turning ideas into impactful digital realities. <br></br>
              Whether it's a sleek and responsive user interface or a robust and<br></br>
              scalable back-end system, I ensure that the solutions I provide not only <br></br>
              meet technical requirements but also contribute to the overall success of <br></br>
              the project.
            </p>
          </div>



        </div>
        <img onClick={() => setIsOpen(false)} src={CrossIcon} className="  cursor-pointer absolute right-5 top-5 hover:animate-bounce" height='30px' width='30px'></img>

      </div>}
    </>
  )

}