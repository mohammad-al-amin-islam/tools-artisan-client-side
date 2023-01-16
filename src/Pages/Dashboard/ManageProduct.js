import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteToolModal from "./DeleteToolModal";

const ManageProduct = () => {
  const [deleteTools, setDeleteTools] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://tools-artisan-server-side-9wl8.onrender.com/tools").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="ml-2">
      <h1 className="text-2xl">Manage Total Products:{tools.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={tool._id}>
                <th>{index + 1}</th>
                <td>{tool.name}</td>
                <td>{tool.price}</td>
                <td>
                  <label
                    onClick={() => setDeleteTools(tool)}
                    htmlFor="my-modal-2"
                    className="btn btn-xs modal-button"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteTools && (
        <DeleteToolModal
          deleteTools={deleteTools}
          setDeleteTools={setDeleteTools}
          refetch={refetch}
        ></DeleteToolModal>
      )}
    </div>
  );
};

export default ManageProduct;
