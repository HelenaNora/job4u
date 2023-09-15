import React from 'react';
import Dropdown from '@/Components/Dropdown';
import { Link, Head } from '@inertiajs/react';
export default function Job({ auth,job }) {

    return (
                <div className="p-6">
                    <div className='text-[#123C69] bg-[#e5c5d0] rounded-md p-6'>
                        <div>
                            <h1 className='uppercase'>We are</h1>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Link   className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                            Edit
                                        </Link>
                                    </Dropdown.Content>
                                </Dropdown>
                        </div>
                        <span className='text-5xl uppercase border-b-4 border-b-[#123C69]'>Hiring!</span>
                        <p className='text-sm uppercase my-5'>{job.position}</p>
                        <span className='text-[.8rem] uppercase'>{ job.gender} ({job.number})POST</span>
                       <div className='text-sm text-right mt-6'>
                            <p className='my-3'><span>Location</span>:<span>{job.address}</span></p>
                            <p className='my-3'>Phone - {job.phone}</p>
                            <p className='my-3'>Email - {job.email}</p>
                        </div>

                        <div className='text-right'>
                            <button className=''>See More</button>
                        </div>

                    </div>
                </div>

    // <div className="p-6 flex space-x-2">
    //     <div className="flex-1">
    //         <div className="flex justify-between items-center">
    //             <div className="p-6 grid md:grid-cols-3 sm:grid-cols-1 gap-4">
    //                 <div className='text-[#123C69] bg-[#e5c5d0] rounded-md p-6'>
    //                     <h1 className='uppercase'>We are</h1>
    //                     <span className='text-5xl uppercase border-b-4 border-b-[#123C69]'>Hiring!</span>
    //                     <p className='text-sm uppercase my-5'>{job.position}</p>
    //                     <span className='text-[.8rem] uppercase'>{ job.gender} ({job.number})POST</span>
    //                    <div className='text-sm text-right mt-6'>
    //                         <p className='my-3'><span>Location</span>:<span>{job.address}</span></p>
    //                         <p className='my-3'>Phone - {job.phone}</p>
    //                         <p className='my-3'>Email - {job.email}</p>
    //                     </div>
    //                     <div className='text-right'>
    //                         <button className=''>See More</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    );
}
