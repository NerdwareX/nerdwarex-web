import React from "react";
import Link from "next/link";
import { BsPlayFill } from "react-icons/bs";
import Lottie from "react-lottie-player";
import BannerLottie from "../../public/assets/images/banner.json";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import { initialCourseData } from "../mock/initialCourseData";
import { useUserStore } from "../store/store";

export default function HeroSection() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useUserStore((state) => state);
  return (
    <section className="dark:bg-gradient-to-r dark:from-[#000074] dark:to-[#290074] bg-white w-full h-screen">
      {isUserLoggedIn ? (
        <>
          <div className="container mx-auto p-6 sm:py-12 lg:py-[10rem] ">
            <h2 className="dark:text-white text-4xl font-semibold leading-relaxed text-[#000074]">
              Welcome back! <br /> Let’s continue learning
            </h2>

            <div className="flex mt-16 gap-8">
              {initialCourseData.map((item) => {
                return (
                  <>
                    <div
                      className="border-2 w-[50%] dark:border-white rounded-lg flex  hover:bg-blue-900 transition-all ease-in-out cursor-pointer"
                      key={item.id}
                    >
                      <div
                        className="w-[16rem] h-[15rem] mx-6 rounded-lg my-6 bg-cover bg-center object-cover"
                        style={{
                          backgroundImage: `url("${item.thumbnail}")`,
                        }}
                      ></div>

                      <div className="my-6 relative">
                        <h3 className="dark:text-slate-200 text-sm text-slate-500 mt-4 font-extralight ">
                          {item.category}
                        </h3>
                        <h1 className="text-xl dark:text-white text-slate-600 mt-3 ">
                          {item.title}
                        </h1>

                        <div className="mt-8 flex gap-3 items-center">
                          <div
                            className="w-8 h-8 rounded-full  bg-cover bg-center object-cover"
                            style={{
                              backgroundImage: `url("${item.avatar}")`,
                            }}
                          ></div>
                          <span className="dark:text-white text-slate-600 capitalize font-extralight">
                            {item.instructorName}
                          </span>
                        </div>
                        <div className="w-[80%] absolute mx-auto h-2 bg-slate-300 block mt-4"></div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center gap-16 container mx-auto p-6 sm:py-12 lg:py-[18rem] lg:flex-row lg:justify-between">
            <div className="w-[50%]">
              <Slide>
                <h1 className="capitalize text-5xl font-bold leading-relaxed  text-white headding">
                  A new way to learn <br /> and upgrade your skill
                </h1>
                <Fade delay={1e3} cascade damping={1e-1}>
                  <p className="text-white font-thin">
                    A solution for easy, secure and flexible way to learn online{" "}
                    <br /> anywhere, anytime, any place.
                  </p>

                  <div className="mt-10 flex gap-6">
                    <div>
                      <Link href="#" passHref>
                        <span className="bg-gradient-to-tr capitalize from-cyan-500 to-indigo-500 py-2 px-3 rounded-lg text-slate-100 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-500 transition-all ease-in-out duration-[5s]">
                          join waitlist
                        </span>
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="#"
                        passHref
                        className="flex gap-2 items-center -mt-2"
                      >
                        <BsPlayFill className=" bg-[#FEA303] h-10 w-10 rounded-full text-white" />
                        <span className="text-[#FEA303] capitalize">
                          Learn more
                        </span>
                      </Link>
                    </div>
                  </div>
                </Fade>
              </Slide>
            </div>
            <div className="w-[50%] -mt-24">
              <Bounce delay={1500}>
                <Lottie play loop animationData={BannerLottie} />
              </Bounce>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
