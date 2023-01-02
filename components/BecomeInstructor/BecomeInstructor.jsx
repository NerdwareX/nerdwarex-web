import React from "react";
import { useUserStore } from "../store/store";
import Lottie from "react-lottie-player";
import teachLottie from "../../public/assets/images/teach1.json";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

export default function BecomeInstructor() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useUserStore((state) => state);
  return (
    <section>
      {isUserLoggedIn ? (
        <></>
      ) : (
        <div className="w-full bg-white dark:bg-gradient-to-r dark:from-[#000074] dark:to-[#290074]">
          <div className="container mx-auto flex justify-between gap-52 items-center">
            <div className="w-[50%]">
              <Fade>
                <Lottie play loop animationData={teachLottie} />
              </Fade>
            </div>
            <div className="w-[50%] ">
              <Slide direction="up">
                <h1 className="text-blue-800 dark:text-slate-200 leading-relaxed  font-bold text-3xl capitalize">
                  Become an Instructor <br /> on NerdwareX
                </h1>
                <p className="mt-4 text-blue-700 dark:text-slate-300 leading-snug">
                  Interested in becoming a tutor, instuctor, mentor on <br />
                  nerwarex easy and fast and reliable
                </p>
                <div className="mt-8">
                  <Link href="#" passHref>
                    <span className="bg-gradient-to-tr from-cyan-500 to-indigo-500 py-2 px-3 rounded-lg text-slate-100 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-500 transition-all ease-in-out duration-[5s]">
                      Become an Instructor
                    </span>
                  </Link>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
