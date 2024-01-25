import Navbar from "../Navbar/Navbar"
import './Signup.css';
import Facebook from './svg/Facebook.svg';
import Google from './svg/Google.svg';
import OTP from './svg/Otp.svg';

const   WanderSignupView = () => {
    return (
       <>
         <div className="wander-signup">
            <div className="p-2.5 top-128 absolute gap-2.5 inline-flex justify-center items-center">
                <div className="text-emerald-950 text-22 font-normal font-Inter">"Embark on your outdoor adventure”</div>
            </div>
            <Navbar/>
            <div className="w-293 pl-15 pr-120 py-3 top-227 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
                <input
                    className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                    placeholder="Type your Wildname"
                    name="firstName"
                    value=''
                    onChange=''
                    required
                />
            </div>
            <div className="firstName-error">

            </div>
            <div className="w-293 pl-15 pr-120 py-3 top-285 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
                <input
                    className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                    placeholder="What's your Tail name"
                    name="lastName"
                    value=''
                    onChange=''
                    required
                />
            </div>
            <div className="lastName-error">

            </div>
            <div className="w-293 pl-15 pr-120 py-3 top-343 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
                <input
                    className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                    placeholder="Your email"
                    name="email"
                    value=''
                    onChange=''
                    required
                />
            </div>
            <div className="email-error">

            </div>
            <div className="w-293 px-120 py-3 top-431 absolute bg-customCyan rounded-15 justify-center items-center gap-2.5 inline-flex">
                <button className="text-white text-base font-normal font-Inter">Continue with email</button>
            </div>
            
            <div className="flex top-541 absolute gap-10">
                <div className="w-94 h-auto p-5 bg-white rounded-15 shadow flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-19.60 h-5 relative">
                        <img src={Facebook} alt="facebook"/>
                    </div>
                    <button className="text-neutral-700 text-base font-light font-Inter">Facebook</button>
                </div>
                <div className="w-94 h-auto p-5 bg-white rounded-15 shadow flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-19.60 h-5 relative">
                        <img src={Google} alt="Google"/>
                    </div>
                    <button className="text-neutral-700 text-base font-light font-Inter">Google</button>
                </div>
                <div className="w-94 h-auto p-5 bg-white rounded-15 shadow flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-19.60 h-5 relative">
                        <img src={OTP} alt="OTP"/>
                    </div>
                    <button className="text-neutral-700 text-base font-light font-Inter">OTP</button>
                </div>
            </div>
            
            <div className="top-653 absolute text-black text-base font-light font-Inter">more ways to sign in</div>
            
            <div className="w-10 h-10 left-35 top-17 absolute shadow">
                <div className="w-30 h-30 left-5 top-5 absolute bg-bgNatural rounded-full"></div>
            </div>
            <div className="px-45 py-60 left-887 top-481 absolute flex-col justify-start items-start inline-flex">
                <div className="w-217.43 h-177.87 relative">
                    <div className="w-210.43 h-127.19 left-7 top-0 absolute">
                    </div>
                    <div className="w-48.26 h-104.46 left-0 top-46 absolute">
                        <div className="w-18.59 h-19.49 left-22.56 top-22.52 absolute">
                        </div>
                        <div className="w-22.53 h-32.31 left-3.04 top-19.92 absolute">
                            <div className="w-22.21 h-32.28 left-0.03 top-0.04 absolute">
                            </div>
                        </div>
                        <div className="w-4.95 h-14.13 left-15.24 top-10.80 absolute">
                            <div className="w-4.95 h-14.07 left-0 top-0 absolute">
                            </div>
                        </div>
                        <div className="w-10.55 h-13.17 left-16.32 top-5.85 absolute">
                            <div className="w-10.28 h-13.18 left-0.24 top-0.02 absolute">
                            </div>
                        </div>
                        <div className="w-30.25 h-18.43 left-6.64 top-23.99 absolute">
                        </div>
                    </div>
                    <div className="w-61.02 h-129.79 left-139 top-40 absolute">
                        <div className="w-3 h-30.62 left-26.22 top-96.14 absolute">
                            <div className="w-2.5 h-28.69 left-2.01 top-0.10 absolute">
                            </div>
                        </div>
                        <div className="w-10.73 h-30.27 left-39.10 top-97.66 absolute">
                            <div className="w-2.64 h-29.09 left-8.09 top-0 absolute">
                            </div>
                        </div>
                        <div className="w-10.33 h-26.97 left-50.69 top-40.13 absolute">
                            <div className="w-6.32 h-26.97 left-4.04 top-0.2 absolute">
                            </div>
                        </div>
                        <div className="w-10.79 h-14.52 left-39.94 top-53.41 absolute">
                            <div className="w-7.60 h-12.38 left-3.20 top-0.12 absolute">
                            </div>
                        </div>
                        <div className="w-15.91 h-21.69 left-42.34 top-106.13 absolute">
                            <div className="w-2.5 h-10.78 left-1.31 top-0 absolute">
                            </div>
                        </div>
                        <div className="w-10.57 h-21.35 left-45.65 top-108.44 absolute">
                            <div className="w-5.32 h-21.06 left-5.24 top-0.03 absolute">
                            </div>
                        </div>
                        <div className="w-13.13 h-17.14 left-45.08 top-81.33 absolute">
                            <div className="w-12.84 h-16.73 left-0.29 top-0 absolute">
                            </div>
                        </div>
                        <div className="w-6.32 h-16.30 left-31.61 top-14.40 absolute">
                            <div className="w-5.16 h-11.80 left-1.16 top-0.01 absolute">
                            </div>
                        </div>
                        <div className="w-12.93 h-17.71 left-24.72 top-5.39 absolute">
                            <div className="w-6.69 h-17.69 left-6.25 top-0 absolute">
                            </div>
                        </div>
                        <div className="w-2.82 h-4.59 left-36.06 top-10.70 absolute">
                            <div className="w-2.82 h-4.59 left-0 top-0 absolute">
                            </div>
                        </div>
                    </div>
                    <div className="w-175.05 h-99.43 left-0 top-78.44 absolute">
                        <div className="w-84.21 h-68.70 left-3.61 top-6.93 absolute">
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-762 absolute">
                <span className="text-black text-base font-light font-['Inter']">© [2023] . </span>
                <span className="text-black text-base font-bold font-['Inter']">travelintents</span>
                <span className="text-black text-base font-light font-['Inter']"> All Rights Reserved.</span>
            </div>
            <div className="top-494 absolute"><span className="text-black text-base font-light font-Inter">"Returning Trailblazer? </span><span className="text-cyan-950 text-base font-medium font-Inter">LogIn</span><span className="text-black text-base font-light font-Inter"> to resume your adventure!"</span></div>
        </div>
       </>
    )
}




export {WanderSignupView}