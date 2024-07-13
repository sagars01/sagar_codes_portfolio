import AboutTwo from "@/components/homes/about/AboutTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";
import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import React from "react";
export const metadata = {
  title: "Sagarmoy Sengupta - Professional Software Engineer Portfolio",
  description:
    "Explore the professional portfolio of Sagarmoy Sengupta, a detail-oriented Staff Software Engineer with over 10 years of experience in full-stack development, cloud computing, and AI projects. Discover his key projects, skills, and achievements.",
  keywords:
    "Sagarmoy Sengupta, professional portfolio, software engineer, cloud computing, AI projects, TypeScript, JavaScript, NodeJS, AWS, GCP, frontend architecture, customer experience, project showcase",
  author: "Sagarmoy Sengupta",
  og: {
    title: "Sagarmoy Sengupta - Professional Software Engineer Portfolio",
    description:
      "Explore the professional portfolio of Sagarmoy Sengupta, a detail-oriented Staff Software Engineer with over 10 years of experience in full-stack development, cloud computing, and AI projects. Discover his key projects, skills, and achievements.",
    url: "https://www.sagarmoy.work/about",
    image: "https://www.sagarmoy.work/images/profile.jpg",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@sagar_codes",
    title: "Sagarmoy Sengupta - Professional Software Engineer Portfolio",
    description:
      "Explore the professional portfolio of Sagarmoy Sengupta, a detail-oriented Staff Software Engineer with over 10 years of experience in full-stack development, cloud computing, and AI projects. Discover his key projects, skills, and achievements.",
    image: "https://www.sagarmoy.work/images/profile.jpg"
  }
};

export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <AboutTwo />
            <PersonalInfoTwo />
          </div>
        </div>
      </div>
    </>
  );
}
