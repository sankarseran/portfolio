"use client"; // Ensure it's a Client Component

import React, { useState, useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import { IconLoader } from "./icons";

interface LoaderProps {
  finishLoading: () => void;
}

const StyledLoader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isMounted",
})<{ isMounted: boolean }>`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
  opacity: ${(props) => (props.isMounted ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #S {
        opacity: 0;
      }
    }
  }
`;

const Loader: React.FC<LoaderProps> = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true); // NEW STATE to handle visibility

  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        setTimeout(() => {
          setShowLoader(false); // Hide loader after animation
          finishLoading();
        }, 300); // Small delay before unmounting
      },
    });

    loader
      .add({
        targets: "#logo path",
        delay: 300,
        duration: 1500,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: "#logo #S",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      animate();
    }, 500); // Delay before animation starts (prevents flash)

    return () => clearTimeout(timeout);
  }, []);

  if (!showLoader) return null; // Completely remove loader after animation

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

export default Loader;
