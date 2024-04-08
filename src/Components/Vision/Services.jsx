import React from 'react'
import Image from 'next/image';

import Vector1 from '../../../public/Vector1.png';
import Vector2 from '../../../public/Vector2.png';
import Vector3 from '../../../public/Vector3.png';
import Vector4 from '../../../public/Vector4.png';



const Services = () => {
    return (
        <section className="py-12 px-4 md:px-0 container">
            <div className="max-w-6xl mx-auto">
                {/* First Row */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold">Services</h2>
                </div>

                {/* Second Row */}
                <div className="mb-8 text-center">
                    <p className="text-lg">
                        Gyanarthi  has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation.
                    </p>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div >
                        <div className="mb-4">
                            <Image className='vector1' src={Vector1} alt="amazon" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Usability Testing</h3>
                        <p>I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.</p>
                    </div>

                    <div >
                        <div className="mb-4">
                            <Image className='vector2' src={Vector2} alt="amazon" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Design</h3>
                        <p>I specialize in web development and design, creating visually appealing, user-friendly digital experiences.</p>
                    </div>
                    <div >
                        <div className="mb-4">
                            <Image className='vector3' src={Vector3} alt="amazon" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Branding</h3>
                        <p>I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience. </p>
                    </div>
                    <div >
                        <div className="mb-4">
                            <Image className='vector4' src={Vector4} alt="amazon" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">UX Research</h3>
                        <p>"I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products. </p>
                    </div>
                </div>
            </div>
        </section>)
}

export default Services