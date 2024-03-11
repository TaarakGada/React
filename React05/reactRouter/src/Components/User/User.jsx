import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { id } = useParams();
    return (
        <div className=" text-center font-semibold  p-3 bg-yellow-100">
            User: {id}
        </div>
    );
}

export default User;
