import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const [tool, setTool] = useState("");
  const [error, setError] = useState("");
  const [active, setActive] = useState(null);
  const { id } = useParams();
  const { _id, name, image, description, price, minOrder, availableQuantity } =
    tool;

  const [user, loading] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`https://tools-artisan-server-side-9wl8.onrender.com/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    const number = data.number;
    const address = data.address;
    const quantity = data.orderQuantity;

    const purchaseInfo = {
      customerName: user?.displayName,
      email: user?.email,
      toolsName: name,
      address: address,
      number: number,
      quantity: quantity,
      price: price,
    };
    fetch("https://tools-artisan-server-side-9wl8.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(purchaseInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order confirmed successfully");
        reset();
      });
  };

  return (
    <div>
      <div className="pt-10">
        <h1 className="text-4xl text-center font-bold text-primary ">
          Purchase Here
        </h1>
        <div className="border w-56 h-1 mx-auto mt-4 bg-amber-700"></div>
      </div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" border-2 p-4 rounded-lg">
            <h1 className="text-2xl font-bold mr-10 text-center">{name}</h1>
            <div className="w-72 lg:w-96 rounded ">
              <img src={image} alt={name} />
            </div>
            <div className="">
              <p>
                <span className="font-bold">Description:</span> {description}
              </p>
              <p>
                <span className="font-bold">Prices:</span> {price}
              </p>
              <p>
                <span className="font-bold">Minimum Order:</span> {minOrder}
              </p>
              <p>
                <span className="font-bold">Available Quantity:</span>{" "}
                {availableQuantity}
              </p>
            </div>
          </div>
          <div className="card flex w-full lg:w-96  shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    disabled
                    value={user?.displayName}
                    {...register("name")}
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                  <label className="label"></label>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    disabled
                    value={user.email}
                    {...register("email")}
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                  />
                  <label className="label"></label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    {...register("number", {
                      required: {
                        value: true,
                        message: "Number is required",
                      },
                    })}
                    type="text"
                    placeholder="Your Number"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.number?.type === "required" && (
                      <p>{errors.number.message}</p>
                    )}
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                    type="text"
                    placeholder="Your Address"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.address?.type === "required" && (
                      <p>{errors.address.message}</p>
                    )}
                  </label>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Order quantity</span>
                  </label>
                  <input
                    {...register("orderQuantity", {
                      onChange: (e) => {
                        const quantity = e.target.value;
                        if (quantity < minOrder) {
                          setError("Less than minimum order");
                          setActive(true);
                        } else if (quantity > availableQuantity) {
                          setError("More than available quantity");
                          setActive(true);
                        } else {
                          setError("");
                          setActive(false);
                        }
                      },
                    })}
                    type="number"
                    placeholder="Your order quantity"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.orderQuantity?.type === "required" && (
                      <p>{errors.orderQuantity.message}</p>
                    )}
                    {error}
                  </label>
                </div>
                <input
                  disabled={active}
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Purchase"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
