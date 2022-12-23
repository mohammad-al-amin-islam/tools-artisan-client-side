import React from "react";
import { toast } from "react-toastify";

const DeleteToolModal = ({ deleteTools, setDeleteTools, refetch }) => {
  const { _id, name } = deleteTools;
  const handleDeleteBtn = () => {
    fetch(`https://tools-artisan-server-side-9wl8.onrender.com/tool/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} deleted successfully`);
          setDeleteTools(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Want to delete {name}?</h3>
          <p className="py-4">
            Once you delete.It will remove this item permanently
          </p>
          <div className="modal-action">
            <label onClick={() => handleDeleteBtn()} className="btn btn-xs">
              Delete
            </label>
            <label htmlFor="my-modal-2" className="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteToolModal;
