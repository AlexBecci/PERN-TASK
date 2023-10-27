import React from "react";
function Card({ title, description, icon }) {
  return (
    <div class="w-full h-full border-2 border-slate-200 shadow-sm shadow-slate-800 rounded-lg p-5 ">
      <div class="flex items-center gap-x-4 mb-3">
        <div class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 border-slate-50 bg-slate-900  ">
          {icon}
        </div>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      <p class="text-gray-100 ">{description} </p>
    </div>
  );
}

export default Card;
