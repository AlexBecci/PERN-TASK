import React from 'react'
import { Link } from "react-router-dom";


function Card({title,description,icon, button, link}) {
  return (
    <Link to={link} className="group flex flex-col justify-center items-center  rounded-xl p-4 md:p-7 hover:scale-105 duration-500" >
      <div className="flex justify-center items-center w-12 h-12 bg-slate-900  rounded-full  border-2 border-slate-50">
        {icon}
      </div>
      <div className="mt-5">
        <h3 className="group-hover:text-gray-100 text-lg font-semibold text-gray-300  ">{title}</h3>
        <p className="mt-1 text-gray-300">{description}</p>
        <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-gray-400 group-hover:text-blue-200  decoration-2  font-medium">
          {button}
         
        </span>
      </div>
    </Link>
  )
}

export default Card