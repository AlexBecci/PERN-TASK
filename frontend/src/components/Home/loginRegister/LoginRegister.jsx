import React from "react";
import Card from "./Card";
import {FiUserCheck} from "react-icons/fi"
import {AiOutlineUserAdd} from "react-icons/ai"


function LoginRegister() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 justify-center items-center gap-2">
      <Card link={'/register'} title={"¡Únete a nuestra comunidad!"} description={"Regístrate y descubre todas las características que tenemos para ofrecerte."} button={"Registra una cuenta gratuita hoy mismo y descubre todo lo que hemos preparado para ti."} icon={<AiOutlineUserAdd size={16}/>}/>
    
        <Card link={'/login'} title={"Inicia sesión y continúa donde lo dejaste."} description={"Si ya eres parte de nuestra comunidad, simplemente inicia sesión y disfruta de la experiencia al máximo."} button={"Button"} icon={<FiUserCheck size={16}/>}/>

      </div>
    </div>
  );
}

export default LoginRegister;
