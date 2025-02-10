import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { navDelay } from "../../utils";
import { usePrefersReducedMotion } from "../../hooks";
import TypeWords from "../TypeWords";
import { config } from "@/app/config";

const StyledNameSection = styled.section`
  ${({ theme }) => theme.mixins.flexStart};
  flex-direction: column;
  align-items: flex-start;
  min-height: 85vh;
  height: 85vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2,
  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Name: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sankaralingam Seranthian.</h2>;
  const three = (
    <h3 className="big-heading">
      <TypeWords
        prefix="I am a"
        words={[
          "Full Stack Developer.",
          "Frontend Developer.",
          "Backend Developer.",
        ]}
      />
    </h3>
  );
  const four = (
    <>
      <p>
        I’m a software engineer specializing in building fullstack web
        applications. Always eager to push boundaries and turn ideas into
        reality with optimised code.
      </p>
    </>
  );
  const five = (
    <a href={`mailto:${config.email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledNameSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <AnimatePresence>
          {isMounted &&
            items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (i + 1) * 0.1, // Staggered delay
                }}
              >
                {item}
              </motion.div>
            ))}
        </AnimatePresence>
      )}
    </StyledNameSection>
  );
};

export default Name;
