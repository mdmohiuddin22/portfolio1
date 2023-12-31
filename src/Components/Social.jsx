import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { MdMailOutline } from "react-icons/md";
const Social = () => {
  return (
    <section className="fixed xl:bottom-40 xl:left-4 2xl:bottom-80 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
      <a
        href="https://www.linkedin.com/in/mdmohiuddinmmn"
        target="_blank"
        className="rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center" rel="noreferrer"
      >
        <Tooltip content="Connect On Linkedin" placement="right">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            className="p-2"
          />
        </Tooltip>
      </a>
      <a
        href="https://github.com/mdmohiuddin22"
        target="_blank"
        className="rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center" rel="noreferrer"
      >
        <Tooltip content="Connect On Github" placement="right">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className="p-2"
          />
        </Tooltip>
      </a>
      <a
        href="https://twitter.com/mdmohiuddinmmn"
        target="_blank"
        className="rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center" rel="noreferrer"
      >
        <Tooltip content="Follow On Twitter" placement="right">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
            className="p-2"
          />
        </Tooltip>
      </a>
      <a
        href="mailto:mdmohiuddinmmn@gmail.com"
        target="_blank"
        className="rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center" rel="noreferrer"
      >
        <Tooltip content="Mail Us" placement="right">
          <span>
            <MdMailOutline className="p-2 text-5xl text-red-800" />
          </span>
        </Tooltip>
      </a>
    </section>
  );
};

export default Social;
