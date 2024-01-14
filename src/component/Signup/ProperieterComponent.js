import { NavLink, useNavigate } from 'react-router-dom/dist';
import Proprietor from './svg/Frame.svg';
import ProprietorHover from './svg/property-white.svg';
import WanderedWhite from './svg/wander-white.svg';
import wanderer from  './svg/Frame (1).svg';
import './Signup.css';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';




const SignupView = () => {
    const backgroundColor = '#003C40';
    return(
        <>
        <div className='signup-background'>
            <div className='signup-header-title'>
            <p className='text-xl text-black'>
                "Choose Your Adventure: Host a Haven or Seek Nature's Bliss – Your Journey Begins with a Click!"
            </p>
            </div>
            <div className='row main gap-10'>
            <div className="col-6">
                <NavLink  to="/email" className='property-class'>
                <img src={Proprietor} alt='proprietor' className='mt-4 first-image'/>
                <img src={ProprietorHover} alt='proprietorHover' className='mt-4 second-image'/>
                <p>Proprietor</p>
                </NavLink>
            </div>
            <div className="col-6">
                <NavLink to="/wander-register" className='property-class'>
                <img src={wanderer} alt='Wanderer' className='mt-4 wandered-frist'/>
                <img src={WanderedWhite} alt='Wanderer' className='mt-4 wandered-second'/>
                <p>Wanderer</p>
                </NavLink>
            </div>
            </div>
            <div className='signup-footer'>
            <p>© [2023] . travelintents All Rights Reserved.</p>
            </div>
        </div>
        <Navbar backgroundColor={backgroundColor}/>
        </>
    )
} 


const EmailView = () => {
    const[email, setEmail] = useState({
        email: '',  
    });
   
    const navigate = useNavigate();
    const onChangeEventHandler = (e) => {
        setEmail({...email, [e.target.name]:[e.target.value]});
    }
    const handleOnClick = () => {
        navigate('/user-info');
    }
    
    return(
        <>
            <Navbar/>
            <div className="w-100 h-832 relative bg-customGrey text-center">
                <div className="p-2.5  top-128 absolute justify-center text-center items-center gap-2.5 inline-flex">
                    <div className="text-emerald-950 text-[22px] font-medium font-Inter">"List Your Wilderness Retreat"</div>
                </div>
                <div className="p-2.5 top-180 absolute justify-center items-center gap-2.5 inline-flex">
                    <div className="w-838 text-center text-emerald-950 text-22 font-normal font-Inter">
                    "Pitch Your Tent in Our Digital Wilderness – Create an Account and Showcase Your Campsite Haven."              
                    </div>
                </div>
                <div className="w-293 pl-15 pr-120 py-3 top-284 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
                <input
                    className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                    placeholder="Email"
                    name="email"
                    value={email.email}
                    onChange={onChangeEventHandler}
                    required
                />
                </div>
                
                <div onClick={handleOnClick} className="w-293 px-120 py-3 top-357 absolute cursor-pointer bg-customCyan rounded-15 justify-center items-center gap-2.5 inline-flex">
                    <button  className="text-white px-4 text-base font-normal font-Inter">Confirm Spot</button>
                </div>

                        <div className="p-2.5  top-415 mt-4 absolute justify-center items-center gap-2.5 inline-flex">
                            <div className="w-494 px-4 text-center text-emerald-950 text-xs font-normal font-Inter">
                            Explore the wilderness seamlessly – any questions about your campsite? Find answers at Partner 
                            Help or connect with our vibrant community on the Partner Portal!    
                            </div>
                        </div>
                <div onClick={handleOnClick} className="w-293 px-120 py-3 top-503 absolute cursor-pointer bg-white rounded-15 justify-center items-center gap-2.5 inline-flex">
                    <button  className="text-emerald-950 px-4 text-base font-normal font-Inter">Already a Property</button>
                </div>
                <div className="p-2.5  top-551 mt-4 absolute justify-center items-center gap-2.5 inline-flex">
                    <div className="w-494 px-4 text-center text-emerald-950 text-xs font-normal font-Inter">
                    Explore the wilderness seamlessly – any questions about your campsite? Find answers at Partner 
                    Help or connect with our vibrant community on the Partner Portal!    
                    </div>
                </div>
                <div className="top-762 absolute">
                    <span className="text-black text-base font-light font-Inter">© [2023] . </span>
                    <span className="text-black text-base font-bold font-Inter">travelintents</span>
                    <span className="text-black text-base font-light font-Inter"> All Rights Reserved.</span>
                </div>
                
            </div>
        </>
    )
}

