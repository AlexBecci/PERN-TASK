import React from "react";
import { Link } from "react-router-dom";

function NoTaskFound() {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/polygon.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 ">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-100 text-4xl md:text-5xl lg:text-6xl ">
            No tienes{" "}
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-sky-600 text-transparent">
              tareas
            </span>
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-300 ">
            Para comenzar, sientete libre de crar la que gustes
          </p>
        </div>

        <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <Link to={"/tasks/new"}
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-sky-600 hover:from-sky-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 "
            href="#"
          >
           Crear
            <svg
              className="w-3 h-3"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoTaskFound;
