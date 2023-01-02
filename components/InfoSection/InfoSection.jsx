import React from "react";
import { useUserStore } from "../store/store";
import { Fade } from "react-awesome-reveal";

const listData = [
  {
    heading: "10 m+",
    sub: "Courses",
  },
  {
    heading: "100 m+",
    sub: "Students",
  },
  {
    heading: "30000 +",
    sub: "Instructors",
  },
  {
    heading: "100+",
    sub: "Partners",
  },
];

export default function InfoSection() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useUserStore((state) => state);
  return (
    <section>
      {isUserLoggedIn ? (
        <></>
      ) : (
        <>
          <div className="w-full bg-slate-200 h-36 ">
            <div className="container mx-auto  grid h-full grid-cols-4 gap-24 ">
              {listData.map((data, dataIdx) => {
                return (
                  <div
                    className=" grid place-content-center text-center"
                    key={dataIdx}
                  >
                    <Fade>
                      <h3 className="font-bold capitalize text-xl font-sans">
                        {data.heading}
                      </h3>
                      <p className="font-medium capitalize text-lg">
                        {data.sub}
                      </p>
                    </Fade>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
