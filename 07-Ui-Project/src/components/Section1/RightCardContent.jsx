import React from 'react'

const RightCardContent = (props) => {
    console.log(props.color);

    return (
        // <div className='h-full overflow-hidden relative w-80  rounded-4xl'>
        /* <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D" alt="Profile image" /> */
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
            {/* opacity-0 hover:opacity-100 transition-opacity duration-300 */}
            <h2 className='bg-white text-2xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id + 1} </h2>
            <div className='text-xl leading-normal'>
                <p className='text-shadow-2xs text-xl leading-normal text-white mb-10'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquid ex facilis tempora unde perferendis? </p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color }} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                    <button className=' text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>

    )
}

export default RightCardContent
