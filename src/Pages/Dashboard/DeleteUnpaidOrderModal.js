import React from 'react';
import { toast } from 'react-toastify';

const DeleteUnpaidOrderModal = ({ unpaidItem, setUnpaidItem, refetch }) => {
    const { _id, toolsName } = unpaidItem;
    const handleDeleteBtn = id => {
        fetch(`http://localhost:5000/order/unpaid/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${toolsName} delteted successfully`);
                    setUnpaidItem(null);
                    refetch();
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Want to delete {toolsName}?</h3>
                    <p class="py-4">This is an unpaid order. Confirm deletation?Also you can cancel deletation</p>
                    <div class="modal-action">
                        <label onClick={() => handleDeleteBtn(_id)} class="btn btn-xs">Delete</label>
                        <label for="my-modal-3" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUnpaidOrderModal;