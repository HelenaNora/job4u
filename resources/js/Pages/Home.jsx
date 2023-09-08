import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserGroup  } from '@fortawesome/free-solid-svg-icons';
import Nav from '@/Layouts/Nav';
import { Link, Head } from '@inertiajs/react';
import home from './img/home.png';
import contact from './img/contact-us.png';

export default function Home({auth}) {
    return (
        // <>
        //     <Head title="Home" />
        //     <nav className='flex justify-around items-center'>
        //         <h3>Job4u</h3>
        //         <div className=''>
        //             <NavLink href={route('home')} active={route().current('home')} className='mx-2'>
        //                 Home
        //             </NavLink>
        //             <NavLink href={route('home')} active={route().current('home')} className='mx-2'>
        //                 Home
        //             </NavLink>
        //             <NavLink href={route('home')} active={route().current('home')} className='mx-2'>
        //                 Home
        //             </NavLink>
        //             <NavLink href={route('home')} active={route().current('home')} className='mx-2'>
        //                 Home
        //             </NavLink>
        //         </div>
        //         <div className="sm:top-0 sm:right-0 p-6 text-right">
        //             {auth.user ? (
        //                 <Link
        //                     href={route('dashboard')}
        //                     className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        //                 >
        //                     Dashboard
        //                 </Link>
        //             ) : (
        //                 <>
        //                     <Link
        //                         href={route('login')}
        //                         className="font-semibold text-[15px] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        //                     >
        //                         Log in
        //                     </Link>

        //                     <Link
        //                         href={route('register')}
        //                         className="ml-4 font-semibold text-[15px] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        //                     >
        //                         Register
        //                     </Link>
        //                 </>
        //             )}
        //         </div>
        //     </nav>
        // </>
        <Nav
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden sm:rounded-lg">
                        {/* heading section */}
                        <section>
                            <div className="text-center grid gap-4 md:grid-cols-2 sm:grid-cols-1">
                                <div className=''>
                                    <div className='tracking-[1rem] mb-16'>
                                        <span className='text-[#ee82a6] text-[1.8rem]'>J</span>
                                        <span className='text-[#ee82a6] text-[1.65rem]'>O</span>
                                        <span className='text-[#ee82a6] text-[1.5rem]'>B</span>
                                        <span className='text-[#AC3B61] text-[1.1rem]'>S</span>
                                        <span className='text-[#AC3B61] text-[1.3rem]'>4</span>
                                        <span className='text-[#AC3B61] text-[1.5rem]'>U</span>
                                    </div>
                                    <div className='my-5'>
                                        <p className='md:tracking-[0.7rem] text-[#123C69] mb-4'>We can change the world!</p>
                                        <p className='md:tracking-[0.5rem] text-[#123C69] text-md'>Search Your Job!</p>
                                    </div>
                                    <Link
                                    href={route('dashboard')}
                                    className="font-semibold text-[#ee82a6] transition duration-200 hover:text-[#AC3B61]  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                        Contact Us
                                    </Link>
                                </div>
                                <div>
                                    <img src={home} alt='home'/>
                                </div>
                            </div>
                        </section>
                        {/* heading section */}

                        {/* Job Section */}
                        <section className='my-6'>
                            <div className='text-center'>
                                <div className='my-8'>
                                   <p className='text-[#123C69] text-[2rem] border-b-2 border-b-[#AC3B61] pb-6'>Opportunity!</p>
                                </div>
                                <div className='grid gap-8 md:grid-cols-2 sm:grid-cols-1'>
                                    <div className='text-[#123C69] rounded-md p-8 transition-all duration-500 ease-in-out hover:text-white  hover:bg-[#AC3B61] hover:drop-shadow-2xl'>
                                        <FontAwesomeIcon icon={faSearch} className='text-[1.7rem]'></FontAwesomeIcon>
                                        <h3 className='text-[1.5rem] my-10'>Are you seeking a job?</h3>
                                        <button>Click Here</button>
                                    </div>
                                    <div className='text-[#AC3B61] rounded-md p-8 transition-all duration-500 ease-in-out hover:text-white  hover:bg-[#123C69] hover:drop-shadow-2xl'>
                                        <FontAwesomeIcon icon={faUserGroup} className='text-[1.7rem]'></FontAwesomeIcon>
                                        <h3 className='text-[1.5rem] my-10'>Are you finding employees?</h3>
                                        <button>Click Here</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Job Section */}
                        {/* About */}
                        <section className='my-6'>
                            <div className='text-center  mx-auto'>
                                <div className='my-8'>
                                    <h3 className='text-[#AC3B61] text-[1.8rem] border-b-2 border-b-[#BAB2B5] uppercase pb-6'>About</h3>
                                    <div className='grid gap-10 md:grid-cols-2 sm:grid-cols-1 tracking-wider text-[#123C69] text-sm leading-8 p-10 mt-10 text-left'>
                                        <p>At <strong>Job4u</strong>, we are dedicated to transforming the job search and hiring process. With a mission to connect talented individuals with their dream careers and assist employers in finding the perfect fit for their teams, we have become a trusted partner in the world of recruitment. Our experienced team of professionals understands the dynamic job market and specializes in various industries,ensuring that</p>
                                        <p>  we can meet the unique needs of both job seekers and employers. We take pride in our rigorous screening and matching processes, designed to foster lasting and fruitful employment relationships. With a commitment to excellence, innovation, and personalized service, <strong>Job4u</strong> stands as your premier choice for all your staffing and employment needs. Join us in shaping a brighter future for your career or business today.</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                        {/* About */}
                        {/* Contact Us */}
                        <section className='my-6'>
                            <div className='text-center'>
                                <div className='my-8'>
                                    <h3 className='text-[#123C69] text-[2rem] border-b-2 border-b-[#AC3B61] pb-6'>Contact Us</h3>
                                    <div className='grid gap-8 md:grid-cols-2 sm:grid-cols-1'>
                                        <div className='mt-5 ms-5 p-5'>
                                            <img src={ contact} />
                                        </div>
                                        <div className='text-start rounded-md  p-16 m-auto mt-10 shadow-inner shadow-[#123C69] transition-all duration-200 hover:bg-[#EDC7B7]  hover:shadow-[#EDC7B7]'>
                                            <p className=''><span className='text-[1.2rem] text-[#123C69] me-5 '>Email</span>:<span className='text-[#a03257]  ms-5'>jou4u.mm.com</span></p>
                                            <p className='my-10'><span className='text-[1.1rem] text-[#123C69] me-5'>Phone</span>:<span className='text-[#a03257]  ms-5'>+9599567623</span></p>
                                            <p className='my-10'><span className='text-[1rem] text-[#123C69] me-5'>Address</span>:<span className='text-[#a03257]  ms-5'>Yangon,Myanmar</span></p>
                                            <div className='text-end'>
                                                <button className='text-[#a03257]'>Contact Us</button>
                                            </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                        {/* Contact Us */}
                    </div>
                </div>
            </div>
        </Nav>
    );
}
