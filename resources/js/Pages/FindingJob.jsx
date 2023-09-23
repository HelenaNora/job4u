import React from 'react';
import Nav from '@/Layouts/Nav';
import Job from '@/Components/Job';
import { Head } from '@inertiajs/react';
export default function FindingJob({auth,jobs}) {
    return (
        <Nav>
            <div className="mt-6  grid md:grid-cols-3 gap-4 sm:grid-cols-1  shadow-sm rounded-lg divide-y">
                <Head title="Job" />
                {jobs.map(job =>
                    <Job key={job.id} job={job}/>
                )}
            </div>
        </Nav>
    )
}
