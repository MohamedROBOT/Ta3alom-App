import { createContext, useContext } from "react";

const CourseContext = createContext();
import graphicDesignImg from "../assets/images/Home/Graphic-Design.png";
import webDesignImg from "../assets/images/Home/WebDevelopment.png";
import uiUxImg from "../assets/images/Home/UIUX.png";
import brandImg from "../assets/images/Home/BrandIdentity.png";
export const CourseProvider = ({ children }) => {
  const courses = [
     {
              courseName: "Graphic Design Template Program",
              courseImg: graphicDesignImg,
              courseLevel: "Beginner",
              courseLectures: 16 + " Lectures",
              coursePrice: 1500,
              courseRate: 4,
              id: 1,
            },
            {
              courseName: "Web Design Essentials",
              courseImg: webDesignImg,
              courseLevel: "Intermediate",
              courseLectures: 20 + " Workshops",
              coursePrice: 2000,
              courseRate: 4.5,
              id: 2
            },
            {
              courseName: "UX/UI Best Practices",
              courseImg: uiUxImg,
              courseLevel: "Advanced",
              courseLectures: 12 + " Seminars",
              coursePrice: 2500,
              courseRate: 4.8,
              id: 3
            },
            {
              courseName: "Brand Identity Development",
              courseImg: brandImg,
              courseLevel: "Expert",
              courseLectures: 8 + " Masterclass",
              coursePrice: 3000,
              courseRate: 5,
              id: 4
            },
            {
              courseName: "Graphic Design Template Program",
              courseImg: graphicDesignImg,
              courseLevel: "Beginner",
              courseLectures: 16 + " Lectures",
              coursePrice: 1500,
              courseRate: 4,
              id: 5
            },
  ];

  return (
    <CourseContext.Provider value={ courses }>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);