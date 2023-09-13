import Nav from '@/Layouts/Nav';
import { Link, Head } from '@inertiajs/react';
import help from './img/help_center.png';
import Accordion from './Accordion';

export default function Home({auth}) {
    return (
        <Nav>
            <Head title="Help_Center" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden sm:rounded-lg">
                        <p className='text-[#123C69] text-center'><span className='text-5xl text-[#AC3B61]'>F</span><span>requently asked questions about Job4u.</span></p>
                        <div className='grid md:grid-cols-2 sm:grid-cols-1 m-5'>
                            <div className='ms-5'>

                                <div className=' h-80 mt-5'>
                                    <div className=''>
                                        <Accordion title="What is Job4u?">
                                            <p>At Job4u, we are dedicated to transforming the job search and hiring process. With a mission to connect talented individuals with their dream careers and assist employers in finding the perfect fit for their teams, we have become a trusted partner in the world of recruitment.</p>
                                        </Accordion>
                                    </div>
                                    <div className='mt-3'>
                                        <Accordion title="How do I register with your job agency?">
                                            <p>To register with our agency, please visit our website and click on the "Register" or "Join Us" button. Follow the instructions to create an account and complete your profile.</p>
                                        </Accordion>
                                    </div>
                                    <div className='mt-3'>
                                        <Accordion title="What types of jobs do you typically have available?">
                                            <p>We offer a wide range of job opportunities across various industries, including [list specific industries].</p>
                                        </Accordion>
                                    </div>
                                    <div className='mt-3'>
                                        <Accordion title="Do you charge job seekers for your services?">
                                            <p>No, our services for job seekers are entirely free. We connect you with potential employers at no cost.</p>
                                        </Accordion>
                                    </div>
                                    <div className='mt-3'>
                                        <Accordion title="Do you charge job seekers for your services?">
                                            <p>No, our services for job seekers are entirely free. We connect you with potential employers at no cost.</p>
                                        </Accordion>
                                    </div>
                                    <div className='mt-3'>
                                        <Accordion title="How do I update my resume or profile on your platform?">
                                            <p>Log in to your account, go to your profile, and click on the "Edit Profile" or "Update Resume" option. Make your changes and save them.</p>
                                        </Accordion>
                                    </div>
                                    <div className='mt-3'>
                                        <Accordion title="What is the process after I submit my application through your agency?">
                                            <p>After you apply for a job through our platform, our team will review your application and match you with suitable job opportunities. If there's a match, we'll contact you for an interview.</p>
                                        </Accordion>
                                    </div>
                                    <div className='mt-3'>
                                        <Accordion title="How can I improve my chances of getting hired through your agency?">
                                            <p>We recommend keeping your profile up-to-date, customizing your resume for each application, and preparing for interviews. Our blog also offers tips on job search and interview preparation.</p>
                                        </Accordion>
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={ help}  className='object-fill h-72 w-96'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Nav>
    );
}
