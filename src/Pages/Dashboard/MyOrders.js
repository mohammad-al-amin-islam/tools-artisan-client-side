import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import DeleteOrderModal from "./DeleteOrderModal";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([]);
  const [deleteItem, setDeleteItem] = useState(null);
  const [reload, setReload] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://tools-artisan-server-side-production.up.railway.app/orders?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
          setReload(!reload);
        });
    }
  }, [navigate, user, reload]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tools</th>
              <th>Payment</th>
              <th>Delete</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow
                order={order}
                key={order._id}
                index={index}
                setDeleteItem={setDeleteItem}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteItem && (
        <DeleteOrderModal
          setDeleteItem={setDeleteItem}
          deleteItem={deleteItem}
          setReload={setReload}
        ></DeleteOrderModal>
      )}
    </div>
  );
};

export default MyOrders;
