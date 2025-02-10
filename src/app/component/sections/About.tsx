"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { usePrefersReducedMotion } from "@/app/hooks";
// import sr from "@/app/utils/sr";
import { srConfig } from "@/app/config";

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

  const skills: string[] = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <h2>About Me</h2>
            <p>
              Hi, you can call me sankar.
            </p>
            <p style={{ marginBottom: "5px"}}>
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
              src={"/images/me.jpg"}
              width={500}
              height={500}
              quality={95}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
      <StyledText>
        <div>
          <h2>Skills</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {/* Front-End Skills */}
            <div style={{ flex: "1 1 200px" }}>
              <h3>Front-End:</h3>
              <ul className="skills-list">
                <li>Angular</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Vue.js</li>
              </ul>
            </div>

            {/* Back-End Skills */}
            <div style={{ flex: "1 1 200px" }}>
              <h3>Back-End:</h3>
              <ul className="skills-list">
                <li>Express.js</li>
                <li>Nest.js</li>
                <li>Hapi.js</li>
                <li>Node.js</li>
                <li>Microservices</li>
              </ul>
            </div>

            {/* Databases Skills */}
            <div style={{ flex: "1 1 200px" }}>
              <h3>Databases:</h3>
              <ul className="skills-list">
                <li>MongoDB</li>
                <li>Firebase DB</li>
                <li>PostgreSQL</li>
                <li>DynamoDB</li>
                <li>Elastic Search</li>
                <li>MySQL</li>
              </ul>
            </div>

            {/* Cloud & DevOps Skills */}
            <div style={{ flex: "1 1 200px" }}>
              <h3>Cloud & DevOps:</h3>
              <ul className="skills-list">
                <li>AWS (RDS, S3, EC2)</li>
                <li>Kubernetes</li>
                <li>Firebase</li>
                <li>Docker</li>
                <li>Azure</li>
              </ul>
            </div>

            {/* UI Libraries & Tools Skills */}
            <div style={{ flex: "1 1 200px" }}>
              <h3>UI Libraries & Tools:</h3>
              <ul className="skills-list">
                <li>Angular Material</li>
                <li>Ant Design</li>
                <li>PrimeVue</li>
                <li>Postman</li>
                <li>Bitbucket</li>
                <li>Visual Studio Code</li>
                <li>GIT (GitHub, GitLab)</li>
              </ul>
            </div>

            {/* Programming Languages & Styles Skills */}
            <div style={{ flex: "1 1 200px" }}>
              <h3>Programming Languages & Styles:</h3>
              <ul className="skills-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>C# .Net</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SAAS</li>
                <li>SCSS</li>
              </ul>
            </div>
          </div>
        </div>
      </StyledText>
    </StyledAboutSection>
  );
};

export default About;
