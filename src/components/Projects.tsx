import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";
// import nutfacts from '../../public/assets/images/nutrititionfacts.jpg'

const Projects = () => {
  const { projects } = config;
  const [firstItem] = projects.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {projects.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>
              Macros4U is intended to be a training module that helps people
              learn to count and track their daily macros. The goal is to help
              you learn how to maintain a healthy weight by teaching you skills
              such as: How to calculate your BMI level, how to read a Nutrition
              Facts label, and strategies to achieve your goals.
              <br />
              Link to our prototype:
              https://xd.adobe.com/view/35c47dee-48a4-41f2-b738-833d2b587b79-6097/
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src="../../public/assets/images/goals.jpg"
              alt="goals"
            />
            <img
              className="h-6/6"
              src="/assets/images/nutritionfacts.jpg"
              alt="nutritionfacts"
            />
            <img className="h-6/6" src="/assets/images/tut.jpg" alt="quote" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
