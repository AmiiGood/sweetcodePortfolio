import { WindowControls } from "#components";
import { education, experiences } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  GraduationCap,
  MapPin,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="experience-container">
        {/* Header */}
        <div className="experience-header">
          <div>
            <p className="experience-eyebrow">Career</p>
            <h1>Work Experience</h1>
            <p className="experience-subtitle">
              2+ years building modern web applications
            </p>
          </div>

          <a
            className="cv-button"
            href="/files/CV_AlexisAlvarez.pdf"
            download="CV_AlexisAlvarez.pdf"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        {/* Experience cards */}
        <div className="experience-list">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="exp-card"
              style={{ "--accent": exp.accent }}
            >
              <div className="exp-top">
                <div
                  className="exp-monogram"
                  style={{ background: exp.gradient }}
                >
                  {exp.initials}
                </div>

                <div className="exp-heading">
                  <h3>{exp.position}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>

                <div className="exp-when">
                  <span
                    className={clsx("period-pill", exp.current && "current")}
                  >
                    {exp.period}
                  </span>
                  <span className="exp-location">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="exp-tech">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="exp-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Education */}
        <div className="edu-section">
          <div className="edu-title">
            <GraduationCap size={20} />
            <h2>Education</h2>
          </div>

          <div className="edu-grid">
            {education.map((edu) => (
              <div key={edu.id} className="edu-card">
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-school">{edu.institution}</p>
                <div className="edu-meta">
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ExperienceWindow = WindowWrapper(Experience, "safari");

export default ExperienceWindow;
