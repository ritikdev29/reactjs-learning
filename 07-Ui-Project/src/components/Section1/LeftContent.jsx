import React from 'react'
// import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3 '>
            {/* <div className='p-6'>
                <h3 className='mb-8 text-6xl font-bold'>Prospective <br /> <span className='text-gray-800 '>Customer</span><br /><span>Segmentation</span></h3>
                <p className='text-xl font-medium text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel velit nobis quos consequatur explicabo at neque nisi maxime, doloribus distinctio! Blanditiis eum qui ratione suscipit adipisci eveniet maxime harum officia.</p>
            </div> */}
            {/* <div className='text-8xl'>
                <i className="ri-arrow-right-up-fill"></i>
            </div> */}
            <HeroText />
            <Arrow />

        </div>
    )
}

export default LeftContent
