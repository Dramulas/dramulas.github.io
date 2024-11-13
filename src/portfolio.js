/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/renny'; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2500, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: 'Ulas Renas Ordu',
  title: "Hi all, I'm Renas",
  subTitle: emoji(
    'My approach to software development is rooted in the user experience, continually focusing on improved functionality and application efficiency. \n I actively seek out new challenges, aiming to apply my technical knowledge and skills to drive innovative solutions. My professional trajectory showcases not only my abilities as a software developer but also my dedication to growth, adaptability, and commitment to delivering value. I am confident that my expertise and passion make me a strong asset to any team and project.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing', // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/dramulas',
  linkedin: 'https://www.linkedin.com/in/ulas-renas-ordu/',
  gmail: 'ulasrenasordu@gmail.com',
  medium: 'https://medium.com/@ulasrenas',
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Frontend / Backend / User Interfaces for your web and mobile applications'
    ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: '.Net',
      fontAwesomeClassname: 'fab fa-dot-net',
    },
    {
      skillName: 'flutter',
      fontAwesomeClassname: 'fa-brands fa-flutter',
    },
    {
      skillName: 'swift',
      fontAwesomeClassname: 'fab fa-swift',
    },
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },

    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Cukurova University',
      logo: require('./assets/images/cuLogo.png'),
      subHeader: 'Computer Engineering',
      duration: '2016 - 2021',
      desc: 'Cumulative GPA : 2.92',
      descBullets: [
        'Internship 1 : Magneton: Endless Runner Game (Unity / C#)',
        'Internship 2 : Bring It: Mobile Shopping App (Java)',
        'Thesis  : Detect My Puppy: Mobile Application That Detects Dog Breed (Java / Tensorflow) ',
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Mobile Developer',
      company: 'Arfitect',
      companylogo: require('./assets/images/arfitectLogo.png'),
      date: 'June 2021 – Present',
      desc: 'I am currently working as a Flutter Developer, where I continue to develop projects using different libraries and packages such as Mobx, Get, Provider, Logger, and Firebase.',
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Arfitect',
      companylogo: require('./assets/images/arfitectLogo.png'),
      date: 'June 2021 – Present',
      desc: 'I am currently working as a Full Stack Developer, where I develop both frontend and backend projects using various languages and frameworks such as JavaScript, HTML, CSS, React, jQuery, .NET, and C#.',
    },
    {
      role: ' Food and Beverage Associate',
      company: 'Kings Island a Cedar Fair Park',
      companylogo: require('./assets/images/kiLogo.png'),
      date: 'June 2019 – September 2019',
      desc: 'I participated in the Work and Travel student exchange program and worked as a Food and Beverage Associate at Kings Island amusement park, located in the Mason area of Ohio, USA.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/osigoLogo.png'),
      projectName: "Osigo - Turkey's most comprehensive insurance platform",
      projectDesc: 'I led the Osigo Mobile Side and made the developments.',
      footerLink: [
        {
          name: 'Visit Website',
          url: 'http://osigo.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/vBoxLogo.png'),
      projectName: 'VBlackBox',
      projectDesc:
        ' It is a monolithic application that I have developed, which feeds the front-end using APIs created by Riot. It is a loot box within the application where you can obtain character and equipment information.',
      footerLink: [
        {
          name: 'Visit App',
          url: 'https://github.com/Dramulas/VBlackBox',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'JavaScript Algorithms and Data Structures',
      subtitle:
        'Developer Certification, representing approximately 300 hours of coursework.',
      image: require('./assets/images/freecodecampLogo.png'),
      imageAlt:
        'Developer Certification, representing approximately 300 hours of coursework.',
      footerLink: [
        {
          name: 'Certification',
          url: 'https://www.freecodecamp.org/certification/fcca43c47ea-3171-4b06-aaf0-16ecd8b9c835/javascript-algorithms-and-data-structures',
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ],
    },
    {
      title: 'Programming for Everybody (Getting Started with Python)',
      subtitle:
        'an online non-credit course authorized by University of Michigan and offered through Coursera',
      image: require('./assets/images/courseraLogo.png'),
      imageAlt: 'Programming for Everybody',
      footerLink: [
        {
          name: 'Programming for Everybody',
          url: 'https://www.coursera.org/account/accomplishments/certificate/T9WV46SRBX8C ',
        },
      ],
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',
  displayMediumBlogs: 'true', // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: 'https://medium.com/arfitect/5-tools-packages-for-better-flutter-development-298473cafaf6',
      title: '5 Tools/Packages For Better Flutter Development',
      description: '5 Tools/Packages For Better Flutter Development',
    },
    {
      url: 'https://medium.com/arfitect/headless-context-management-systems-ba%C5%9Fs%C4%B1z-i%CC%87%C3%A7erik-y%C3%B6netim-sistemleri-40f4f76af75a',
      title: 'Headless Content Management Systems',
      description: 'Headless Content Management Systems',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me '),
  // ☎️
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  // number: '+90-544.......',
  email_address: 'ulasrenasordu@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
