import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const { id } = useParams();
    return (
        <div>
            this is time line page
        </div>
    );
};

export default page;