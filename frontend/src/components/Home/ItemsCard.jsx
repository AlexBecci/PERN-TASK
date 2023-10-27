import React, { useState } from "react";
import Card from "./Card";
import { TbNewSection, TbEditCircle } from "react-icons/tb";
import { RiDeleteBin2Fill } from "react-icons/ri";


export function ItemsCard() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
        <Card
          title={"Crea"}
          description={"Crea las tareas que necesites."}
          icon={<TbNewSection size={28} />}
        />
        <Card
          title={"Edita"}
          description={"Puedes Editar las tareas para modificarlas a tu gusto."}
          icon={<TbEditCircle size={28} />}
        />
        <Card
          title={"Elimina"}
          description={
            "Si no te interesa tener una tarjeta, puedes eliminarla cuando quieras"
          }
          icon={<RiDeleteBin2Fill size={28} />}
        />
      </div>
    </div>
  );
}
