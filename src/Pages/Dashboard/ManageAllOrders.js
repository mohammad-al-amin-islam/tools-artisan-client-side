import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllOrderRow from "./AllOrderRow";
import DeleteUnpaidOrderModal from "./DeleteUnpaidOrderModal";

const ManageAllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      "https://tools-artisan-server-side-production.up.railway.app/allorders",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  const [unpaidItem, setUnpaidItem] = useState(null);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl">Manage all order here:{orders.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Bought Product</th>
              <th>Payment Status</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <AllOrderRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
                setUnpaidItem={setUnpaidItem}
              ></AllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {unpaidItem && (
        <DeleteUnpaidOrderModal
          unpaidItem={unpaidItem}
          setUnpaidItem={setUnpaidItem}
          refetch={refetch}
        ></DeleteUnpaidOrderModal>
      )}
    </div>
  );
};

export default ManageAllOrders;
