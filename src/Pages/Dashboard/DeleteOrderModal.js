import React from "react";
import { toast } from "react-toastify";

const DeleteOrderModal = ({ deleteItem, setDeleteItem, setReload }) => {
  const { _id, toolsName } = deleteItem;
  const handleDeleteBtn = () => {
    fetch(`https://tools-artisan-server-side-9wl8.onrender.com/orders/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${toolsName} deleted successfully`);

          setDeleteItem(null);
          setReload(false);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Want to delete {deleteItem.toolsName}
            {}?
          </h3>
          <p className="py-4">
            Once you delete.It will remove this item permanently
          </p>
          <div className="modal-action">
            <label onClick={() => handleDeleteBtn()} className="btn btn-xs">
              Delete
            </label>
            <label htmlFor="my-modal" className="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
