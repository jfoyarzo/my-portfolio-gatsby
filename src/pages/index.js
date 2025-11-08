import React from "react";
import {
  AboutSection,
  /* ArticlesSection, */
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Felipe Oyarzo's Portfolio" />
      <Page>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <InterestsSection sectionId="stack" heading="Tech Stack" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <AboutSection sectionId="about" heading="About Me" />
        <ContactSection sectionId="contact" heading="Connect" />
      </Page>
    </>
  );
}
