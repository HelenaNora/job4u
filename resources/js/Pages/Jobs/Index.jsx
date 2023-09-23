import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';


export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        company_name: '',
        phone: '',
        email:'',
        address: '',
        position: '',
        gender: '',
        number:'',
        degree:'',
        experience: '',
        salary: '',
        job_type: '',
        details:'',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('post.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Posts" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className='text-center text-xl uppercase'>Find Employees</h1>
                <form onSubmit={submit}>
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

                    <div className='text-end'>
                        <PrimaryButton className="mt-4" disabled={processing}>Post</PrimaryButton>
                   </div>

                </form>


            </div>

        </AuthenticatedLayout>
    );
}
