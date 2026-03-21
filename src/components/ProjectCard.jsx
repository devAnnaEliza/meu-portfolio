/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { StatusIcon } from "./StatusIcon";

export const ProjectCard = React.memo(function ProjectCard({ project }) {
  if (!project) return null;

  const slides = [
    ...(project.video ? [{ type: "video", src: project.video }] : []),
    ...(project.images?.map((src) => ({ type: "image", src })) ?? []),
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`project-card ${project.status} reveal`}>

      {slides.length > 0 && (
        <div className="card-carousel">
          {slides.map((slide, i) =>
            slide.type === "video" ? (
              <video
                key={i}
                src={slide.src}
                className={`project-image ${i === current ? "active" : ""}`}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                key={i}
                src={slide.src}
                alt={`${project.title} - ${i}`}
                className={`project-image ${i === current ? "active" : ""}`}
                loading="lazy"
              />
            )
          )}
          {slides.length > 1 && (
            <div className="carousel-dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`carousel-dot ${i === current ? "active" : ""}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="status-icon">
          <StatusIcon status={project.status} />
        </span>
      </div>

      <p>{project.description}</p>

      <div className="project-techs">
        {project.techs?.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">Repositório</a>
        )}
      </div>

    </div>
  );
});