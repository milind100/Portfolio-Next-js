import React from "react";
import "./Footer.css";

import { socialLinks } from "@/constants/socialLinks";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="footer">
      <img src="/img/wave.png" alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="social-icon">
          {socialLinks?.map(({ src, link }) => {
            return (
              <Link href={link} key={src}>
                <Image
                  src={src}
                  alt="Facebook Logo"
                  height={52}
                  width={52}
                ></Image>
              </Link>
            );
          })}
        </div>
        <span>@milindPatil</span>
      </div>
    </div>
  );
};

export default Footer;
