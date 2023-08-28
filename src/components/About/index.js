import React,{useEffect,useState} from 'react'
import AnimatedLetters from '../AnimateLetters'
import Loader from 'react-loaders'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    const[letters,setLetters] = useState('text-animate')
    useEffect(()=>{
        setTimeout(()=>{
        return  setLetters('text-animate-hover')
        },2000)
      },[])
  return (
    <>
        <div className='container about-page'>
      <div className="text-zone">
        <h1><AnimatedLetters letterClass={letters} strArray={['A','b','o','u','t', ' ', 'M','e']} idx={15}/></h1>
        <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
      </div>
      <div className="stage-cube-container">
        <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
        </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>

  )
}

export default About
