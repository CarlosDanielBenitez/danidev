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
      <div className="socialContainer">

        <div>
          <a href="https://wa.me/1127390494">

            <img src="https://cdn.pixabay.com/photo/2016/08/27/03/07/whatsapp-1623579_1280.png" alt="whatsapp" />

          </a>
        </div>

        <div>
          <a rel="stylesheet" href="https://github.com/CarlosDanielBenitez">

            <img src="https://cdn.pixabay.com/photo/2013/07/12/19/25/github-154769_1280.png" alt="github">
            </img>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/danidev33/">

            <img src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png" alt="linkedin" />
          </a>
        </div>



      </div >
      <div>

        <img src="../../src/img/qr-whatsapp.jpeg" alt="whatsapp" className="p-2 "/>
      </div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: -5 }}
        whileTap={{
          scale: 0.8,
          rotate:5,
          borderRadius: "100%"
        }}
      >
        <h2 className="text-2xl font-bold m-1">My Certificates</h2>
      </motion.div>
      <div className="titlesContainer h-auto pb-4 ml-2 mr-2">
        <div>
          <img src="../../src/img/js.png" alt="" />
        </div>
        <div>
          <img src="../../src/img/react-js-career.png" alt="" />
        </div>
        <div>
          <img src="../../src/img/react-js.png" alt="" />
        </div>
        <div>
          <img src="../../src/img/web-developer.png" alt="" />
        </div>

        {/* <div><img src="" alt="" /></div>
        <div><img src="" alt="" /></div>
        <div><img src="" alt="" /></div> */}
      </div>

    </>

  );
};
