import React from 'react'
import LayoutGrid from '../ui/layout-grid';
import FeaturesSectionDemo from '../ui/features-section-demo-2'

const S2 = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-center pt-[100px] flex-col '>
                <div className='text-center pb-[30px] w-[300px] sm:w-[900px]'>
                    <h1 className='text-lg sm:text-2xl font-bold'> From Concept to Completeion,</h1>
                    <h1 className='text-xl sm:text-4xl text-rose-500 pl-[15px] font-bold'>We deliver Full-Stack Expertise.</h1>
                </div>
                <div>
                    <p className='sm:w-[700px] w-[300px] text-[12px] sm:text-sm flex text-center pb-[30px]'>
                        We follow a structured approach for web and mobile development,
                        with planning, testing, and execution stages. We work with clients
                        to ensure software is reliable, secure, and user-friendly.
                    </p>
                </div>
                <div>
                    <FeaturesSectionDemo className="mb-[200px]" />
                </div>

                <div className='flex flex-col'>
                  
                </div>
            </div>


        </div>
    )
}


export default S2