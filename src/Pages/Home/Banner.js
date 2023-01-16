import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImg from "../../images/banner-img.jpg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div data-aos="zoom-in-up" className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} alt="Banner Images" />
        <div>
          <h1 className="text-6xl font-bold text-info">Mordern Power Tools</h1>
          <p className="py-6 text-xl">
            All hardware equipments and accessories available here
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="btn btn-outline btn-primary"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
