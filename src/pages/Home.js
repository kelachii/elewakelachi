import React from 'react'
import profile from '../assets/images/profileImg.png'
import images from '../assets/images/index.js'
import '../styles/home.css'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='hero'>
      <Header />

      <section className='hero-banner'>

        <div className='circle-bg'>
          <div className='circle1'>
            <img src={images.image1} />
          </div>
          <div className='circle2'>
            <img src={images.image2} />
          </div>
          <div className='circle3'>
            <img src={images.image3} />
          </div>
        </div>

        <div className='dev-profile'>
          <img src={profile} />
        </div>



        <div className='hero-text'>
          <p className='hero-text-intro'>Hello, I'm <span> Elewa Kelachi </span></p>
          <p className='hero-text-title'>Frontend Web Developer</p>
          <p className='hero-text-note'>I build fast, responsive, and user-friendly web interfaces.
Turning ideas into clean code and seamless experiences.</p>
        </div>

      </section>
    </div>
  )
}

export default Home