"use client"
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Ourvision = () => {
    return (
        <section className="py-12 px-4 md:px-0">
            <div className="max-w-7xl mx-auto vdiv">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Column */}
                    <div>
                        {/* First Row */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold">Learn Our Past, Join Our Future</h2>
                        </div>
                        {/* Second Row */}
                        <div className="mb-8">
                            <p className="text-lg">
                                Established in 2005 with an aim to empower students with best academic excellence, Gyanarthi Media College is affiliated with the Kumaun University and is one of the only colleges in Kashipur that provides courses in Media, Animation, Design, Fashion, Journalism, Banking, Taxation, and more.
                            </p>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div>
                        <div>
                            <Tabs className="vtabs">
                                <TabList className="tablist">
                                    <Tab className="stab">Who Are We</Tab>
                                    <Tab className="stab">Our Vision</Tab>
                                    <Tab className="stab">Our Mission</Tab>
                                </TabList>
                                <div>
                                    <TabPanel className="tabpanel">
                                        <p>University to build a strong community of professionals equipped with relevant academic insights. We are only college in the town that provides an intensive curriculum in fields such as Taxation, International Business, Banking and Finance, and Financial Accounting.<br></br><br></br>

                                            Our Media, Journalism, Design, Animation, and Mass Communication curriculum are supported by an experienced faculty that is competent in the respective fields.<br></br><br></br>

                                            Fashion Course at Gyanarthi inculcates  comprehensive insights into the Indian Textile Industries for relevant academic proficiency</p>
                                    </TabPanel>
                                    <TabPanel className="tabpanel">
                                        <p>Our Vision is to contribute to the strong global community of media, arts, and culture through powerful collaborations and promote intellectual diversity through artistic innovations.<br></br><br></br>

                                            We envision to promote creativity and entrepreneurship within the student community in a balanced, comprehensive way so as to fuel careers that are inspired by true dedication for respective fields.<br></br><br></br>

                                            Our faculty is highly affirmative at delivering quality education in  the town of Kashipur to promote academia in most understandable and feasible manner.
                                        </p>
                                    </TabPanel>
                                    <TabPanel className="tabpanel">
                                        <p>Gyanarthi Media College aims to inspire youngsters to turn into the leaders of tomorrow. We seek to create a strong sense of unity in the media and arts community by bridging gaps and creating incredible artistic experiences in film, fashion, television, print, radio, and digital media.<br></br><br></br>

                                            We aspire to create a pedagogical milestone by nurturing scholastic abilities in the arena of teaching, learning and research.<br></br><br></br>

                                            We train young professionals by inculcating sensitivity, encouraging intersectional approaches to media and management and diversifying entrepreneurial visions with the help of industry experts.</p>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Ourvision