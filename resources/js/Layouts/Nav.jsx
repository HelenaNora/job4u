import { useState } from 'react';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';


export default function Nav({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-[#EEE2DC]">
            <nav className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <h3 className='text-[#123C69] text-[1.7rem]'>Job4u</h3>
                            </div>

                            <div className="hidden space-x-8 md:ms-12  sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('home')} active={route().current('home')}>
                                    Home
                                </NavLink>
                                <NavLink href={route('finding-Job.index')} active={route().current('finding-Job.index')}>
                                    Jobs
                                </NavLink>
                                <NavLink href={route('home')} active={route().current('home')}>
                                    Employees
                                </NavLink>
                                <NavLink href={route('help_center')} active={route().current('help_center')}>
                                    Help Center
                                </NavLink>
                            </div>

                            <div className='text-[0.9rem] text-[#123C69] md:ms-96 hidden space-x-8 sm:-my-px sm:ml-10 sm:flex'>
                                <NavLink href={route('login')} active={route().current('login')}>
                                    Login
                                </NavLink>

                                <NavLink href={route('register')} active={route().current('register')}>
                                    Register
                                </NavLink>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-[#123C69]  hover:bg-[#123C69]focus:outline-none  focus:text-[#AC3B61] transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('home')} active={route().current('home')}>
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('finding-Job.index')} active={route().current('finding-Job.index')}>
                            Jobs
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('home')} active={route().current('home')}>
                            Employees
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('help_center')} active={route().current('help_center')}>
                            Help Center
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('login')} active={route().current('login')}>
                            Login
                        </ResponsiveNavLink>

                        <ResponsiveNavLink href={route('register')} active={route().current('register')}>
                            Register
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>

            <div className='text-center'>
                <p className='bg-[#123C69] text-white p-10'>&copy;Copyright All Rights Reserved.</p>
            </div>
        </div>
    );
}
