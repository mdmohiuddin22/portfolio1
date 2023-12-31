
import { motion } from "framer-motion";

// import PPic from "../assets/about.webp";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import wavingHand from "../assets/waving-hand.gif";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { SiJavascript, SiReact, SiTailwindcss, SiHtml5 } from "react-icons/si";

const Hero = () => {
  return (
    <div className="py-16 md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0 "
      >
        <div className="flex items-center">
          <img
            src={wavingHand}
            alt="waving hand"
            className="w-10 h-10 mr-2 animate-bounce"
          />
          <p className="text-xl">Hey,</p>
        </div>
        <p className="text-3xl md:text-5xl font-bold relative">
          I'm
          <span className="text-light-blue-500 ml-1 uppercase">
            Md Mohiuddin
          </span>
        </p>
        <p className="text-xl font-semibold relative uppercase">
          MERN Stack Web Developer
        </p>
        <p className="text-lg md:text-xl font-medium relative">
          I'm a Full Stack Developer . I have a passion for web
          development and love to create for web apps.
        </p>

        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6">
          <Link to={"/about"}>
            <Button
              variant="gradient"
              color="light-blue"
              className="flex gap-2 items-center"
            >
              <FaUserTie className="text-lg" />
              About Me
            </Button>
          </Link>
          <Link
            to="https://drive.google.com/file/d/15v5sGx37P07Q-zHo4nrw46zNhd9CySni/view?usp=sharing"
            target="_blank"
          >
            <Button
              variant="gradient"
              color="light-blue"
              className="flex gap-2 items-center"
            >
              <MdOutlineDocumentScanner className="text-white text-lg" />
              Resume
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <img
          src="https://i.ibb.co/pzmw6dz/me.jpg"
          alt="Pankaj Kumar"
          className="w-44 md:w-80 z-10 rounded-full"
        />
        <SiTailwindcss className="absolute -top-4 text-light-blue-400 text-3xl" />
        <SiHtml5 className="absolute -top-4 right-0 text-light-blue-600 text-3xl" />
        <SiReact className="absolute left-5 text-light-blue-600 text-3xl" />
        <SiJavascript className="absolute -right-1 text-amber-700 text-3xl" />
      </motion.div>
    </div>
  );
};

export default Hero;
