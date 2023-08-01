import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Led the frontend development of various web projects, crafting modern and responsive user interfaces. Collaborated with cross-functional teams to ensure seamless integration of design and functionality. Optimized UI/UX elements to enhance user engagement and deliver exceptional user experiences.`,
  "Frontend Development | Responsive Design | UI/UX Optimization",
  "Modern Web Experiences",
  ""
);

hoverChangeExperience(
  ".zuplae",
  `Developed high-performance web interfaces with a focus on speed and responsiveness. Implemented performance optimization techniques to achieve fast loading times and smooth interactions. Ensured compliance with web accessibility standards to make the applications inclusive and accessible to all users.`,
  "Frontend Development | Performance Optimization | Web Accessibility",
  "High-Performance Interfaces",
  ""
);

hoverChangeExperience(
  ".codigofontetv",
  `Translated design mockups into pixel-perfect frontend code, ensuring a seamless transition from concept to reality. Worked closely with designers to understand their vision and collaborated to make design concepts come to life. Maintained a strong attention to detail to deliver visually stunning and polished interfaces.`,
  "Frontend Development | UI Implementation | Design Collaboration",
  "Transforming Designs into Code",
  ""
);

hoverChangeExperience(
  ".contweb",
  `Leveraged CSS animations and interaction design to create engaging and interactive user experiences. Implemented subtle animations and micro-interactions to improve user engagement and delight. Employed best practices to balance aesthetics and performance, resulting in intuitive and delightful web interactions.`,
  "Frontend Development | CSS Animations | Interaction Design",
  "Enhancing User Experiences through Animation",
  ""
);

hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark the elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language composed of 'layers', created with the purpose of styling web pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements on web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds some features that are not available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on creating user interfaces in a component-based way."
);
hoverChangeDescription(
  ".next",
  "Next.js is a web framework that enables functionalities such as server-side rendering and static site generation for web applications based on React."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a CSS framework that provides us with utility classes for the purpose of styling pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features not present in the language natively, in addition to making it statically typed."
);