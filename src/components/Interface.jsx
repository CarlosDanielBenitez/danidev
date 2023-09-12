import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic p-3">Benitez Carlos Daniel</span>
      </h1>
      <br />
      <motion.p
        className="bg-white text-lg text-gray-600 mt-4 p-3"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm  Frontend Developer

        with experience in
        <br />

        JavaScript, React, Vite, HTML5, CSS3 and related frameworks.
        <br />
        I create dynamic and attractive web interfaces.

      </motion.p>


      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16 `}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        <a href="https://wa.me/1127390494">
          Contact me
        </a>
      </motion.button>

    </Section>
  );
};

const skills = [
  {
    title: "Javascript Language",
    level: 90,
  },
  {
    title: "React JS / Vite JS",
    level: 90,
  },
  {
    title: "HTML5 / CSS3 / SASS",
    level: 90,
  },
  {
    title: "Typescript / Bootstrap ",
    level: 60,
  },
  {
    title: "Node JS",
    level: 40,
  },
  {
    title: "3D Modeling /  FramerMotion",
    level: 40,
  },
];
const languages = [
  {
    title: "English",
    level: 80,
  },
  {
    title: "Portuguese",
    level: 50,
  },
  {
    title: "Spanish",
    level: 100,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <>
      <div className="socialContainer mt-30">

        <div>
          <a target="blanck" href="https://wa.me/1127390494">

            <img src="https://cdn.pixabay.com/photo/2016/08/27/03/07/whatsapp-1623579_1280.png" alt="whatsapp" />

          </a>
        </div>

        <div>
          <a target="blanck" rel="stylesheet" href="https://github.com/CarlosDanielBenitez">

            <img src="https://cdn.pixabay.com/photo/2013/07/12/19/25/github-154769_1280.png" alt="github">
            </img>
          </a>
        </div>

        <div>
          <a target="blanck" href="https://www.linkedin.com/in/danidev33/">

            <img src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png" alt="linkedin" />
          </a>
        </div>



      </div >

      <motion.div
        whileHover={{ scale: 1.2, rotate: -5 }}
        whileTap={{
          scale: 0.8,
          rotate: 5,
          borderRadius: "100%"
        }}
      >
        <h2 className="text-2xl font-bold m-1">My Certificates</h2>
      </motion.div>
      <div className="titlesContainer h-auto pb-4 ml-2 mr-2">
        <a target="blanck" href="https://www.coderhouse.com/certificados/642f12aa42aa7300021fda55?lang=es">
          <img src="https://img.freepik.com/vector-gratis/programadores-que-utilizan-lenguaje-programacion-javascript-computadora-gente-pequena-lenguaje-javascript-motor-javascript-concepto-desarrollo-web-js-ilustracion-aislada-violeta-vibrante-brillante_335657-986.jpg" alt="JavaScript" />
        </a>
        <a target="blanck" href="https://www.coderhouse.com/certificados/64d577f9ba5b7b6419106f13?lang=es">
          <img src="https://img.freepik.com/vector-gratis/concepto-desarrollo-frontend-mejora-diseno-interfaz-sitio-web-programacion-pagina-web-codificacion-prueba-profesion-ti-ilustracion-vector-plano-aislado_613284-2357.jpg?w=740&t=st=1694522760~exp=1694523360~hmac=9c66803a8f0be3879e501dd4b1bdcd36db64a3a2e7a62d947d199af8c66f132f" alt="React Career" />
        </a>
        <a target="blanck" href="https://www.coderhouse.com/certificados/64d577f9ba5b7b229c106f0f?lang=es">
          <img src="https://img.freepik.com/vector-gratis/reaccionar-ilustracion-concepto-abstracto-aplicacion-movil-nativa-marco-desarrollo-aplicaciones-moviles-nativas-multiplataforma-biblioteca-javascript-interfaz-usuario-sistema-operativo_335657-3350.jpg" alt="React JS" />
        </a>
        <a target="blanck" href="https://www.coderhouse.com/certificados/6331c9564cec60000ee7455b?lang=es">
          <img src="https://img.freepik.com/vector-gratis/desarrollador-java-software-smartphone-codificacion-javascript-aplicacion-escritura-programacion-css-manipulacion-codigo-fuente-html-programa-movil-ilustracion-metafora-concepto-aislado_335657-1153.jpg?w=740&t=st=1694521474~exp=1694522074~hmac=60af77cee7f2ff6595e0938461093147946a3384533f12dc4775640afb6a4b6a" alt="Web Developer" />
        </a>

        {/* <div><img src="" alt="" /></div>
        <div><img src="" alt="" /></div>
        <div><img src="" alt="" /></div> */}
      </div>

    </>

  );
};
