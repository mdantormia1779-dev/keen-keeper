import Image from 'next/image';
import React from 'react';
import Images from "../../../../public/ellipse-1.png"


const Card = () => {
    return (
        <div className='container mx-auto p-4 lg:p-0'>
            <h1 className='font-bold text-[#1f2937] text-2xl'>Your Friends</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <Image className='mb-3'
                        src={Images}
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='font-semibold text-xl text-[#1f2937] mb-2'>David Kim</h1>
                    <p className='text-[#64748b]'>62d ago</p>
                    <div className="badge badge-info font-semibold text-[#244d3f] bg-[#cbfadb] mt-2">WORK</div>
                    <div className="badge badge-warning text-white bg-[#efad44] rounded-full mt-2">Warning</div>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <Image className='mb-3'
                        src={Images}
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='font-semibold text-xl text-[#1f2937] mb-2'>David Kim</h1>
                    <p className='text-[#64748b]'>62d ago</p>
                    <div className="badge badge-info font-semibold text-[#244d3f] bg-[#cbfadb] mt-2">WORK</div>
                    <div className="badge badge-warning text-white bg-[#efad44] rounded-full mt-2">Warning</div>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <Image className='mb-3'
                        src={Images}
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='font-semibold text-xl text-[#1f2937] mb-2'>David Kim</h1>
                    <p className='text-[#64748b]'>62d ago</p>
                    <div className="badge badge-info font-semibold text-[#244d3f] bg-[#cbfadb] mt-2">WORK</div>
                    <div className="badge badge-warning text-white bg-[#efad44] rounded-full mt-2">Warning</div>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <Image className='mb-3'
                        src={Images}
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='font-semibold text-xl text-[#1f2937] mb-2'>David Kim</h1>
                    <p className='text-[#64748b]'>62d ago</p>
                    <div className="badge badge-info font-semibold text-[#244d3f] bg-[#cbfadb] mt-2">WORK</div>
                    <div className="badge badge-warning text-white bg-[#efad44] rounded-full mt-2">Warning</div>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <Image className='mb-3'
                        src={Images}
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='font-semibold text-xl text-[#1f2937] mb-2'>David Kim</h1>
                    <p className='text-[#64748b]'>62d ago</p>
                    <div className="badge badge-info font-semibold text-[#244d3f] bg-[#cbfadb] mt-2">WORK</div>
                    <div className="badge badge-warning text-white bg-[#efad44] rounded-full mt-2">Warning</div>
                </div>
            </div>
        </div>
    );
};

export default Card;