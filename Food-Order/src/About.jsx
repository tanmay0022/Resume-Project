import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about-us flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4" > About Us</h1>
      <p className="text-lg mb-8 text-black">
        Welcome to Foodie! We are a team of food enthusiasts who are passionate about helping people discover new restaurants and cuisines. Our mission is to make it easy for people to find great food, no matter where they are in the world.
      </p>
      <p className="text-lg text-black">
        We believe that food has the power to bring people together, and that's why we are dedicated to providing a platform that makes it easy for people to share food experiences with others. Whether you're a foodie looking for new restaurants to try, or a chef looking to share your creations with the world, we invite you to join the Foodie community.
      </p>
    </div>
  )
}

export default About