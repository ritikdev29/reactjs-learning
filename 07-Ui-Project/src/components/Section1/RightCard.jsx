// import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.color);

    return (

        <div className='h-full shrink-0 overflow-hidden relative w-80  rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="Profile image" />

            <RightCardContent color={props.color} id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard



//  <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
//                 {/* opacity-0 hover:opacity-100 transition-opacity duration-300 */}
//                 <h2 className='bg-white text-2xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
//                 <div className='text-lg leading-normal'>
//                     <p className='text-lg leading-normal text-white mb-10'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquid ex facilis tempora unde perferendis? </p>
//                     <div className='flex justify-between'>
//                         <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>Satisfied</button>
//                         <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
//                     </div>
//                 </div>
//             </div>
