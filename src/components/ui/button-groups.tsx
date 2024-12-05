import React from "react";
import "@/styles/button-groups.css";

const ButtonGroups = () => {
  return (
    <div className="flex space-x-4 pb-5">
      <a href="tel: 0886050123" className="Btn whatsapp">
        <span className="svgContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="#fff"
              d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
            />
          </svg>
        </span>
        <span className="BG"></span>
      </a>

      <a href="https://www.facebook.com/Pha.17.4/" className="Btn facebook">
        <span className="svgContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 320 512"
            fill="#F6F7F9"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </svg>
        </span>
        <span className="BG"></span>
      </a>

      <button className="Btn linkdin">
        <span className="svgContainer">
          <svg
            fill="white"
            className="svgIcon"
            xmlns="http://www.w3.org/2000/svg"
            height="1.6em"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
          </svg>
        </span>
        <span className="BG"></span>
      </button>
    </div>
  );
};

export default ButtonGroups;
