import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteToolModal from './DeleteToolModal';

const ManageProduct = () => {

    const [deleteTools, setDeleteTools] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://dry-headland-80440.herokuapp.com/tools').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl'>Manage Total Products:{tools.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {tools.map((tool, index) => <tr key={tool._id}>
                            <th>{index + 1}</th>
                            <td>{tool.name}</td>
                            <td>{tool.price}</td>
                            <td><label onClick={() => setDeleteTools(tool)} for="my-modal-2" class="btn btn-xs modal-button">Delete</label></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            {
                deleteTools && <DeleteToolModal
                    deleteTools={deleteTools}
                    setDeleteTools={setDeleteTools}
                    refetch={refetch}
                ></DeleteToolModal>
            }
        </div>
    );
};

export default ManageProduct;