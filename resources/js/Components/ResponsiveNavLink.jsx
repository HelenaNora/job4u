import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-400 text-[#BAB2B5]  focus:text-[#AC3B61] focus:bg-[#AC3B61] focus:border-[#AC3B61]'
                    : 'border-transparent text-[#123C69] hover:text-[#AC3B61] hover:bg-[#EDC7B7] hover:border-[#123C69] focus:text-[#AC3B61]  '
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
