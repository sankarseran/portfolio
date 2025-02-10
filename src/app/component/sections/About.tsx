"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import meImage from 'images/me.jpg';
import { usePrefersReducedMotion } from "@/app/hooks";

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About: React.FC = () => {
  const revealContainer = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !revealContainer.current) return;

    // sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const skills = [
    {
      category: "Front-End",
      skills: ["Angular", "React.js", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Back-End",
      skills: ["Express.js", "Nest.js", "Hapi.js", "Node.js", "Microservices"],
    },
    {
      category: "Databases",
      skills: [
        "MongoDB",
        "Firebase DB",
        "PostgreSQL",
        "DynamoDB",
        "Elastic Search",
        "MySQL",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (RDS, S3, EC2)",
        "Kubernetes",
        "Firebase",
        "Docker",
        "Azure",
      ],
    },
    {
      category: "UI Libraries & Tools",
      skills: [
        "Angular Material",
        "Ant Design",
        "PrimeVue",
        "Postman",
        "Bitbucket",
        "Visual Studio Code",
        "GIT (GitHub, GitLab)",
      ],
    },
    {
      category: "Programming Languages & Styles",
      skills: [
        "JavaScript",
        "TypeScript",
        "Java",
        "C# .Net",
        "HTML",
        "CSS",
        "SAAS",
        "SCSS",
      ],
    },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div style={{ marginBottom: "10px" }}>
            <h2>About Me</h2>
            <p>Hi, you can call me sankar.</p>
            <p style={{ marginBottom: "5px" }}>
              Innovative and detail-oriented Full Stack Developer with 8+ years
              of experience designing, developing, and optimizing scalable,
              secure, and high-performance web applications. Passionate about
              engineering efficient, maintainable, and user-centric solutions, I
              thrive at the intersection of front-end excellence, back-end
              robustness, and cloud scalability.
            </p>

            <h5>What Sets Me Apart:</h5>
            <ul>
              <li>
                🚀 <b>End-to-End Development Mastery –</b> I design and
                implement robust, scalable architectures that seamlessly
                integrate front-end and back-end technologies.
              </li>
              <li>
                ⚡ <b>Performance & Optimization –</b> I specialize in code
                efficiency, load balancing, caching strategies, and database
                indexing, ensuring high availability and responsiveness.
              </li>
              <li>
                🛠 <b>Cloud-Native & DevOps-Driven –</b> I leverage serverless
                computing, containerization, and automation to build resilient
                and cost-effective cloud solutions.
              </li>
              <li>
                🤝 <b>Collaborative & Agile Mindset –</b> I thrive in
                cross-functional teams, working closely with designers, product
                managers, and DevOps engineers to deliver high-impact solutions.
              </li>
              <li>
                💡 <b>Problem-Solving & Innovation –</b> I am passionate about
                solving complex technical challenges, implementing best
                practices, and continuously enhancing system security,
                scalability, and maintainability.
              </li>
            </ul>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              className="img"
              src={process.env.NODE_ENV === 'development' ? "/images/me.jpg" : "./images/me.jpg"}
              width={500}
              height={500}
              quality={95}
              alt="sankar profile picture"
            />
          </div>
        </StyledPic>
      </div>
      <StyledText>
        <div>
          <h2>Skills</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {skills.map((skillGroup, index) => (
              <div key={index} style={{ flex: "1 1 200px" }}>
                <h3>{skillGroup.category}:</h3>
                <ul className="skills-list">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </StyledText>
    </StyledAboutSection>
  );
};

export default About;
