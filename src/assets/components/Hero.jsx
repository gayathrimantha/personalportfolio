import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "./canvas";
import { browserName, browserVersion, isMobile } from "react-device-detect";
import { computerimage } from ".";

const Hero = () => {
  console.log(`${browserName} ${browserVersion}`);
  console.log(isMobile ? "Mobile" : "Desktop");

  const userAgent = window.navigator.userAgent.toLowerCase();

  // Check if the user agent contains "instagram" (for Instagram)
  const isInstagram = userAgent.includes("instagram");

  return (
    <section className="relative w-full h-screen mx-auto">
      {(isMobile && browserName === "Chrome") || isInstagram ? (
        <>
          <div style={{ marginTop: 70 }}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm<span className="text-[#915eff]"> Gayathri</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I Develop Web and Mobile Applications.
            </p>
          </div>
          <div
            style={{
              paddingTop: 100,
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              height: 400,
            }}
          >
            <img src={computerimage} alt="Computer Image" />
          </div>
        </>
      ) : (
        <>
          <div
            className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm<span className="text-[#915eff]"> Gayathri</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I Develop Web and Mobile Applications.
              </p>
            </div>
          </div>

          <ComputersCanvas />
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
