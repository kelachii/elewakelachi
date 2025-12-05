import React from 'react'
import profile from '../images/profileImg.png'
import '../styles/home.css'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='hero-banner'>
      <Header/>
        <section >
            <div className='dev-profile'>
                <img src={profile}/>
            </div>
            <div>
                <h1>Hi, I'm Elewa Kelachi</h1>
                <p>Frontend Developer</p>
            </div> 
        </section>
    </div>
  )
}

export default Home