import React from 'react';

const Banner = () => {
    return (
        <div className='bg-teal-100 min-h-screen px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 w-full'>
                {/* Content */}
                <div className='md:w-1/2 space-y-8'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Donate Books<span className='text-blue-700'>for the needy ones!</span></h1>
                    <div className='flex gap-4 mt-4'>
                        <input type="search" placeholder='Search a book here' className='py-2 px-2 rounded-md flex-1' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
