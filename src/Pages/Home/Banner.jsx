import { Option, Select } from '@material-tailwind/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='my-8'>
            <div className="hero md:min-h-screen rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/fYy3pCC/flat-lay-workstation-with-copy-space-laptop.jpg)' }}>
                <div className="hero-overlay rounded-3xl bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <div className='my-8 md:my-0'>
                            <h1 className=" mx-auto  mb-5 text-3xl md:text-5xl font-bold">Find nearby jobs of <span className='text-orange-500'><TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'Graphics designer',
                                    1000,
                                    'Web developer',
                                    1000,
                                    'Frontend Developer',
                                    1000,
                                    'Digital markete',
                                    1000,
                                ]}
                                speed={50}
                                // style={{ fontSize: '2rm' }}
                                className='text-5xl'
                                repeat={Infinity}
                            /></span></h1>
                            <p className="mx-auto max-w-xl mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>

                        {/* bg-gradient-to-r from-indigo-200 to-indigo-100  */}

                        <div className=' p-5 my-8 md:my-0 bg-gradient-to-r  from-blue-gray-400 to-blue-gray-100 rounded-xl'>



                            <div className=" lg:flex grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8  ">


                                <div className="gap-2">
                                    <input
                                        type="text"
                                        placeholder="🔍 Search Job keyword"
                                        name="name"
                                        className="input input-bordered bg-white text-black"
                                    />

                                </div>

                                <div className=" gap-2">
                                    <Select
                                        label="◉ Select Location"
                                        onChange={(value => setBrand(value))}
                                        className="bg-white p-5 py-6 -my-1 "
                                    >
                                        <Option value="BAngladesh">Bangladesh</Option>
                                        <Option value="India">India</Option>
                                        <Option value="Luxembourg">Luxembourg</Option>
                                        <Option value="California">California</Option>
                                        <Option value="China">China</Option>
                                        <Option value="London">London</Option>

                                    </Select>

                                </div>
                                <div className="  gap-2">
                                    <Select
                                        label="All categories"
                                        onChange={(value => setType(value))}
                                        className="bg-white p-5 py-6 -my-1 "
                                    >
                                        <Option value="Web development">Web development</Option>
                                        <Option value="Digital marketing">Digital marketing</Option>
                                        <Option value="Graphics Design">Graphics Design</Option>
                                    </Select>

                                </div>

                                <div className=" ">
                                    {/* <button className="btn btn-block">Login</button> */}
                                    <input type="submit" className="btn btn-block bg-blue-gray-500 border-0 hover:bg-blue-gray-300 text-white" value="🔍 Search Jobs" />
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;