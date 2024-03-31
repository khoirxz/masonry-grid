"use client";
import Image from "next/legacy/image";
import Mansory, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";

import { FiMail, FiInstagram } from "react-icons/fi";

import { data } from "../data";

const hoverVariants = {
  hover: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
};

const Home = () => {
  return (
    <main className={`flex flex-col justify-center gap-10`}>
      <div className="text-center w-11/12 sm:w-1/2 xl:w-1/3 mt-11 flex flex-col gap-3 mx-auto">
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="John Doe"
            className="mx-auto rounded-full"
            layout="fill"
            sizes="(100vw, 100vh)"
            objectFit="cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div>
          <h1 className="text-xl font-semibold">Ramadhan Setya Miliarinda</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            explicabo magnam provident quaerat animi.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <a
            href="mailto:qQYRd@example.com"
            target="_blank"
            className="rounded-full p-2 hover:bg-gray-400/20"
            title="Email"
          >
            <FiMail className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/ramadhansetyamiliarinda/"
            target="_blank"
            className="rounded-full p-2 hover:bg-gray-400/20"
            title="Instagram"
          >
            <FiInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Mansory>
            {data.map((item) => {
              return (
                <motion.div key={item.id} className="relative cursor-pointer">
                  <motion.div
                    className="absolute top-0 left-0 z-10 h-full w-full"
                    variants={hoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <div className="absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-t from-black to-transparent" />
                    <motion.div
                      whileHover={"hover"}
                      initial={"initial"}
                      className="absolute z-20 bottom-0 p-5"
                    >
                      <h1 className="text-xl font-semibold">{item.title}</h1>
                      <p className="text-sm">{item.description}</p>
                    </motion.div>
                  </motion.div>

                  <Image
                    priority
                    src={item.dataResource}
                    alt={item.title}
                    width={item.type === "landscape" ? 500 : 400}
                    sizes="100vw"
                    objectFit="cover"
                    height={item.type === "landscape" ? 400 : 500}
                  />
                </motion.div>
              );
            })}
          </Mansory>
        </ResponsiveMasonry>
      </div>
    </main>
  );
};

export default Home;
