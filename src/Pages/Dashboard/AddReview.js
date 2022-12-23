import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [ratingsError, setRatingsError] = useState("");
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    const ratings = data.ratings;
    if (ratings < 1 || 5 < ratings) {
      setRatingsError("Give Rating number Between 1 to 5");
    } else {
      setRatingsError("");
      const ratingsInfo = {
        name: user.displayName,
        ratings: data.ratings,
        description: data.description,
      };

      fetch("https://tools-artisan-server-side-9wl8.onrender.com/ratings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(ratingsInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Review updated successfully");
          reset();
        });
    }
  };
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-4xl text-left font-bold text-primary ">
          Add a review
        </h1>
        <div className="border w-56 h-1 mt-4 bg-amber-700"></div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Review Form</h2>
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
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input
                {...register("ratings", {
                  required: {
                    value: true,
                    message: "Ratings is required",
                  },
                })}
                type="text"
                placeholder="Your Ratings"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.ratings?.type === "required" && (
                  <p>{errors.ratings.message}</p>
                )}
                {ratingsError}
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
                placeholder="Your Description"
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
              value="Add a review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
