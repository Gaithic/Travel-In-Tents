import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import './Signup.css';
import { useNavigate } from "react-router-dom";

const Wander = () => {
    const[formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contact: ''
    });

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData))
    }, [formData])
    const navigate = useNavigate();

    const onChangeEventHandler = (e) => {
        setFormData({...formData, [e.target.name]:[e.target.value]})
    }

    const handleOnClick = () => {
        navigate('/setting-password');
    }
    return (
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
                  className="text-cyan-950 px-4 text-base font-light font-Inter w-full focus:outline-none"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={onChangeEventHandler}
                required
            />
            </div>
            <div className="w-293 pl-15 pr-120 py-3  top-342 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
            <input
                className="text-cyan-950 px-4 text-base font-light font-Inter w-full focus:outline-none"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={onChangeEventHandler}
                required
                />
            </div>
            <div className="w-293 pl-15 pr-120 py-3 top-400 absolute bg-white rounded-15 justify-start items-center gap-2.5 inline-flex">
            <input
                className="text-cyan-950 px-4 text-base font-light font-Inter w-full focus:outline-none"
                name="contact"
                placeholder="Your Wilderness Contact"
                value={formData.contact}
                onChange={onChangeEventHandler}
                required
                />
            </div>
            
            <div onClick={handleOnClick} className="w-293 px-120 py-3 top-473 absolute cursor-pointer bg-cyan-950 rounded-15 justify-center items-center gap-2.5 inline-flex">
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

export default Wander;