import React from 'react';

const Industry = () => {
    const icons = [
        "https://cdn-icons-png.flaticon.com/128/4319/4319504.png",
        "https://cdn-icons-png.flaticon.com/128/3176/3176363.png",
        "https://cdn-icons-png.flaticon.com/128/4776/4776946.png",
        "https://cdn-icons-png.flaticon.com/128/681/681803.png",
        "https://cdn-icons-png.flaticon.com/128/8694/8694747.png",
        "https://cdn-icons-png.flaticon.com/128/4850/4850909.png",
        "https://cdn-icons-png.flaticon.com/128/1968/1968750.png",
        "https://cdn-icons-png.flaticon.com/128/12133/12133548.png",
        "https://cdn-icons-png.flaticon.com/128/2000/2000047.png",
        "https://cdn-icons-png.flaticon.com/128/1029/1029022.png",
        "https://cdn-icons-png.flaticon.com/128/201/201623.png",
    ];

    return (
        <div className='relative flex h-screen w-full p-[30px] justify-center flex-col bg-cover bg-center bg-no-repeat'>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-10"></div>

            {/* Content */}
            <div className='relative z-10 text-center mb-[80px]'>
                <h className="text-xl sm:text-3xl text-white">Industries Targeted <br /> By </h>
                <h className="text-rose-500 text-2xl sm:text-5xl font-bold">Synwave Solutions</h>
            </div> 

            <div className='relative z-10 flex items-center justify-center flex-wrap gap-[100px] sm:gap-[60px]'>
                {icons.map((val, ind) => (
                    <img key={ind} src={val} className='sm:w-[140px] sm:h-[140px] w-[60px] h-[60px]' />
                ))}
            </div>
        </div>
    );
}

export default Industry;
