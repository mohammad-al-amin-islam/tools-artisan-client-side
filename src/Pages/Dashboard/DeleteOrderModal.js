import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deleteItem, setDeleteItem, setReload }) => {


    const { _id, toolsName } = deleteItem;
    const handleDeleteBtn = () => {
        fetch(`https://dry-headland-80440.herokuapp.com/orders/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${toolsName} delteted successfully`);

                    setDeleteItem(null);
                    setReload(false);
                }

            })
    }

    return (
        <div>

            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Want to delete {deleteItem.toolsName}{ }?</h3>
                    <p class="py-4">Once you delete.It will remove this item permanently</p>
                    <div class="modal-action">
                        <label onClick={() => handleDeleteBtn()} class="btn btn-xs">Delete</label>
                        <label for="my-modal" class="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;