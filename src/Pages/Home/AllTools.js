import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Tools from './Tools';

const AllTools = () => {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/tools', {
            method: 'GET',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     signOut(auth);
                //     localStorage.removeItem('accessToken');
                //     navigate('/');
                // }
                return res.json();
            })
            .then(data => setTools(data))
    }, [])
    return (
        <div className='bg-slate-100'>
            <div className='p-10 '>
                <div className='pt-10'>
                    <h1 className="text-4xl text-center font-bold text-primary ">Available Tools:{tools.length}</h1>
                    <div className='border w-56 h-1 mx-auto mt-4 bg-amber-700'></div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-9 '>
                    {
                        tools.map(tool => <Tools
                            key={tool._id}
                            tool={tool}
                        ></Tools>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTools;