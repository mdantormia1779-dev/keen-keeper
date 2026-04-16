"use client"
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { CallContext } from '../context/CallContextProvider';
import { useContext } from 'react';
import { MdOutlineTextsms } from 'react-icons/md';
import { CiVideoOn } from 'react-icons/ci';

const Page = () => {
    const { call } = useContext(CallContext);
    return (
        <div className="bg-[#f8fafc] py-20">
            <div className='container mx-auto'>
                <h1 className="font-bold text-5xl text-[#1f2937]">Timeline </h1>
                <div className='mt-6'>
                    <div className='space-y-4'>
                        {
                            call.map(data => (
                                <div key={data.id} className='p-4 bg-white rounded-lg flex gap-4 items-center shadow-lg'>
                                    <div>
                                        {data.type === "Calling" && <FiPhoneCall className="text-2xl mb-2" />}
                                        {data.type === "Textting" && <MdOutlineTextsms className="text-2xl mb-2"/>}
                                        {data.type === "Video" && <CiVideoOn className="text-2xl mb-2" />}
                                    </div>
                                    <div>
                                        <h1 className='text-[#244d3f] font-bold text-xl'>Call <span className='text-[#64748b] text-sm'>{data.name}</span></h1>
                                        <p className='text-[#64748b] text-sm mt-1'>March 29, 2026</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;