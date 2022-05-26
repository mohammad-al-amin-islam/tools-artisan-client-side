import React from 'react';
import { toast } from 'react-toastify';

const DeleteUnpaidOrderModal = ({ unpaidItem, setUnpaidItem, refetch }) => {
    const { _id, toolsName } = unpaidItem;
    const handleDeleteBtn = id => {
        fetch(`https://dry-headland-80440.herokuapp.com/order/unpaid/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${toolsName} deleted successfully`);
                    setUnpaidItem(null);
                    refetch();
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Want to delete {toolsName}?</h3>
                    <p className="py-4">This is an unpaid order. Confirm deletation?Also you can cancel deletation</p>
                    <div className="modal-action">
                        <label onClick={() => handleDeleteBtn(_id)} className="btn btn-xs">Delete</label>
                        <label htmlFor="my-modal-3" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUnpaidOrderModal;