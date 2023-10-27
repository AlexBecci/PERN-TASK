import React from 'react'
import { Link } from "react-router-dom";

function Card({title,description,link}) {
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-100 font-medium title-font mb-2">{title}</h2>
        <p className="leading-relaxed text-base mb-4">{description}</p>
        <Link to={link} className="text-sky-300 inline-flex items-center">{link}
        </Link>
      </div>
  )
}

export default Card