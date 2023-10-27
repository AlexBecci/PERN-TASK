import React from "react";
import Card from "./Card";
import {BiTask,BiArchive  } from "react-icons/bi";

export default function HomeInit() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4 ">
          <h2 className="text-3xl text-zinc-100 font-bold lg:text-4xl ">
          Bienvenido a <span className="text-blue-500">PrioList</span> 
          </h2>
          <p className="mt-3 text-zinc-100 ">
          Nuestra herramienta te ayuda a mantener un registro claro de tus tareas pendientes, permitiéndote enfocarte en lo que realmente importa.
          </p>
          <p className="mt-5  items-center gap-x-2 font-medium text-blue-200 ">
          Diseñado para ti
            
          </p>
          <p className="mt-5  items-center gap-x-2 font-medium text-blue-200 ">
          Prioriza tus tareas según su importancia y urgencia.
            
          </p>
          <p className="mt-5  items-center gap-x-2 font-medium text-blue-200 ">
          Crea tu primera tarea
            
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          <Card title={'Gestiona tus tareas eficientemente'} description={"Nos esforzamos día a día para ofrecerte una experiencia única, combinando innovación y pasión en cada detalle de nuestro servicio"} icon={<BiTask size={20}/>}/>
          <Card title={'Toma el control de tu día a día'} description={"Entendemos los desafíos de la vida moderna, y es por eso que nuestra solución está diseñada para ser intuitiva, eficiente y, sobre todo, útil en tu día a día."} icon={<BiArchive size={20}/>}/>
        </div>
      </div>
    </div>
  );
}
