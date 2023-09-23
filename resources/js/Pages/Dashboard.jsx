import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link, Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden  sm:rounded-lg">
                        <div className="p-6 text-[#623722] text-center">
                            <Link href={route('post.index')} className='me-5 transition-all duration-150 hover:text-[#123C69]'>
                                Post as Company
                            </Link>
                            <button className='transition-all duration-150 hover:text-[#123C69]'>Post as You</button>
                        </div>
                        <div className='text-center mt-20'>

                            <Link href={route('home')} className='me-5 transition-all duration-150 hover:text-[#123C69]'>
                                <FontAwesomeIcon icon={faArrowLeft} className='text-[1rem] me-2'></FontAwesomeIcon>
                            Go Back Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
