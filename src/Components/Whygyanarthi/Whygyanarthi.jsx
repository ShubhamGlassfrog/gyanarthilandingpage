import React from 'react'
import Image from 'next/image';

import Vector1 from '../../../public/Vector1.png';
import Vector2 from '../../../public/Vector2.png';
import Vector3 from '../../../public/Vector3.png';
import Vector4 from '../../../public/Vector4.png';



const Whygyanarthi = () => {
    return (
        <section className="py-12 px-4 md:px-0 container text-black">
            <div className="max-w-6xl mx-auto">
                {/* First Row */}
                <div className="mb-8 text-center md:text-left sm:text-left">
                    <h2 className="text-3xl font-bold">Why Gyanarthi?</h2>
                </div>

                {/* Second Row */}
                <div className="mb-8 text-center md:text-left sm:text-left">
                    <p className="text-lg">
                        The industry specific curriculum at Gyanarthi is backed by relevance and expertise. Affiliated with the Kumaun University, the college is home to top faculty and has a state-of-the-art infrastructure. Providing best education in mass communication, animation, design, and commerce, Gyanarthi Media College elevates the academia experience for the students in Kashipur and beyond!
                    </p>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div >
                        <div className="mb-4">
                            <Image className='vector1' src={Vector1} alt="amazon" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Urban Infrastructure</h3>
                        <p>Equipped with the best facilities, the campus of Gyanarthi Media College is widespread in the beautiful city of Kashipur.</p>
                    </div>

                    <div >
                        <div className="mb-4">
                            <Image className='vector2' src={Vector2} alt="amazon" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Diverse Faculty</h3>
                        <p>The teachers at Gyanarthi belong to diverse academic backgrounds. Their experience and expertise ensures quality education. </p>
                    </div>
                    <div >
                        <div className="mb-4">
                            <Image className='vector3' src={Vector3} alt="amazon" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Professional Streams</h3>
                        <p>Bachelor of Commerce at Gyanarthi has professional streams such as Taxation, International Business, and more. </p>
                    </div>
                    <div >
                        <div className="mb-4">
                            <Image className='vector4' src={Vector4} alt="amazon" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Academic Workshops</h3>
                        <p>Gyanarthi collaborates with Industry Experts to provide the students with constant insights to boost their career. </p>
                    </div>
                </div>
            </div>
        </section>)
}

export default Whygyanarthi