import React, { useState } from "react";
import { useUserStore } from "../store/store";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { Ecoursesdata } from "../mock/ECoursesData";
import { BsStarFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { Fade, Slide, Bounce } from "react-awesome-reveal";

const tabNames = [
  {
    title: "All",
  },
  {
    title: "Business",
  },
  {
    title: "Marketing",
  },
  {
    title: "Development",
  },
  {
    title: "Design",
  },
  {
    title: "CryptoCurrency",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ExclusiveCourses() {
  const [businessCourses, setBusinessCourses] = useState(
    Ecoursesdata.find((data) => {
      data.category == "Business";
    })
  );
  const { isUserLoggedIn, setIsUserLoggedIn } = useUserStore((state) => state);
  return (
    <section>
      <div className="dark:bg-gradient-to-r dark:from-[#000074] dark:to-[#290074] bg-white w-full py-24">
        <div className="container mx-auto">
          <Tab.Group>
            <Tab.List className=" flex justify-between items-center">
              <Slide direction="up">
                <h1 className="text-4xl text-slate-300 font-bold ">
                  Exclusive courses
                </h1>
              </Slide>

              <Slide direction="up">
                <div className="flex gap-6">
                  {tabNames.map((data, dataIndex) => {
                    return (
                      <Tab
                        key={dataIndex}
                        className={({ selected }) =>
                          classNames(
                            "text-slate-300 font-semibold text-sm capitalize",
                            "focus:outline-none ",
                            selected
                              ? "border-b border-cyan-400 outline-none"
                              : "text-slate-500  hover:border-b border-cyan-400 transition-all"
                          )
                        }
                      >
                        {data.title}
                      </Tab>
                    );
                  })}
                </div>
              </Slide>
            </Tab.List>
            <Fade>
              <Tab.Panels className="mt-16">
                <Tab.Panel>
                  <div className="grid grid-cols-4 gap-16">
                    {Ecoursesdata.map((data) => {
                      return (
                        <div
                          key={data.id}
                          className="border border-cyan-500 rounded-lg relative"
                        >
                          <Link href="#" passHref>
                            <div
                              className="w-[98%] mt-1 mx-auto h-[13rem]  rounded-lg bg-cover bg-top object-cover hover:brightness-50 hover:scale-[1.03] transition-all ease-in-out"
                              style={{
                                backgroundImage: `url(${data.thumbnail})`,
                              }}
                            >
                              <span className="py-1 px-1 absolute top-3 left-3 text-sm text-center rounded-lg text-slate-100 capitalize bg-blue-700">
                                bestseller
                              </span>
                            </div>
                          </Link>

                          <div className="flex justify-between px-4 pt-4">
                            <p className="text-slate-400 text-sm font-semibold capitalize">
                              {data.category}
                            </p>
                            <span className="flex items-center gap-1">
                              <BsStarFill className="text-yellow-400" />
                              <p className="font-bold font-sans text-slate-300">
                                {data.rating}
                              </p>
                            </span>
                          </div>
                          <div className="px-4 pt-3">
                            <h2 className="capitalize text-slate-200 font-bold">
                              {data.title}
                            </h2>
                          </div>

                          <div className="px-0 pb-3 border-b w-[90%] mx-auto border-cyan-500 pt-3 flex justify-between">
                            <div className="flex items-center gap-1">
                              <div
                                className="w-8  h-8  rounded-full bg-cover bg-top object-cover "
                                style={{
                                  backgroundImage: `url(${data.instructorAvatar})`,
                                }}
                              ></div>
                              <p className="capitalize text-slate-300 text-sm font-semibold">
                                {data.instructorName}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center text-slate-300">
                              <p className="font-bold font-sans">
                                {data.price}
                              </p>{" "}
                              <span className="capitalize">
                                {data.currency}
                              </span>
                            </div>
                          </div>

                          <div className="flex px-4 pb-3 pt-3 justify-between text-slate-300">
                            <div className="flex gap-1 items-center">
                              <BsClock />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.duration}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsBook />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.lessons}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsPeople />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.students.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-4 gap-16">
                    {Ecoursesdata.filter(
                      (data) => data.category == "Business"
                    ).map((data) => {
                      return (
                        <div
                          key={data.id}
                          className="border border-cyan-500 rounded-lg relative"
                        >
                          <Link href="#" passHref>
                            <div
                              className="w-[98%] mt-1 mx-auto h-[13rem]  rounded-lg bg-cover bg-top object-cover hover:brightness-50 hover:scale-[1.03] transition-all ease-in-out"
                              style={{
                                backgroundImage: `url(${data.thumbnail})`,
                              }}
                            >
                              <span className="py-1 px-1 absolute top-3 left-3 text-sm text-center rounded-lg text-slate-100 capitalize bg-blue-700">
                                bestseller
                              </span>
                            </div>
                          </Link>

                          <div className="flex justify-between px-4 pt-4">
                            <p className="text-slate-400 text-sm font-semibold capitalize">
                              {data.category}
                            </p>
                            <span className="flex items-center gap-1">
                              <BsStarFill className="text-yellow-400" />
                              <p className="font-bold font-sans text-slate-300">
                                {data.rating}
                              </p>
                            </span>
                          </div>
                          <div className="px-4 pt-3">
                            <h2 className="capitalize text-slate-200 font-bold">
                              {data.title}
                            </h2>
                          </div>

                          <div className="px-0 pb-3 border-b w-[90%] mx-auto border-cyan-500 pt-3 flex justify-between">
                            <div className="flex items-center gap-1">
                              <div
                                className="w-8  h-8  rounded-full bg-cover bg-top object-cover "
                                style={{
                                  backgroundImage: `url(${data.instructorAvatar})`,
                                }}
                              ></div>
                              <p className="capitalize text-slate-300 text-sm font-semibold">
                                {data.instructorName}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center text-slate-300">
                              <p className="font-bold font-sans">
                                {data.price}
                              </p>{" "}
                              <span className="capitalize">
                                {data.currency}
                              </span>
                            </div>
                          </div>

                          <div className="flex px-4 pb-3 pt-3 justify-between text-slate-300">
                            <div className="flex gap-1 items-center">
                              <BsClock />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.duration}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsBook />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.lessons}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsPeople />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.students.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Tab.Panel>

                <Tab.Panel>
                  <div className="grid grid-cols-4 gap-16">
                    {Ecoursesdata.filter(
                      (data) => data.category == "marketing"
                    ).map((data) => {
                      return (
                        <div
                          key={data.id}
                          className="border border-cyan-500 rounded-lg relative"
                        >
                          <Link href="#" passHref>
                            <div
                              className="w-[98%] mt-1 mx-auto h-[13rem]  rounded-lg bg-cover bg-top object-cover hover:brightness-50 hover:scale-[1.03] transition-all ease-in-out"
                              style={{
                                backgroundImage: `url(${data.thumbnail})`,
                              }}
                            >
                              <span className="py-1 px-1 absolute top-3 left-3 text-sm text-center rounded-lg text-slate-100 capitalize bg-blue-700">
                                bestseller
                              </span>
                            </div>
                          </Link>

                          <div className="flex justify-between px-4 pt-4">
                            <p className="text-slate-400 text-sm font-semibold capitalize">
                              {data.category}
                            </p>
                            <span className="flex items-center gap-1">
                              <BsStarFill className="text-yellow-400" />
                              <p className="font-bold font-sans text-slate-300">
                                {data.rating}
                              </p>
                            </span>
                          </div>
                          <div className="px-4 pt-3">
                            <h2 className="capitalize text-slate-200 font-bold">
                              {data.title}
                            </h2>
                          </div>

                          <div className="px-0 pb-3 border-b w-[90%] mx-auto border-cyan-500 pt-3 flex justify-between">
                            <div className="flex items-center gap-1">
                              <div
                                className="w-8  h-8  rounded-full bg-cover bg-top object-cover "
                                style={{
                                  backgroundImage: `url(${data.instructorAvatar})`,
                                }}
                              ></div>
                              <p className="capitalize text-slate-300 text-sm font-semibold">
                                {data.instructorName}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center text-slate-300">
                              <p className="font-bold font-sans">
                                {data.price}
                              </p>{" "}
                              <span className="capitalize">
                                {data.currency}
                              </span>
                            </div>
                          </div>

                          <div className="flex px-4 pb-3 pt-3 justify-between text-slate-300">
                            <div className="flex gap-1 items-center">
                              <BsClock />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.duration}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsBook />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.lessons}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsPeople />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.students.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-4 gap-16">
                    {Ecoursesdata.filter(
                      (data) => data.category == "Development"
                    ).map((data) => {
                      return (
                        <div
                          key={data.id}
                          className="border border-cyan-500 rounded-lg relative"
                        >
                          <Link href="#" passHref>
                            <div
                              className="w-[98%] mt-1 mx-auto h-[13rem]  rounded-lg bg-cover bg-top object-cover hover:brightness-50 hover:scale-[1.03] transition-all ease-in-out"
                              style={{
                                backgroundImage: `url(${data.thumbnail})`,
                              }}
                            >
                              <span className="py-1 px-1 absolute top-3 left-3 text-sm text-center rounded-lg text-slate-100 capitalize bg-blue-700">
                                bestseller
                              </span>
                            </div>
                          </Link>

                          <div className="flex justify-between px-4 pt-4">
                            <p className="text-slate-400 text-sm font-semibold capitalize">
                              {data.category}
                            </p>
                            <span className="flex items-center gap-1">
                              <BsStarFill className="text-yellow-400" />
                              <p className="font-bold font-sans text-slate-300">
                                {data.rating}
                              </p>
                            </span>
                          </div>
                          <div className="px-4 pt-3">
                            <h2 className="capitalize text-slate-200 font-bold">
                              {data.title}
                            </h2>
                          </div>

                          <div className="px-0 pb-3 border-b w-[90%] mx-auto border-cyan-500 pt-3 flex justify-between">
                            <div className="flex items-center gap-1">
                              <div
                                className="w-8  h-8  rounded-full bg-cover bg-top object-cover "
                                style={{
                                  backgroundImage: `url(${data.instructorAvatar})`,
                                }}
                              ></div>
                              <p className="capitalize text-slate-300 text-sm font-semibold">
                                {data.instructorName}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center text-slate-300">
                              <p className="font-bold font-sans">
                                {data.price}
                              </p>{" "}
                              <span className="capitalize">
                                {data.currency}
                              </span>
                            </div>
                          </div>

                          <div className="flex px-4 pb-3 pt-3 justify-between text-slate-300">
                            <div className="flex gap-1 items-center">
                              <BsClock />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.duration}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsBook />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.lessons}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsPeople />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.students.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-4 gap-16">
                    {Ecoursesdata.filter(
                      (data) => data.category == "Design"
                    ).map((data) => {
                      return (
                        <div
                          key={data.id}
                          className="border border-cyan-500 rounded-lg relative"
                        >
                          <Link href="#" passHref>
                            <div
                              className="w-[98%] mt-1 mx-auto h-[13rem]  rounded-lg bg-cover bg-top object-cover hover:brightness-50 hover:scale-[1.03] transition-all ease-in-out"
                              style={{
                                backgroundImage: `url(${data.thumbnail})`,
                              }}
                            >
                              <span className="py-1 px-1 absolute top-3 left-3 text-sm text-center rounded-lg text-slate-100 capitalize bg-blue-700">
                                bestseller
                              </span>
                            </div>
                          </Link>

                          <div className="flex justify-between px-4 pt-4">
                            <p className="text-slate-400 text-sm font-semibold capitalize">
                              {data.category}
                            </p>
                            <span className="flex items-center gap-1">
                              <BsStarFill className="text-yellow-400" />
                              <p className="font-bold font-sans text-slate-300">
                                {data.rating}
                              </p>
                            </span>
                          </div>
                          <div className="px-4 pt-3">
                            <h2 className="capitalize text-slate-200 font-bold">
                              {data.title}
                            </h2>
                          </div>

                          <div className="px-0 pb-3 border-b w-[90%] mx-auto border-cyan-500 pt-3 flex justify-between">
                            <div className="flex items-center gap-1">
                              <div
                                className="w-8  h-8  rounded-full bg-cover bg-top object-cover "
                                style={{
                                  backgroundImage: `url(${data.instructorAvatar})`,
                                }}
                              ></div>
                              <p className="capitalize text-slate-300 text-sm font-semibold">
                                {data.instructorName}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center text-slate-300">
                              <p className="font-bold font-sans">
                                {data.price}
                              </p>{" "}
                              <span className="capitalize">
                                {data.currency}
                              </span>
                            </div>
                          </div>

                          <div className="flex px-4 pb-3 pt-3 justify-between text-slate-300">
                            <div className="flex gap-1 items-center">
                              <BsClock />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.duration}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsBook />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.lessons}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsPeople />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.students.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-4 gap-16">
                    {Ecoursesdata.filter(
                      (data) => data.category == "CryptoCurrency"
                    ).map((data) => {
                      return (
                        <div
                          key={data.id}
                          className="border border-cyan-500 rounded-lg relative"
                        >
                          <Link href="#" passHref>
                            <div
                              className="w-[98%] mt-1 mx-auto h-[13rem]  rounded-lg bg-cover bg-top object-cover hover:brightness-50 hover:scale-[1.03] transition-all ease-in-out"
                              style={{
                                backgroundImage: `url(${data.thumbnail})`,
                              }}
                            >
                              <span className="py-1 px-1 absolute top-3 left-3 text-sm text-center rounded-lg text-slate-100 capitalize bg-blue-700">
                                bestseller
                              </span>
                            </div>
                          </Link>

                          <div className="flex justify-between px-4 pt-4">
                            <p className="text-slate-400 text-sm font-semibold capitalize">
                              {data.category}
                            </p>
                            <span className="flex items-center gap-1">
                              <BsStarFill className="text-yellow-400" />
                              <p className="font-bold font-sans text-slate-300">
                                {data.rating}
                              </p>
                            </span>
                          </div>
                          <div className="px-4 pt-3">
                            <h2 className="capitalize text-slate-200 font-bold">
                              {data.title}
                            </h2>
                          </div>

                          <div className="px-0 pb-3 border-b w-[90%] mx-auto border-cyan-500 pt-3 flex justify-between">
                            <div className="flex items-center gap-1">
                              <div
                                className="w-8  h-8  rounded-full bg-cover bg-top object-cover "
                                style={{
                                  backgroundImage: `url(${data.instructorAvatar})`,
                                }}
                              ></div>
                              <p className="capitalize text-slate-300 text-sm font-semibold">
                                {data.instructorName}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center text-slate-300">
                              <p className="font-bold font-sans">
                                {data.price}
                              </p>{" "}
                              <span className="capitalize">
                                {data.currency}
                              </span>
                            </div>
                          </div>

                          <div className="flex px-4 pb-3 pt-3 justify-between text-slate-300">
                            <div className="flex gap-1 items-center">
                              <BsClock />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.duration}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsBook />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.lessons}
                              </span>
                            </div>
                            <div className="flex gap-1 items-center">
                              <BsPeople />
                              <span className="font-sans text-slate-500 text-sm">
                                {data.students.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Fade>
          </Tab.Group>
          <button className="mx-auto block mt-16 bg-gradient-to-tr from-cyan-500 to-indigo-500 py-2 px-3 text-center rounded-lg text-slate-100 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-500 transition-all ease-in-out duration-[5s]">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
