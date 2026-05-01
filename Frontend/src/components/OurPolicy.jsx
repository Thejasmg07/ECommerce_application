import React from 'react'
import { RefreshCcwDot, BadgeCheck, Headphones } from 'lucide-react'

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10'>
            <div>
                <RefreshCcwDot className='w-12 m-auto mb-5' />
                <p className='text-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We offer hassle free exchange policy</p>
            </div>
            <div>
                <BadgeCheck className='w-12 m-auto mb-5' />
                <p className='text-semibold'>& Days Return Policy</p>
                <p className='text-gray-400'>We provide & days free return policy</p>
            </div>
            <div>
                <Headphones className='w-12 m-auto mb-5' />
                <p className='text-semibold'>Best customer support</p>
                <p className='text-gray-400'>We provide 24/7 customer support</p>
            </div>

        </div>
    )
}

export default OurPolicy
