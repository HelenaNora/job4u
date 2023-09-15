import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
export default function JobEdit({ job }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        logo:job.logo,
        company_name: job.company_name,
        phone: job.phone,
        email:job.email,
        address: job.address,
        position: job.position,
        gender: job.gender,
        number:job.number,
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
        <>
            {editing
                    ? <form onSubmit={submit}>
                        <div>
                        <label className='text-[0.8rem] text-[#123C69]'>Company's Logo</label>
                        <input type="file" name={data.logo} id="" onChange={e => setData('logo', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                        <InputError message={errors.logo} className="mt-2" />
                    </div>
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
                        <input type="text" name={data.gender} id="" onChange={e => setData('gender', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                        <InputError message={errors.gender} className="mt-2" />
                    </div>
                    <div>
                        <label className='text-[0.8rem] text-[#123C69]'>number of employee</label>
                        <input type="number" name={data.number} id="" onChange={e => setData('number', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                        <InputError message={errors.number} className="mt-2" />
                    </div>
                    <div>
                        <label className='text-[0.8rem] text-[#123C69]'>Degree</label>
                        <input type="text" name={data.degree} id="" onChange={e => setData('degree', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                        <InputError message={errors.degree} className="mt-2" />
                    </div>
                    <div>
                        <label className='text-[0.8rem] text-[#123C69]'>Experience</label>
                        <input type="text" name={data.experience} id="" onChange={e => setData('experience', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                        <InputError message={errors.experience} className="mt-2" />
                    </div>
                    <div>
                        <label className='text-[0.8rem] text-[#123C69]'>Salary</label>
                        <input type="number" name={data.salary} id="" onChange={e => setData('salary', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
                        <InputError message={errors.salary} className="mt-2" />
                    </div>
                    <div>
                        <label className='text-[0.8rem] text-[#123C69]'>Job Type</label>
                        <input type="text" name={data.job_type} id="" onChange={e => setData('job_type', e.target.value)} className="block w-full  focus:border-indigo-300 rounded-md"/>
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
                :
                <div>
                    <p className="mt-4 text-lg text-gray-900">{job.logo}</p>
                    <p className="mt-4 text-lg text-gray-900">{job.company_name}</p>
                    <p className="mt-4 text-lg text-gray-900">{job.phone}</p>
                    <p className="mt-4 text-lg text-gray-900">{job.email}</p>
                    <p className="mt-4 text-lg text-gray-900">{job.message}</p>
                    <p className="mt-4 text-lg text-gray-900">{job.message}</p>
                    <p className="mt-4 text-lg text-gray-900">{job.message}</p>
                    <p className="mt-4 text-lg text-gray-900">{job.message}</p>
                </div>
                }
        </>
    )

}
