import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
export default function Job({ job }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        company_name: job.company_name,
        phone: job.phone,
        email: job.email,
        address: job.address,
        position: job.position,
        gender: job.gender,
        number: job.number,
        degree:job.degree,
        experience: job.experience,
        salary: job.salary,
        job_type: job.job_type,
        details:job.details,

    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('post.update', job.id), { onSuccess: () => setEditing(false) });
    };

    return (
        <div className="p-6">
            <div className="text-[#123C69] bg-[#e5c5d0] rounded-md p-6">
                <div className="flex justify-between">
                    <div>
                        <span className="uppercase">We Are</span>
                        <small className="ml-4 text-sm text-gray-600">{dayjs(job.created_at).fromNow()}</small>
                        {job.created_at !== job.updated_at && <small className="text-sm text-gray-600"> &middot; edited</small>}
                        <p className='text-5xl uppercase border-b-4 border-b-[#123C69]'>Hiring!</p>
                    </div>
                    {job.user.id === auth.user.id &&
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                                    Edit
                                </button>
                            </Dropdown.Content>
                        </Dropdown>
                    }
                </div>
                {editing
                    ? <form onSubmit={submit}>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Company's Name</label>
                            <input type="text" name={data.company_name} id="" onChange={e => setData('company_name', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.company_name} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Phone</label>
                            <input type="number" name={data.phone} id="" onChange={e => setData('phone', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                           <InputError message={errors.phone} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Email</label>
                            <input type="email" name={data.email} id="" onChange={e => setData('email', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Address</label>
                            <textarea
                            value={data.address}
                            placeholder=""
                            className="block w-full  focus:border-indigo-300 rounded-md"
                            onChange={e => setData('address', e.target.value)}
                            ></textarea>
                            <InputError message={errors.address} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Position</label>
                            <input type="text" name={data.position} id="" onChange={e => setData('position', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.position} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Gender</label>
                            <input type="text" name={data.gender} id="" onChange={e => setData('gender', e.target.value)}     className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.gender} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>number of employee</label>
                            <input type="number" name={data.number} id="" onChange={e => setData('number', e.target.value)}     className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.number} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Degree</label>
                            <input type="text" name={data.degree} id="" onChange={e => setData('degree', e.target.value)}     className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.degree} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Experience</label>
                            <input type="text" name={data.experience} id="" onChange={e => setData('experience', e.target.    value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.experience} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Salary</label>
                            <input type="number" name={data.salary} id="" onChange={e => setData('salary', e.target.value)}     className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.salary} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Job Type</label>
                            <input type="text" name={data.job_type} id="" onChange={e => setData('job_type', e.target.value)}     className="block w-full  focus:border-indigo-300 rounded-md"/>
                            <InputError message={errors.job_type} className="mt-2" />
                        </div>
                        <div>
                            <label className='text-[0.8rem] text-[#123C69]'>Details</label>
                            <textarea
                            value={data.details}
                            className="block w-full  focus:border-indigo-300 rounded-md"
                            onChange={e => setData('details', e.target.value)}
                            ></textarea>
                            <InputError message={errors.details} className="mt-2" />
                        </div>
                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">Save</PrimaryButton>
                            <button className="mt-4" onClick={() => { setEditing(false); reset(); clearErrors(); }}>Cancel</button>
                        </div>
                    </form>
                    : <div>
                        <div>
                            <p className='text-sm uppercase my-5'>{job.company_name}</p>
                            <p className='text-sm uppercase my-5'>{job.position}</p>
                            <span className='text-[.8rem] uppercase'>{ job.gender} ({job.number})POST</span>
                        </div>
                        <p className='text-sm h-16 mt-4 px-0 '>{job.details}</p>
                        <div >
                            <h1 className='text-lg text-[#623722] mb-3'>Requirements</h1>
                            <p className='text-sm mb-2'><span>Experience</span>:{job.experience}</p>
                            <p className='text-sm mb-2'><span>Degree</span>:{job.degree}</p>
                            <p className='text-sm mb-2'><span>Salary</span>:{job.salary}mmk</p>
                            <p className='text-sm mb-2'><span>Job-Type</span>:{ job.job_type}</p>
                        </div>
                        <div className='text-sm text-right mt-3'>
                            <p className='my-3'><span>Location</span>:<span>{job.address}</span></p>
                            <p className='my-3'>Phone - {job.phone}</p>
                            <p className='my-3'>Email - {job.email}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
// <div className="p-6">
        //     <div className='text-[#123C69] bg-[#e5c5d0] rounded-md p-6'>
        //                 <div className='flex justify-between'>
        //                     <h1 className='uppercase'>We are</h1>
        //                 </div>
        //                 <span className='text-5xl uppercase border-b-4 border-b-[#123C69]'>Hiring!</span>
        //                 <p className='text-sm uppercase my-5'>{job.position}</p>
        //                 <span className='text-[.8rem] uppercase'>{ job.gender} ({job.number})POST</span>
        //                <div className='text-sm text-right mt-6'>
        //                     <p className='my-3'><span>Location</span>:<span>{job.address}</span></p>
        //                     <p className='my-3'>Phone - {job.phone}</p>
        //                     <p className='my-3'>Email - {job.email}</p>
        //                 </div>

        //                 <div className='text-right'>
        //                     <button className=''>See More</button>
        //                 </div>

        //             </div>
        //         </div>
