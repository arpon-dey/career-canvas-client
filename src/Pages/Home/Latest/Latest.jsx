import dev from '../../../assets/img/icons8-backend-development-64.png';
const Latest = () => {
    return (
        <div>
            <h1 className='glass w-4/12 mx-auto my-4 text-center text-xl font-semibold bg-orange-400 text-white p-4 rounded-xl'> Latest job post </h1>
            <h2 className='text-2xl text-center font-semibold mb-8 border-b-4 md:w-3/12 w-9/12 border-orange-600 mx-auto '>Job you may interested</h2>
            <p></p>

            <div className='grid grid-cols-1 gap-8'>
                <div className='md:mx-32'>
                    <div style={{ background: 'linear-gradient(to bottom, #C8C8C8, #FAFAF5)', "borderRadius": '15px' }}>
                        <div className='backdrop-blur-sm flex flex-col lg:flex-row justify-between items-center  md:hover:border-s-8 hover:border-orange-600 p-4 px-16 rounded-xl '>
                            <div className='  flex flex-col lg:flex-row items-center lg:gap-16 '>
                                <div><img src={dev} alt="" /></div>
                                <div className='grid grid-cols-1'>
                                    <p className='bg-green-400 lg:w-2/12 text-center text-white rounded-md my-4'>Full time</p>
                                    <p className='mb-4 text-lg font-semibold hover:text-orange-400 text-center lg:text-justify'>Web designer, graphic designer, ui/ux designer & art.</p>
                                    <div className='grid grid-cols-2 lg:flex  lg:flex-row justify-center items-center gap-10 mb-4 '>
                                        <button className='btn btn-sm'> Graphic designer</button>
                                        <button className='btn btn-sm'> $ 40000 - 50000</button>
                                        <button className='btn btn-sm'>Chalmondi, USA</button>
                                        <button className='btn btn-sm'>⌚ 15 minute ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className=''><button className='btn btn-secondary  mt-2 md:mt-0 '>Browse job</button></div>
                        </div>
                    </div>
                </div>
                <div className='md:mx-32'>
                    <div style={{ background: 'linear-gradient(to bottom, #C8C8C8, #FAFAF5)', "borderRadius": '15px' }}>
                        <div className='backdrop-blur-sm flex flex-col lg:flex-row justify-between items-center  md:hover:border-s-8 hover:border-orange-600 p-4 px-16 rounded-xl '>
                            <div className='  flex flex-col lg:flex-row items-center lg:gap-16 '>
                                <div><img src={dev} alt="" /></div>
                                <div className='grid grid-cols-1'>
                                    <p className='bg-green-400 lg:w-2/12 text-center text-white rounded-md my-4'>Full time</p>
                                    <p className='mb-4 text-lg font-semibold hover:text-orange-400 text-center lg:text-justify'>Digital Marketing and seo Specialist.</p>
                                    <div className='grid grid-cols-2 lg:flex  lg:flex-row justify-center items-center gap-10 mb-4'>
                                        <button className='btn btn-sm'>Digital Marketing</button>
                                        <button className='btn btn-sm'> $ 40000 - 50000</button>
                                        <button className='btn btn-sm'>New York, USA</button>
                                        <button className='btn btn-sm'>⌚ 20 minute ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className=''><button className='btn btn-secondary mt-2 md:mt-0 '>Browse job</button></div>
                        </div>
                    </div>
                </div>
                <div className='md:mx-32'>
                    <div style={{ background: 'linear-gradient(to bottom, #C8C8C8, #FAFAF5)', "borderRadius": '15px' }}>
                        <div className='backdrop-blur-sm flex flex-col lg:flex-row justify-between items-center  md:hover:border-s-8 hover:border-orange-600 p-4 px-16 rounded-xl '>
                            <div className='  flex flex-col lg:flex-row items-center lg:gap-16 '>
                                <div><img src={dev} alt="" /></div>
                                <div className='grid grid-cols-1'>
                                    <p className='bg-green-400 lg:w-2/12 text-center text-white rounded-md my-4'>Part time</p>
                                    <p className='mb-4 text-lg font-semibold hover:text-orange-400 text-center lg:text-justify'>Motion graphic designer.</p>
                                    <div className='grid grid-cols-2 lg:flex  lg:flex-row justify-center items-center gap-10 mb-4'>
                                        <button className='btn btn-sm'>Graphic Designer</button>
                                        <button className='btn btn-sm'> $ 60000 - 50000</button>
                                        <button className='btn btn-sm'>Yourope rd, Chattogram</button>
                                        <button className='btn btn-sm'>⌚ 20 minute ago</button>
                                    </div>
                                </div>
                            </div>
                            <div className=''><button className='btn btn-secondary mt-2 md:mt-0 '>Browse job</button></div>
                        </div>
                    </div>
                </div>



               

            </div>
        </div>
    );
};

export default Latest;