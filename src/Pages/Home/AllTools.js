import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import Tools from "./Tools";

const AllTools = () => {
  const [tools, setTools] = useState([]);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    fetch("https://tools-artisan-server-side-9wl8.onrender.com/tools", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setReload(!reload);
      });
  }, [reload]);
  if (reload) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-slate-100">
      <div className="p-10 ">
        <div className="pt-10">
          <h1 className="text-4xl text-center font-bold text-primary ">
            Available Tools:{tools.length}
          </h1>
          <div className="border w-56 h-1 mx-auto mt-4 bg-amber-700"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 justify-items-center">
          {tools.map((tool) => (
            <Tools key={tool._id} tool={tool}></Tools>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTools;
