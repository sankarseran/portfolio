"use client";

import React from "react";
import styled from "styled-components";
import { About, Contact, Jobs, Layout, Name } from "./component/index";
import "./font.css";
import "./globals.css";
import { jobsData } from "@/app/config";
const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 0 0 !important;
`;

export default function Home() {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Name />
        <About />
        <Jobs jobsData={jobsData} />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}
// <Hero />
{
  /* 
<Jobs />
<Featured />
<Projects />
<Contact /> */
}
