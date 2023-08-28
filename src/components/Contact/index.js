import React,{useEffect,useRef,useState} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimateLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    const formRef=useRef('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        emailjs
        .sendForm('gmail', 'template_rsmjsoq', formRef.current, 'uQoA37ea8pMpcM2Py')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }


    const[letters,setLetters] = useState('text-animate')
    useEffect(()=>{
        setTimeout(()=>{
        return  setLetters('text-animate-hover')
        },2000)
      },[])

  return (
    <>    
        <div className='container contact-page' >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letters} strArray={['C','o','n','t','a','c','t',' ','M','e']} idx={15}/>
                </h1>
                <p> I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>            
                <div className="contact-form">
                <form ref={formRef} onSubmit={handleSubmit} >
                    <ul>
                        <li  className="half">
                            <input type="text" name='name'  placeholder='Name' required />
                        </li>
                        <li  className="half">
                            <input type="email" name='email'  placeholder='Email' required />
                        </li>
                        <li  >
                            <input type="text" name='subject'  placeholder='Subject' required />
                        </li>
                        <li  >
                            <textarea type="text" name='message' id='message' placeholder='Message' required />
                        </li>
                        <li>
                           <input type="submit" className='flat-button' value='SEND' />
                        </li>
                    </ul>
                </form>
            </div>
            </div>

        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact
