"use client";
import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const transition = { duration: 2, type: "spring" };
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dt = new Date().toLocaleString();
    setInputs({ ...inputs, date: dt });
  };
  return (
    <div>
      <div className="contact" id="contact">
        <div className="title">
          {/* yahan change hy darkmode ka */}
          <span>Contact</span>
          <span>me </span>
        </div>

        <div className="cbody">
          {/* left side copy and paste from work section */}
          <motion.div
            className="c-left"
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={transition}
          >
            {/* darkMode */}
            <p>Tell me about your project and what could i do for you</p>
          </motion.div>
          {/* right side form */}
          <motion.div
            className="c-right"
            // initial={{ opacity: 0, }}
            // whileInView={{ opacity: 1 }}
            // transition={transition}
          >
            <form className="dark:text-white">
              <input
                type="text"
                name="name"
                className="user"
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                className="user"
                placeholder="Email"
                value={inputs.email}
                onChange={handleChange}
              />

              <input
                type="number"
                name="phone"
                className="user"
                placeholder="phone number"
                value={inputs.phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                className="user"
                placeholder="Message"
                rows={5}
                value={inputs.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="fbut border-2 bg-orange"
                onClick={handleSubmit}
              >
                SEND
              </button>
              <span> Thanks for Contacting me</span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
