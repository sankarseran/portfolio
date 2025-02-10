export const config = {
  email: "sankaralingam.psg@gmail.com",
};
export const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/sanksrseran",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/https://www.linkedin.com/in/sankaralingam-seranthian-625086a3/",
  },
] as const;

export const navLinks = [
  {
    name: "About",
    url: "/#about",
  },
  {
    name: "Experience",
    url: "/#jobs",
  },
  {
    name: "Work",
    url: "/#projects",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
] as const;

export const colors = {
  green: "#64ffda",
  navy: "#0a192f",
  darkNavy: "#020c1b",
};

export const srConfig = (delay: number = 200, viewFactor: number = 0.25) => ({
  origin: "bottom",
  distance: "20px",
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

export const jobsData = [
  {
    title: "Front End Developer",
    companyTab: "ECABS",
    company: "ECABS Technologies Ltd",
    location: "Malta",
    range: "11/2023 – Current",
    url: "https://www.ecabs.com.mt", // Replace with actual URL if available
    html: `
      <ul>
        <li><b>Lead a team of front-end developers</b>, mentoring and providing technical guidance to ensure high-quality code delivery and fostering a collaborative team culture focused on continuous improvement</li>
        <li><b>Developed and maintained reusable front-end libraries</b> using Angular Material, improving development efficiency and promoting standardisation across projects</li>
        <li><b>Built API endpoints</b> with Nest.js and integrated Elasticsearch to optimise data retrieval and enhance search performance</li>
        <li><b>Coordinated across the software development lifecycle</b>, working closely with Product Owners, Designers, and QA teams to define project requirements, ensure alignment with business goals, and deliver high-quality, bug-free releases</li>
        <li><b>Provided technical leadership</b> in web application development using Angular 16, ensuring best practices and performance standards, while conducting regular code reviews for maintainability</li>
        <li><b>Lead agile development processes</b>, facilitating daily stand-ups, sprint planning, and retrospectives, ensuring smooth project alignment and continuous progress</li>
        <li><b>Worked with the back-end team</b> to validate code logic and queries, ensuring accurate and efficient integration with front-end tasks</li>
        <li><b>Oversaw project planning and execution</b>, ensuring timely delivery within scope, and coordinated with cross-functional teams to align project goals and deliverables</li>
        <li><b>Involved in performance evaluations</b> for team members, providing constructive feedback, identifying areas for improvement, and contributing to recruitment and onboarding of new team members</li>
      </ul>
    `,
  },
  {
    title: "Front End Web Developer",
    companyTab: "RS2",
    company: "RS2 Software plc",
    location: "Malta",
    range: "06/2021 – 10/2023",
    url: "https://www.rs2.com", // Replace with actual URL if available
    html: `
      <ul>
        <li><b>Collaborated with cross-functional teams</b> (Business Analysts, Project Managers, stakeholders) to ensure project goals were aligned with client needs and business objectives</li>
        <li><b>Led the migration of a legacy system to Vue.js 3 and TypeScript</b>, providing technical direction and ensuring smooth integration with the back-end Java and MySQL codebase</li>
        <li><b>Developed web applications</b> using Vue.js 3, TypeScript, and Angular, while gaining hands-on expertise with Knockout.js and SVN for legacy systems</li>
        <li><b>Rebuilt a JavaScript app into TypeScript</b> within a tight deadline, improving scalability, maintainability, and performance</li>
        <li><b>Enhanced back-end functionality</b> by optimizing Java and MySQL code to support new features during the migration</li>
        <li><b>Developed API endpoints</b> using Express.js and MySQL/JSON DB for POC, validating scalability and future growth potential</li>
        <li><b>Built a tracking app</b> using Angular and Firebase Firestore, leveraging Firebase Functions for job scheduling & data processing</li>
        <li><b>Initiated technical leadership and Peer-reviewed code</b>, ensuring high-quality, maintainable code by implementing coding standards, conducting code reviews, and fostering a collaborative, solution-oriented environment</li>
        <li><b>Worked in agile processes</b>, tracked user stories & bugs in JIRA, facilitated sprint planning & retrospectives for timely delivery</li>
        <li><b>Identified project risks</b>, developed mitigation strategies, and resolved issues promptly to stay on track and meet deadlines</li>
      </ul>
    `,
  },
  {
    title: "Software Developer",
    companyTab: "Crum & Forster",
    company: "Crum & Forster",
    location: "Bangalore",
    range: "10/2019 – 06/2021",
    url: "https://www.crumandforster.com", // Replace with actual URL if available
    html: `
      <ul>
        <li><b>Developed two web applications</b> using Next.js and Ant Design for the front-end, and Nest.js, Node.js, TypeScript, and MySQL for the back-end, ensuring seamless integration and optimal performance</li>
        <li><b>Built a dynamic web application</b> that runs based on JSON input, utilizing Next.js and Ant Design to create reusable components and dynamic forms</li>
        <li><b>Designed and implemented a rule engine</b> using Nest.js, enabling the processing of data from Excel files stored in S3 and hosted in AWS Serverless, providing a scalable API endpoint for data consumption</li>
        <li><b>Collaborated closely with stakeholders</b> to optimize user efficiency and recommended improvements to existing systems, ensuring they run smoothly and meet business objectives</li>
        <li><b>Actively participated in scrum meetings</b> and stand-ups, contributing to improvements in code quality, and providing input on logical enhancements during peer reviews</li>
        <li><b>Served as the primary liaison</b> between the project team, clients, and senior management, providing regular updates and addressing any concerns or inquiries, ensuring alignment with project goals and timelines</li>
      </ul>
    `,
  },
  {
    title: "Programmer Analyst",
    companyTab: "Augusta",
    company: "Augusta HiTech",
    location: "Bangalore",
    range: "07/2018 – 10/2019",
    url: "https://www.augustahitech.com", // Replace with actual URL if available
    html: `
      <ul>
        <li><b>Developed 3+ full-stack applications</b> to analyse and process data for various clients, ensuring smooth data flow and efficiency</li>
        <li><b>Created reusable Angular directives and pipes</b>, published for organisation use, promoting consistency and standards</li>
        <li><b>Collaborated closely with app development teams</b>, product managers, and QA to identify issues, define testing methods, and establish best practices for seamless project execution</li>
        <li><b>Developed and maintained RESTful APIs</b> using C# and ASP.NET, integrating with MySQL to ensure smooth communication between back-end and front-end systems</li>
        <li><b>Implemented video call features</b> using TokBox, and added NgRx to manage application state across multiple pages, ensuring a smooth user experience</li>
        <li><b>Worked with multiple Angular versions</b> for front-end development, and utilised Express.js, Node.js, MongoDB, and MySQL for back-end development, adapting to the project requirements</li>
        <li><b>Explored new features</b> and developed working models for internal teams. Also created POCs to thoroughly analyse client requirements, simplifying the development phase by leveraging scalable features</li>
      </ul>
    `,
  },
  {
    title: "Full Stack Developer",
    companyTab: "LogBase",
    company: "LogBase Technologies",
    location: "India",
    range: "08/2016 – 06/2018",
    url: "https://www.logbase.io", // Replace with actual URL if available
    html: `
      <ul>
        <li><b>Gained hands-on expertise in web application development</b>, working with Angular for front-end and SQL, DynamoDB, Express.js, and Hapi.js for back-end technologies</li>
        <li><b>Developed Workbox tools to implement key Progressive Web App (PWA) features</b>, including service workers, background sync, runtime data caching, cacheable responses, and build manifests</li>
        <li><b>Built a Time-box module</b>, providing mini email functionality to manage workflows between application users</li>
        <li><b>Developed and released several NPM packages</b> for both front-end and back-end, streamlining development and enhancing functionality</li>
        <li><b>Lead the design and development phases</b> for 3+ projects, owning the process from inception to deployment</li>
      </ul>
    `,
  },
];

// Export types for better TypeScript support
export type SocialMedia = (typeof socialMedia)[number];
export type NavLink = (typeof navLinks)[number];
export type Colors = typeof colors;
