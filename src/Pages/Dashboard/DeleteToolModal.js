import React from 'react';
import { toast } from 'react-toastify';

const DeleteToolModal = ({ deleteTools, setDeleteTools, refetch }) => {

    const { _id, name } = deleteTools;
    const handleDeleteBtn = () => {
        fetch(`http://localhost:5000/tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} delteted successfully`);
                    setDeleteTools(null);
                    refetch();
                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Want to delete {name}?</h3>
                    <p class="py-4">Once you delete.It will remove this item permanently</p>
                    <div class="modal-action">
                        <label onClick={() => handleDeleteBtn()} class="btn btn-xs">Delete</label>
                        <label for="my-modal-2" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteToolModal;