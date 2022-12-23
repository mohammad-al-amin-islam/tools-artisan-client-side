import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddTools = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://tools-artisan-server-side-9wl8.onrender.com/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Tools added successfully");
        reset();
      });
  };
  return (
    <div>
      <div>
        <div className="pt-10 text-center">
          <h1 className="text-4xl font-bold text-primary ">Add a Tools</h1>
          <div className="border w-56 h-1 mt-4 bg-amber-700 mx-auto"></div>
        </div>
        <div className="flex h-full justify-center">
          <div className="card w-96 lg:w-1/2 bg-base-100 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">Tools Information</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Tools Name"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <p>{errors.name.message}</p>
                    )}
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    {...register("price", {
                      required: {
                        value: true,
                        message: "Price is required",
                      },
                    })}
                    type="text"
                    placeholder="Tools Price"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.price?.type === "required" && (
                      <p>{errors.price.message}</p>
                    )}
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Image Link</span>
                  </label>
                  <input
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image link is required",
                      },
                    })}
                    type="text"
                    placeholder="Tools Image link"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.image?.type === "required" && (
                      <p>{errors.image.message}</p>
                    )}
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">mininum order</span>
                  </label>
                  <input
                    {...register("minOrder", {
                      required: {
                        value: true,
                        message: "min Order is required",
                      },
                    })}
                    type="text"
                    placeholder="Minimum order"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.minOrder?.type === "required" && (
                      <p>{errors.minOrder.message}</p>
                    )}
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    {...register("availableQuantity", {
                      required: {
                        value: true,
                        message: "available Quantity is required",
                      },
                    })}
                    type="text"
                    placeholder="Available order Quantity"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.availableQuantity?.type === "required" && (
                      <p>{errors.availableQuantity.message}</p>
                    )}
                  </label>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Description is required",
                      },
                    })}
                    type="text"
                    placeholder="Tools Description"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.description?.type === "required" && (
                      <p>{errors.description.message}</p>
                    )}
                  </label>
                </div>
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Add Tools"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTools;
