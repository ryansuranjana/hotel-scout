"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidHome, BiLogoGithub } from "react-icons/bi";

const HeaderHistory = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "py-5 px-10 flex justify-between fixed z-10 top-0 right-0 left-0 ease-out duration-1000",
        isScrolled ? `bg-white/20` : ""
      )}
    >
      <div className="text-white text-center">
        <h1 className="text-white text-2xl font-bold drop-shadow-2xl">
          Hotel <span className="text-green-300">Scout</span>
        </h1>
        <p className="text-xs">Resort & Hotel</p>
      </div>
      <div className="flex gap-5">
        <a href="https://github.com/ryansuranjana/hotel-scout" target="_blank">
          <BiLogoGithub
            size={35}
            color="white"
            className="drop-shadow-2xl hover:scale-110 ease-in-out duration-100"
          />
        </a>
        <Link href="/">
          <BiSolidHome
            size={35}
            color="white"
            className="drop-shadow-2xl hover:scale-110 ease-in-out duration-100 cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderHistory;
