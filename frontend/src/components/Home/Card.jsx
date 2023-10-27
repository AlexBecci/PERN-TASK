import React from "react";
function Card({ title, description, icon }) {
  return (
    <div className="w-full h-full border-2 border-slate-200 shadow-sm shadow-slate-800 rounded-lg p-5 ">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 border-slate-50 bg-slate-900  ">
          {icon}
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-gray-100 ">{description} </p>
    </div>
  );
}

export default Card;
