import React from 'react'
import Image from 'next/image';
import college from "../../../public/college.png"
import vision from "../../../public/vision.png"


import Header from '../Header/Header';
import Services from './Services';

const Page = () => {
  return (
    <>
      <Header />
      <div>
        {/* Full-width image */}
        <div className="relative">
          <div>
            <Image src={college} alt="Course 1" className="w-full h-auto" /></div>
          {/* Text overlay */}
          <div className=" inset-0 flex items-center justify-center ">
            <h1 className=" text-2xl md:text-4xl font-bold text-center tpip">
              We’ve placed 10 k students, get you placement!
            </h1>
          </div>
        </div>




      </div>
      <Services />
      <div className="py-8 px-24">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* First Column (Image) */}
          <div className="md:w-1/2">
            <Image src={vision} alt="Course 1" className="w-full h-auto" />
          </div>
          {/* Second Column (Text) */}
          <div className=" md:ml-4 vision">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">Vision</h2>
              <p className="text-gray-700">
                To create an educated and socially sensitive citizenry that is mindful of their rich cultural heritage and also equipped to adopt and adapt to a dynamic learning-ecosystem.
              </p>
              <p className="text-gray-700 mt-4">
                To impart a multidisciplinary and transformative learning experience rooted in indigenous knowledge systems with global relevance, for preparing global change leaders.
              </p>
              <p className="text-gray-700 mt-4">
                To develop into an inclusive and value-driven institution that focuses on reaching out to the larger community at the regional, national, and international levels.
              </p>
              <p className="text-gray-700 mt-4">
                To empower students and faculty to build and nurture a culture of excellence and innovations in teaching-learning, research, and human capital-building for holistic education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default Page