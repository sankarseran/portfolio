import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { loaderDelay } from "../utils";
import { usePrefersReducedMotion } from "../hooks";

interface SideProps {
  children: ReactNode;
  isHome?: boolean;
  orientation?: string;
}

const StyledSideElement = styled.div<{ orientation?: string }>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === "left" ? "40px" : "auto")};
  right: ${(props) => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${(props) => (props.orientation === "left" ? "20px" : "auto")};
    right: ${(props) => (props.orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side: React.FC<SideProps> = ({
  children,
  isHome = false,
  orientation = "left",
}) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, [isHome, prefersReducedMotion]);

  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <AnimatePresence>
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: isHome ? loaderDelay / 1000 : 0,
              }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </StyledSideElement>
  );
};

export default Side;