const UserView = () => {
    const[formData, setFormData] = useState({
        firstName: '',  
        lastName: ''
    });

    const navigate = useNavigate();

    const onChangeEventHandler = (e) => {
        setFormData({...formData, [e.target.name]:[e.target.value]})
    }

    const handleOnClick = () => {
        navigate('/setting-password');
    }
    return(
        <>
            <Navbar/>
            <div className="w-100 h-832 relative bg-customGrey text-center">
                <div className="p-2.5  top-128 absolute justify-center text-center items-center gap-2.5 inline-flex">
                    <div className="text-emerald-950 text-[22px] font-medium font-Inter">"List Your Wilderness Retreat"</div>
                </div>
                <div className="p-2.5 top-180 absolute justify-center items-center gap-2.5 inline-flex">
                    <div className="w-838 text-center text-emerald-950 text-22 font-normal font-Inter">"Welcome, Proprietor! Share the magic of your unique accommodations with our adventurous community."</div>
                </div>
                <div className="w-293 pl-15 pr-120 py-3 top-284 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
                <input
                    className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={onChangeEventHandler}
                    required
                />
                </div>
                <div className="w-293 pl-15 pr-120 py-3  top-342 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
                <input
                    className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={onChangeEventHandler}
                    required
                    />
                </div>
                <div className="w-293 pl-15 pr-120 py-3 top-400 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
                <input
                    className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                    name="contact"
                    placeholder="Your Wilderness Contact"
                    value={formData.contact}
                    onChange={onChangeEventHandler}
                    required
                    />
                </div>
                
                <div onClick={handleOnClick} className="w-293 px-120 py-3 top-473 absolute cursor-pointer bg-customCyan rounded-15 justify-center items-center gap-2.5 inline-flex">
                    <button  className="text-white px-4 text-base font-normal font-Inter">Next</button>
                </div>
                <div className="p-2.5  top-521 mt-4 absolute justify-center items-center gap-2.5 inline-flex">
                    <div className="w-494 px-4 text-center text-emerald-950 text-xs font-normal font-Inter">By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</div>
                </div>
                <div className="top-762 absolute">
                    <span className="text-black text-base font-light font-Inter">© [2023] . </span>
                    <span className="text-black text-base font-bold font-Inter">travelintents</span>
                    <span className="text-black text-base font-light font-Inter"> All Rights Reserved.</span>
                </div>
            </div>
        </>
    )
}

const SettingPassword = () => {

    const [userPassword, setUserPassowrd] = useState({
        password: '',
        confirmPassword: ''
    });

    const data = localStorage.getItem('formData');
    const onChangeEventHandler = (e) => {
        setUserPassowrd({...userPassword, [e.target.name]: [e.target.value]})
    }

    const handleOnSubmit = () => {
        console.log(data, userPassword, 'here is all daay');
        // console.log(searchParams, 'sdklfjkl');
    }

    return (
        <>
        <Navbar/>
        <div className="w-100 h-832 relative bg-customGrey text-center">
            <div className="p-2.5  top-128 absolute justify-center text-center items-center gap-2.5 inline-flex">
                <div className="text-emerald-950 text-[22px] font-medium font-['Inter']">
                Create Your Secure Haven: Set Up Your Password</div>
            </div>
            <div className="p-2.5 top-180 absolute justify-center items-center gap-2.5 inline-flex">
                <div className="w-838 text-center text-emerald-950 text-22 font-normal font-Inter">
                "Seal the Serenity: Propetier Campsite - Your Secure Password, Your Key to Unforgettable Nature Retreats!"    
                </div>
            </div>
            <div className="w-293 pl-15 pr-120 py-3 top-284 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
            <input
                  className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                placeholder="Create Password"
                type="password"
                name="password"
                value={userPassword.password}
                onChange={onChangeEventHandler}
                required
            />
            </div>
            <div className="w-293 pl-15 pr-120 py-3  top-342 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
            <input
                className="text-customCyan px-4 text-base font-light font-Inter w-full focus:outline-none"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                value={userPassword.confirmPassword}
                onChange={onChangeEventHandler}
                required
                />
            </div>
            <div onClick={handleOnSubmit}  className="w-293 cursor-pointer px-120 py-3 top-420 absolute bg-customCyan rounded-15 justify-center items-center gap-2.5 inline-flex">
                <div className="text-white px-4 text-base font-normal font-Inter">Next</div>
            </div>
            <div className="p-2.5  top-521 mt-4 absolute justify-center items-center gap-2.5 inline-flex">
                <div className="w-494 px-4 text-center text-emerald-950 text-xs font-normal font-Inter">By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</div>
            </div>
            <div className="top-762 absolute">
                <span className="text-black text-base font-light font-Inter">© [2023] . </span>
                <span className="text-black text-base font-bold font-Inter">travelintents</span>
                <span className="text-black text-base font-light font-Inter"> All Rights Reserved.</span>
            </div>
        </div>
        </>
    )
}

export {SignupView, UserView, EmailView, SettingPassword};