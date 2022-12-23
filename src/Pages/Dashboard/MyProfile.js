import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    const profileInfo = {
      email: user.email,
      name: user.displayName,
      education: data.education,
      city: data.city,
      number: data.number,
      profile: data.profile,
    };
    console.log(profileInfo);
    const email = user?.email;
    if (email) {
      fetch(
        `https://tools-artisan-server-side-9wl8.onrender.com/userprofile/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(profileInfo),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success("Profile updated successfully");
          reset();
        });
    }
  };
  return (
    <div className="flex h-auto justify-center my-2">
      <div className="card w-96 lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl text-center text-purple-600">
            My Profile form
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                value={user?.displayName}
                disabled
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
                value={user?.email}
                disabled
                {...register("email")}
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              <label className="label"></label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                {...register("education", {
                  required: {
                    value: true,
                    message: "Education is required",
                  },
                })}
                type="text"
                placeholder="Your Education"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.education?.type === "required" && (
                  <p>{errors.education.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
                type="text"
                placeholder="Your City"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.city?.type === "required" && (
                  <p>{errors.city.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
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
                placeholder="Your number"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.number?.type === "required" && (
                  <p>{errors.number.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Linked in profile link</span>
              </label>
              <input
                {...register("profile", {
                  required: {
                    value: true,
                    message: "Linked in profile link is required",
                  },
                })}
                type="text"
                placeholder="Linked in profile link"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.profile?.type === "required" && (
                  <p>{errors.profile.message}</p>
                )}
              </label>
            </div>

            <input
              className="btn btn-primary w-full"
              type="submit"
              value="add/update infromation"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
