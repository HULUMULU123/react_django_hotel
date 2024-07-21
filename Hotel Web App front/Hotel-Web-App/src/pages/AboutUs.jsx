import React, { Suspense } from "react";
// import AboutUsContent from "../features/aboutUs/AboutUsContent";
import { lazy } from "react";
import Spinner from "../ui/Spinner";

const AboutUsContent = lazy(() => import("../features/aboutUs/AboutUsContent"));

function AboutUs() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <AboutUsContent />
      </Suspense>
    </div>
  );
}

export default AboutUs;
