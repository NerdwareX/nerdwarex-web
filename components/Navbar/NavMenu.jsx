import React from "react";
import Link from "next/link";
import { BsChevronDown, BsPersonBadgeFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { useUserStore } from "../store/store";

const dropdowndata = [
  {
    item: "Ui/ ux design",
  },
  {
    item: "Web design",
  },
  {
    item: "Programming",
  },
  {
    item: "Data analytics",
  },
  {
    item: "Data science",
  },
];

export default function NavMenu() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useUserStore((state) => state);
  return (
    <nav className="flex items-center justify-around py-4 bg-gradient-to-tr from-[#000074] to-[#000074d5] backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <div
          className="w-[5rem] h-10 bg-cover bg-center object-cover "
          style={{
            backgroundImage: `url("/assets/images/logo.svg")`,
          }}
        ></div>
        <h3 className="uppercase font-semibold text-white text-3xl">
          Nerdwarex
        </h3>
      </div>

      <div className="group inline-block">
        <button className="text-white bg-transparent flex items-center gap-1 mt-2 outline-none focus:outline-none border-none">
          <span className="font-extralight font-[Ubuntu]">Courses</span>
          <span className="mt-[1.3px]">
            <BsChevronDown className="w-3 h-3 text-white" />
          </span>
        </button>
        <ul className="bg-white border-none z-50 w-[14rem] shadow-md py-2 rounded-sm transform scale-0 group-hover:scale-100 absolute transition-all duration-150 ease-in-out origin-top min-w-32">
          {dropdowndata.map((items, itemIndex) => {
            return (
              <li
                key={itemIndex}
                className="py-3 px-3 hover:bg-blue-800 hover:text-white cursor-pointer"
              >
                <Link href="#" passHref>
                  <span>{items.item}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative mt-1">
        <form>
          <button className="absolute top-0 left-0">
            <BsSearch className="text-slate-100 mt-2 ml-2" />
          </button>
          <input
            className="bg-transparent border border-cyan-500 focus:outline-none text-slate-100 rounded-2xl py-1 px-10"
            autoComplete="off"
            type="text"
            name="search"
            id="search"
            placeholder="Search Courses"
          />
        </form>
      </div>

      <div className="flex gap-6 text-white mt-2 font-extralight ">
        <span>
          <Link
            href="#"
            className="hover:border-b-2 border-cyan-500 transition-all ease-in-out duration-150 rounded-sm"
            passHref
          >
            Instructor
          </Link>
        </span>
        <span>
          <Link
            href="#"
            className="hover:border-b-2 border-cyan-500 transition-all ease-in-out duration-150 rounded-sm"
            passHref
          >
            Contact
          </Link>
        </span>
      </div>

      <div className="mt-3">
        <Link href="#" passHref>
          <BsCart className="text-cyan-500 w-6 h-6" />
        </Link>
      </div>

      <div>
        {isUserLoggedIn ? (
          <>
            <div className="flex gap-12 mt-5 ">
              <div>
                <Link href="#" passHref>
                  <BsHeart className="w-6 h-6 text-cyan-500" />
                </Link>
              </div>
              <div className="-mt-1">
                {" "}
                <Link href="#" passHref>
                  <BsPersonCircle className="w-7 h-7 text-cyan-500 " />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-3">
              <Link href="#" passHref>
                <span className="bg-gradient-to-tr from-cyan-500 to-indigo-500 py-2 px-3 rounded-lg text-slate-100 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-500 transition-all ease-in-out duration-[5s]">
                  Connect wallet
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
