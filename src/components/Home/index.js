import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import logoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimateLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
  const[letters,setLetters] = useState('text-animate')
  const nameArry = ['l','o','b','o','d','a','n'];
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

  useEffect(()=>{
    setTimeout(()=>{
    return  setLetters('text-animate-hover')
    },2000)   
  },[])

  return (
    <>
      <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letters}>H</span>
              <span className={`${letters}_12`}>i</span> <br /> 
              <span className={`${letters}_13`}>I</span>
              <span className={`${letters}_14`}>'m</span>
              <img src={logoTitle} alt="soloban" />
              <AnimatedLetters letterClass={letters} strArray={nameArry} idx={16}/> <br />
              <AnimatedLetters letterClass={letters} strArray={jobArray} idx={22}/>
            </h1>
            <h2>Frontend Developer / JavaScript Expert / React Developer</h2>
            <Link to="/contact" className="flat-btn">
              CONTACT ME
            </Link>
          </div>
          <Logo/>
        </div>
        <Loader type="pacman"/>
    </>
  );
};

export default Home;
