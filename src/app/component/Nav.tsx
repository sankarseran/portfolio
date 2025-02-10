"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import styled, { css } from "styled-components";
import { navLinks } from "../config";
import { useScrollDirection } from "../hooks";
import Menu from "./Menu";
import { IconLogo, IconHex } from "./icons";

const StyledHeader = styled.header.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "scrollDirection" && prop !== "scrolledToTop",
})<{ scrollDirection: string; scrolledToTop: boolean }>`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${({ scrollDirection, scrolledToTop }) =>
      scrollDirection === "up" &&
      !scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${({ scrollDirection, scrolledToTop }) =>
      scrollDirection === "down" &&
      !scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      .hex-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
          polygon {
            fill: var(--navy);
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
        .hex-container {
          transform: translate(4px, 3px);
        }
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

type NavProps = {
  isHome?: boolean;
};

const Nav: React.FC<NavProps> = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection();
  // const prefersReducedMotion = usePrefersReducedMotion();
  // const pathname = usePathname();
  // console.log("isHome: ", isHome);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <div className="logo">
          <Link href="/" aria-label="home">
            <div className="hex-container">
              <IconHex />
            </div>
            <div className="logo-container">
              <IconLogo />
            </div>
          </Link>
        </div>

        <StyledLinks>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ol>
          <a
            className="resume-button"
            href="/files/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </StyledLinks>

        <Menu />
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
