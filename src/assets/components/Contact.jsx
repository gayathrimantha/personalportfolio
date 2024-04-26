import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { EarthCanvas } from "./canvas";
import { StarWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

//template_uffjlzm
//service_9ocemyd
//tRuXq5LdG2qSFuWKU

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9ocemyd",
        "template_uffjlzm",
        {
          from_name: form.name,
          to_name: "Gayathri Mantha",
          from_email: form.email,
          to_email: "gayathrimantha16@gmail.com",
          message: form.message,
        },
        "tRuXq5LdG2qSFuWKU"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:gayathrimantha16@gmail.com";
            }}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Send Email
          </button>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <div className="mt-12 flex flex-row gap-12 self-center ">
        <a
          href="https://www.instagram.com/gayathri_mantha"
          target="_blank"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/gayathri-mantha-064b50179/"
          target="_blank"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/gayathrimantha"
          target="_blank"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </>
  );
};

export default StarWrapper(Contact, "contact");
