import blog from '../../../assets/img/icons8-blog-48.png';
import msg from '../../../assets/img/icons8-message-94.png';
import phone from '../../../assets/img/icons8-phone-48.png';
const Support = () => {
    return (
        <div className='my-24'>
            <h1 className='glass w-4/12 mx-auto my-4 text-center text-xl font-semibold bg-orange-400 text-white p-4 rounded-xl'> Digitalent help service </h1>
            <h2 className='text-2xl text-center font-semibold'>Need any help?</h2>
            <p></p>

           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-24 my-8 '>
                <div className='text-center p-8 rounded-xl shadow-xl'>
                    <img src={msg} className='w-20 mx-auto mb-2' alt="" />
                    <p className='mb-2 font-semibold text-2xl'>Chat to Us Online</p>
                    <p className='mb-2'>Chat to us online if you have any question.</p>
                    <button className='btn mb-2  bg-cyan-600  hover:bg-cyan-400 text-white mt-4'>Click here to chat</button>
                </div>
                <div className='text-center p-8 rounded-xl shadow-xl'>
                    <img src={phone} className='w-20 mx-auto mb-2' alt="" />
                    <p className='mb-2  font-semibold text-2xl'>Our Support Agent</p>
                    <p className='mb-2'>Our support agent will work with you to meet your lending needs.</p>
                    <button className='btn mb-2  bg-cyan-600  hover:bg-cyan-400 text-white mt-4'>Contact us</button>
                </div>
                <div className='text-center p-8 rounded-xl shadow-xl'>
                    <img src={blog} className='w-20 mx-auto mb-2' alt="" />
                    <p className='mb-2  font-semibold text-2xl'>Read Latest Blog Post</p>
                    <p className='mb-2'>Visit our Blog page and know more about news and career tips</p>
                    <button className='btn mb-2 bg-cyan-600   hover:bg-cyan-400 text-white mt-4'>Read blog post</button>
                </div>
            </div>
        </div>
    );
};

export default Support;