"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";
import { usePathname } from "next/navigation"; // ✅ Correct hook for Next.js App Router
import { Head, Loader, Nav, Social, Email, Footer } from "./index";

interface LayoutProps {
  children: React.ReactNode;
}

const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledFooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  // Function to add rel="noopener noreferrer" to external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    allLinks.forEach((link) => {
      if (link.host !== window.location.host) {
        link.setAttribute("rel", "noopener noreferrer");
        link.setAttribute("target", "_blank");
      }
    });
  };

  useEffect(() => {
    if (!isLoading) {
      handleExternalLinks();
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {isLoading && isHome ? (
            <div className="h-[100vh] w-[100vw] bg-[var(--navy)] overflow-hidden">
              <div className="h-[100vh] w-[100vw]"></div>
              <Loader finishLoading={() => setIsLoading(false)} />
            </div>
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
                <StyledFooterDiv>
                </StyledFooterDiv>
            </StyledContent>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
