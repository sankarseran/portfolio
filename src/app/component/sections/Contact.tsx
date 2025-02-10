import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig, config } from "@/app/config";
import loadScrollReveal from "@/app/utils/sr";
import { usePrefersReducedMotion } from "@/app/hooks";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overlinestyle {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact: React.FC = () => {
  const revealContainer = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealElements = async () => {
      if (prefersReducedMotion || !revealContainer.current) {
        return;
      }

      const scrollReveal = await loadScrollReveal(window);
      scrollReveal?.reveal(revealContainer.current, srConfig());
    };

    revealElements();
  }, [prefersReducedMotion]);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overlinestyle">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I’m actively seeking new opportunities and would love to hear from you!
        Whether you have a question, a project in mind, or just want to say hi,
        I’m always excited to connect and will respond as quickly as I can!
      </p>

      <a className="email-link" href={`mailto:${config.email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
