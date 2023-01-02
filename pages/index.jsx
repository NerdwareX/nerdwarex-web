import React from "react";
import BecomeInstructor from "../components/BecomeInstructor/BecomeInstructor";
import ExclusiveCourses from "../components/ExclusiveCourses/ExclusiveCourses";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import NavMenu from "../components/Navbar/NavMenu";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import PopularTopics from "../components/PopularTopics/PopularTopics";

export default function Home() {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <InfoSection />
      <ExclusiveCourses />
      <BecomeInstructor />
      <PopularTopics />
    </>
  );
}
