import { useRef, useState } from 'react'
import CrossIcon from '../../../assets/icons/cross-svgrepo-com.svg'

import api from '@/apis/api_portfolio'

import { ReloadIcon } from "@radix-ui/react-icons"
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReCAPTCHA from "react-google-recaptcha";




export const Contact = ({ contactIsOpen, setContactIsOpen }) => {

    // Goole captcha
    const [captchaValue, setCaptchaValue] = useState('');
    const captchaRef = useRef();
    const googleRecaptchaSite_key = "6LfX1kkpAAAAAHqQGtib8ydi5BdYOZS65lwfu-wf";
    const captchaVerification = (value) => {
        setCaptchaValue(value);
    };

    // Google captcha

    // Toastify start
    const notifyInfo = () => toast.info('Submitting your form!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifySuccess = () => toast.success("Your message is successfully submitted. I'll connect soon!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyError = () => toast.error('Error submitting form!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    // Toastify end


    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [selectExpertise, setSelectExpertise] = useState('');
    const [message, setMessage] = useState('');

    const [sendForm, setSendForm] = useState(false);

    // form onSubmit

    // On Success

    const onSuccess = () => {
        setTimeout(() => {
            setSendForm(false);
            setFullname('');
            setEmail('');
            setMessage('');
            setSelectExpertise('');

            notifySuccess();

        }, 2000);
    }

    const onError = () => {

        setTimeout(() => {
            setSendForm(false);
            setFullname('');
            setEmail('');
            setMessage('');
            setSelectExpertise('');
            notifyError();

        }, 10000);

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        captchaRef.current.reset();
        setSendForm(true);
        notifyInfo();
    
        try {
            const response = await api.post('/contactSubmission', {
                name: fullname,
                email: email,
                selectExpertise: selectExpertise,
                message: message,
                captchaValue: captchaValue,
            });
    
            if (response.data) {
                onSuccess();
                // Further actions with the data if needed
            }
        } catch (error) {
            console.error('Error during axios request:', error);
    
            // Check if the error has a response
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server responded with non-2xx status:', error.response.status, error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from the server:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
            }
    
            onError();
        }
    }
    

    return (
        <>
            {contactIsOpen && <div className='h-[100vh] w-[96vw] left-[0vw] px-[2rem] aboutDropDown flex flex-col justify-between  border-b-2 transition-all bg-[#FAFBFF]  absolute top-0   z-10 
            
            sm:max-md:w-[82vw] sm:max-md:left-[15vw] sm:h-[30rem]
            md:max-lg:w-[87vw] md:max-lg:left-[10vw]
            lg:max-xl:w-[88vw] lg:max-xl:left-[10vw]
            xl:left-[6vw] xl:max-2xl:w-[90vw]
            2xl:w-[93vw]
            '>
                <div className='   pt-[30px]  
                
                '>
                    <h2 className=' underline text-[1.7rem] text-left'>Hire me!</h2>

                </div>
                <div className=' py-[20px] overflow-y-auto scrollbarToHide'>


                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className=' flex gap-[1rem] align-top h-[28rem] mx-[1rem] flex-col
                        
                        sm:h-[15rem]
                        '>
                            
                            <div className='flex gap-[1rem] flex-col
                            
                            sm:flex-row
                            '>



                                <Select required value={selectExpertise} onValueChange={(e) => setSelectExpertise(e)} >
                                    <SelectTrigger className="w-[100%]">
                                        <SelectValue placeholder="Need expertise in?" />
                                    </SelectTrigger>
                                    <SelectContent >
                                        <SelectGroup>
                                            <SelectLabel>Need expertise in?</SelectLabel>
                                            <SelectItem className=' cursor-pointer' value="Full-Stack Development">Full-Stack Development</SelectItem>
                                            <SelectItem className=' cursor-pointer' value="Front-end development">Front-end development</SelectItem>
                                            <SelectItem className=' cursor-pointer' value="back-end development">Back-end development</SelectItem>
                                            <SelectItem className=' cursor-pointer' value="Wordpress">Wordpress</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Input required value={fullname} onChange={(e) => setFullname(e.target.value)} type='text' placeholder='Full Name' />
                                <Input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                            </div>
                            <div>

                                <Textarea maxLength={300} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Type your message here." />
                            </div>
                            <div className=' flex justify-start items-end flex-col gap-[2rem]
                            
                            sm:flex-row
                            '>
                                <div>

                                    <ReCAPTCHA
                                        sitekey={googleRecaptchaSite_key}
                                        onChange={captchaVerification}
                                        ref={captchaRef}
                                    />
                                </div>
                                <div>
                                    {sendForm ? <Button disabled>
                                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button> : <Button disabled={!selectExpertise}> Submit </Button>}



                                </div>
                            </div>

                        </div>


                    </form>

                    <ToastContainer />


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

                <img onClick={() => setContactIsOpen(false)} src={CrossIcon} className="  cursor-pointer absolute right-5 top-5 hover:animate-bounce" height='30px' width='30px'></img>

            </div>}
        </>
    )

}