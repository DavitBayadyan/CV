import React from 'react'
import './About.scss';
const Aboutt = () => {
  return (
    <>
      <div className="mainabut">

        <h1 className='name db'>Davit Bayadyan</h1>
        <h2 className='name'>Front-End Developer</h2>
<div className="flex">
        <div className="left">
          <div className="leng">
            <h2 className='blu'>LANGUAGES</h2>
            <div className="lengdiv">
          <div>
            <h3 className='yelw lengitem'>ARMENIAN</h3> 
            <img className='imgtokos' src="https://static.vecteezy.com/system/resources/previews/010/851/419/original/circle-80-percent-png.png" alt="" />
            </div>
            <div><h3 className='yelw lengitem'>RUSSIAN</h3>   
            <img className='imgtokos' src="https://static.vecteezy.com/system/resources/previews/010/851/415/original/circle-70-percent-png.png" alt="" />
            </div> 
            <div>
            <h3 className='yelw lengitem'>ENGLISH</h3>
             <img className='imgtokos' src="https://static.vecteezy.com/system/resources/previews/010/851/422/original/circle-60-percent-png.png" alt="" />
             </div>
             </div>
          </div>
          <div className="hobis">
            <h2 className='blu'>HOBBIES</h2>
            <h3 className='yelw'>Learning English</h3>
            <h3 className='yelw'>Hunting</h3>
            <h3 className='yelw'>Swimming</h3>
          </div>

        </div>
        <div className="learning">
            <h2 className='ed '>EDUCATION</h2>
            <h3 className='yelw'>I am a student at High School Number 11, and I want to enroll in a university in Yerevan.</h3>
            <h2 className='ed '>PROGRAMMING LANGUAGES</h2>
            <div className='df'>
              <div>
            <h3  className='yelw'>HTML</h3>
            <h3  className='yelw'>CSS</h3>
            </div>
            <div>
            <h3 className='yelw'>SCSS</h3>
            <h3  className='yelw'>BOOTSTRAP</h3>
            </div>
            <div>
            <h3  className='yelw'>JavaScript</h3>
            <h3  className='yelw'>REACT</h3>
            </div>
            </div>
            <h2 className='ed '>WORK EXPERIENCE</h2>
         <h3 className='yelw'>If you want to review my works, write to my Gmail.</h3>
         
          </div>
      </div>
      </div>
    </>
  )
}

export default Aboutt