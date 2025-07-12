"use client"
import React, { useEffect, useState } from 'react'
import "./loader.css"
import Image from 'next/image'
// import Image from 'next/image'
import logo from "../../../public/images/logo.png"
const Loader = () => {
    const [loaded, setLoaded] = useState(false)
    const [hide, setHide] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 300);
        setTimeout(() => {
            setHide(true)
        }, 500);
    },[])
    const classNames = [
        "loading",
        loaded ? "loaded" : "",
        hide ? "hide" : "",
    ]
    return (
        <div className={classNames.join(" ")}>
            <div className="loader">
                <div>
                    <Image src={logo} alt='logo'></Image>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Loader