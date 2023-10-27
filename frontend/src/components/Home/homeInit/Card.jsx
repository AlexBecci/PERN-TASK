import React from 'react'

function Card({title,description,icon}) {
  return (
    <div className="flex">
        <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border    shadow-sm mx-auto bg-slate-900 border-gray-700 text-gray-200">
          {icon}
        </span>
        <div className="ml-5 sm:ml-8">
          <h3 className="text-base sm:text-lg font-semibold  text-gray-200">
            {title}
          </h3>
          <p className="mt-1 text-gray-400">
          {description}
          </p>
        </div>
      </div>
  )
}

export default Card