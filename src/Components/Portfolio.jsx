/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/workspace.jpg";

const imageAltText = "a work desk for multi-users";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "What is the difference between Python and MicroPython?",
    description:
      "A beginner friendly article to help explain the difference between the Python and MicroPython technologies.",
    url: "https://www.educative.io/answereditor/5197995736039424",
  },
  {
    title: "TO-DO List Application",
    description:
      "A TO-DO list to demonstrate a simple CRUD application, deployed on Netlify. Includes my learning of Javascript.",
    url: "https://dera-to-do-list.netlify.app",
  },
  {
    title: "Udemy web interface Clone",
    description:
      "Cloned the interface of the Instagram web page, deployed on Netlify. Includes my experience and design abilities.",
    url: "https://dera-udemy-clone.netlify.app",
  },
  {
    title: "Instagram web interface Clone",
    description:
      "Cloned the interface of the Instagram web page, deployed on Netlify. Includes my learning and design abilities.",
    url: "https://dera-instagram-clone.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
