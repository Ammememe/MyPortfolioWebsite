import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    Java,
    mysql,
    git,
    docker,
    storytel,
    carrent,
    jobit,
    tripguide,
    swedcon18,
    threejs,
    aws,
    tele2,
    Elkjop,
    school,
    jensens
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cloud Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Internship Fullstack Developer",
      company_name: "Swedcon18",
      icon: swedcon18,
      iconBg: "#005c9d",
      date: "November 2023 - February 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating within a dynamic team of other interns, contribuiting to problem-solving and innovative thinking.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Retail Sales Associate",
      company_name: "Tele2",
      icon: tele2,
      iconBg: "#005c9d",
      date: "Jan 2022 - PRESENT",
      points: [
        "Exceptional customer service delivery.",
        "Expertise in providing tailored solutions for individuals and businesses.",
        "Skillfully identifying client needs and matching them with suitible Tele2 services.",
        
      ],
    },
    {
      title: "Marketing & Sales",
      company_name: "Storytel",
      icon: storytel,
      iconBg: "#005c9d",
      date: "June 2021 - August 2021",
      points: [
        "Role as a marketer and sales representative for Storytel.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Utilization of strategic engagement techniques to raise awareness about Storytels offerings.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],

      
    },
    
    {
      title: "Retail Sales Associate",
      company_name: "Elkjop",
      icon: Elkjop,
      iconBg: "#005c9d",
      date: "September 2018 - Mars 2020",
      points: [
        "Specialized in handling retail sales at Elgiganten, addressing the needs of both individual consumers and business clients",
        "Regularly outperformed sales objectives, maintaining efficiency within allocated budgets.",
        "Instrumental in boosting the store's performance, frequently achieving double the set monthly sales targets.",
        "Effective in promoting team unity and collaboration.",
      ],
      
    },
  ];

  const education = [
    {
      title: "Cloud Development AWS",
      school_name: "Jensens Yrkeshögskola",
      icon: jensens, // Replace with actual icon path
      iconBg: "#E6DEDD",
      date: "2021-2022",
      points: [
        "Avancerade Programmeringsfärdigheter: Betydande kunskap i objektorienterad programmering, särskilt med Java SE, och systematisk programutveckling. Färdigheter i att utveckla, felsöka och testa program med moderna programmeringsmetoder och verktyg.",
        "Cloud Computing Expertis: Djupgående förståelse för Cloud Computing, inklusive grundläggande och avancerad användning av AWS. Kunskap i molnbaserad infrastruktur, administrations- och säkerhetsprotokoll samt praktiska tillämpningar av molntjänster i verkliga projekt.",
        "Webb- och Databasutveckling: Färdigheter i webbutveckling med HTML5, CSS3, och JavaScript-ramverk, samt kompetens i databashantering. Erfarenhet av att använda SQL och AWS-specifika databaser som DynamoDB och RDS.",
        "Projektledning och Självledarskap: Erfarenhet av teknisk projektledning med agila metoder och DevOps-tänk. Utvecklade kompetenser i självledarskap, inklusive målsättning och attitydsutveckling, för att förbättra prestation och effektivitet i professionella miljöer."
        // Add more points here if needed
      ],
    },
    {
      title: "Software Engineering and Management",
      school_name: "University of Gothenburg | Chalmers University of Technology",
      icon: school, // Replace with actual icon path
      iconBg: "#E6DEDD",
      date: "2021-2022",
      points: [
        "Foundations of Object-Oriented Programming",
        // Add more points here if needed
      ],
    },
    // You can add more education entries here in the same format
  ];
  
    
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AWS hosted Portfolio",
      description:
      "AWS portfolio website hosted on S3 and uses CodePipeline for automated build and deployment. Automated process which updates the S3.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "CI/CD",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Ammememe/RecipeReactApp",
    },
    {
      name: "Library Application",
      description:
      "Simple library application using Java to CRUD, adding each customer and the book that has been borrowed to a MySQL database.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Ammememe/CRUDPerson",
    },
    {
      name: "Recipe Application",
      description:
      "RecipeReactApp is a React-built web app for browsing and sharing recipes, featuring simple search and recipe management for cooking enthusiasts.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Ammememe/RecipeReactApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, education };