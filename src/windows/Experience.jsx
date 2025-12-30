import { WindowControls } from "#components";
import { experiences } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
  Briefcase,
  MapPin,
  Calendar,
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
        {/* Header Section */}
        <div className="experience-header">
          <div className="experience-title">
            <Briefcase className="title-icon" />
            <h1>Professional Experience</h1>
          </div>
          <p className="experience-subtitle">
            2+ years building modern web applications
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map(
            (
              {
                id,
                company,
                position,
                period,
                location,
                description,
                technologies,
              },
              index
            ) => (
              <div key={id} className="timeline-item">
                {/* Timeline Line */}
                <div className="timeline-line">
                  <div className="timeline-dot" />
                  {index !== experiences.length - 1 && (
                    <div className="timeline-connector" />
                  )}
                </div>

                {/* Content Card */}
                <div className="experience-card">
                  {/* Header */}
                  <div className="card-header">
                    <div className="card-header-content">
                      <h3 className="position-title">{position}</h3>
                      <p className="company-name">{company}</p>
                    </div>
                    <div className="card-meta">
                      <span className="meta-item">
                        <Calendar size={14} />
                        {period}
                      </span>
                      <span className="meta-item">
                        <MapPin size={14} />
                        {location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="card-description">
                    {description.map((item, idx) => (
                      <div key={idx} className="description-item">
                        <span className="bullet">•</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  {technologies && (
                    <div className="card-technologies">
                      {technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

const ExperienceWindow = WindowWrapper(Experience, "safari");

export default ExperienceWindow;
