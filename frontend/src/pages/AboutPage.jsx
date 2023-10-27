import alexImg from "../img/alex.png";
import Card from "../components/about/Card";

function AboutPage() {
  return (
    <section className="text-gray-200 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text- sm:text-lg text-sky-500 tracking-widest font-medium title-font mb-1">
            Hola, soy Alex
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-zinc-100">
            Un desarrollador junior apasionado por la tecnología y las
            soluciones digitales
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A pesar de estar comenzando mi viaje en el mundo IT, he tenido la
            oportunidad de aprender y trabajar con diversas tecnologías y
            herramientas que me han permitido comprender la versatilidad y el
            potencial del desarrollo software. Mi curiosidad insaciable y mi deseo de
            aprender constantemente me motivan a enfrentar nuevos desafíos y
            mejorar mis habilidades cada día. Mi objetivo es crear soluciones
            funcionales y estéticamente agradables, que no solo cumplan con las
            expectativas, sino que las superen. Si buscas a alguien
            comprometido, proactivo y dispuesto a sumergirse de lleno en
            cualquier proyecto, ¡aquí estoy!
          </p>
          <br />
          <br />
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-sky-500">
          No dudes en conectarte conmigo
          </h2>
        </div>
        <div className="flex flex-wrap">
          <Card title={"Linkedin"}description={"Conectemos en las redes! Sígueme y mantente al día con mis últimos proyectos, aprendizajes y aventuras en el mundo de la tecnología."} link={"https://www.linkedin.com/in/alex-becci-82551a22b/"} />
          <Card title={"Twitter"}description={"Para más contenido, trucos y consejos sobre desarrollo, ¡sígueme en mis redes! Juntos exploramos, aprendemos y crecemos en este emocionante mundo IT."} link={"https://twitter.com/besisikun"} />
          <Card title={"Github"}description={"No te pierdas las actualizaciones, tutoriales y detrás de escena de mis proyectos. ¡Sígueme en GITHUB y seamos parte de esta emocionante travesía tecnológica!"} link={"https://github.com/AlexBecci"} />
          <Card title={"Instagram"}description={"Te interesa el desarrollo de software y la tecnología? ¡Yo también! Vamos a conectarnos en redes sociales y compartir nuestro entusiasmo."} link={"https://www.instagram.com/becci.ale/"} />
          
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
}

export default AboutPage;
