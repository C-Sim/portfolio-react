import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";

import codeBlog from "../images/code-blog.png";
import codeQuiz from "../images/code-quiz.png";
import dayPlanner from "../images/day-planner.png";
import eCommBE from "../images/eComm-be.png";
import mentorMe from "../images/mentor-me.png";
import noteTaker from "../images/note-taker.png";
import passwordGenerator from "../images/password-generator.png";
import regex from "../images/regex.png";
import readMeGenerator from "../images/rmg-sample.png";
import semanticRefactor from "../images/semantic-html-refactor.png";
import socialNetwork from "../images/social-network.png";
import teamProfile from "../images/team-profile.png";
import virtualHoliday from "../images/virtual-holiday.png";
import weatherDashboard from "../images/weather-dashboard.png";
import workforcePlanner from "../images/workforce-planner.png";

export const Portfolio = () => {
  return (
    <Grid container>
      <ImageList
        sx={{
          width: "100%",
        }}
        cols={4}
        spacing={4}
      >
        {projects.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;
          const height = item.featured ? "400rem" : "200rem";

          return (
            <ImageListItem
              key={item.img}
              cols={cols}
              rows={rows}
              sx={{ border: 4, borderColor: "#4f6367ff" }}
            >
              <a href={item.deployedUrl} target="_blank" rel="noreferrer">
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  width="100%"
                  height={height}
                />
              </a>
              <ImageListItemBar
                title={item.title}
                sx={{
                  color: "#4f6367ff",
                  backgroundColor: "#4f6367ff",
                  fontSize: 10,
                  fontWeight: 100,
                }}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`GitHub repo for ${item.title}`}
                    href={item.gitHubRepo}
                    target="_blank"
                    className="icon"
                  >
                    <GitHub />
                  </IconButton>
                }
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Grid>
  );
};

const projects = [
  // {
  //   img: "",
  //   title: "",
  //   technologies: [],
  //   deployedUrl: "",
  //   gitHubRepo: "",
  // },
  {
    img: codeBlog,
    title: "Code Blog",
    technologies: [
      "Handlebars",
      "bcrypt",
      "Express-session",
      "Connect-session-sequelize",
      "MySQL2",
      "Sequelize",
      "Express",
      "Node",
      "Nodemon",
      "dotenv",
      "Heroku",
      "HTML",
      "CSS",
    ],
    deployedUrl: "https://obscure-everglades-69696.herokuapp.com/",
    gitHubRepo: "https://github.com/C-Sim/code-blog",
    featured: true,
  },
  {
    img: socialNetwork,
    title: "Social Network API",
    technologies: [
      "MongoDB",
      "Mongoose ODM",
      "Express",
      "Node",
      "Nodemon",
      "Date-fns",
      "dotenv",
      "Postman",
      "Validator",
    ],
    deployedUrl:
      "https://drive.google.com/file/d/1nzQcFIwDrSmo95g4HgRDpLq7Lse1V0mB/view?usp=sharing",
    gitHubRepo: "https://github.com/C-Sim/social-network-api",
  },

  {
    img: regex,
    title: "RegEx Tutorial",
    technologies: ["RegEx", "Gist"],
    deployedUrl:
      "https://gist.github.com/C-Sim/96f7e9c795e5a16e5d032aa40f1aa665",
    gitHubRepo:
      "https://gist.github.com/C-Sim/96f7e9c795e5a16e5d032aa40f1aa665",
  },
  {
    img: mentorMe,
    title: "Mentor Me",
    technologies: [
      "Express-Session",
      "Connect-Session-Sequelize",
      "MySQL",
      "Handlebars",
      "bcrypt",
      "Nodemon",
      "dotenv",
      "Bootstrap",
      "Heroku",
    ],
    deployedUrl: "https://lit-atoll-12366.herokuapp.com/",
    gitHubRepo: "https://github.com/C-Sim/coding-mentoring",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: eCommBE,
    title: "eCommerce Back End",
    technologies: ["Sequelize", "Express", "MySQL", "Postman"],
    deployedUrl:
      "https://drive.google.com/file/d/1ZsGv_8xPxgYXTafwbNoTRKxS7y16YVn6/view?usp=sharing",
    gitHubRepo: "https://github.com/C-Sim/eComm-back-end",
  },
  {
    img: workforcePlanner,
    title: "Workforce Planner",
    technologies: ["Node", "Inquirer", "MySQL", "Nodemon"],
    deployedUrl:
      "https://drive.google.com/file/d/1eIAQ1se44oPhi-0MjxnWu9Bn-g4_2Jlm/view?usp=sharing",
    gitHubRepo: "https://github.com/C-Sim/workforce-planner",
  },
  {
    img: noteTaker,
    title: "Note Taker",
    technologies: ["JavaScript", "Express", "JSON", "Heroku"],
    deployedUrl: "https://guarded-tor-34423.herokuapp.com/",
    gitHubRepo: "https://github.com/C-Sim/note-taker",
    cols: 2,
  },
  {
    img: teamProfile,
    title: "Team Profile Generator",
    technologies: ["JavaScript", "Inquirer", "Node", "Jest"],
    deployedUrl:
      "https://drive.google.com/file/d/1y5Z_9yz278-IN78ka1i0RD4YklBlRgDE/view",
    gitHubRepo: "https://github.com/C-Sim/team-profile-generator",
    cols: 2,
  },
  {
    img: readMeGenerator,
    title: "ReadMe Generator",
    technologies: ["JavaScript", "Inquirer", "Node", "fs"],
    deployedUrl:
      "https://drive.google.com/file/d/1wCfdWHnkdtJ8Yb8K1r3Zj_ot0dvN9S-P/view",
    gitHubRepo: "https://github.com/C-Sim/readme-generator",
    rows: 2,
    cols: 2,
  },
  {
    img: weatherDashboard,
    title: "Weather Dashboard",
    technologies: ["JavaScript", "jQuery", "APIs", "JSON"],
    deployedUrl: "https://c-sim.github.io/weather-dashboard/",
    gitHubRepo: "https://github.com/C-Sim/weather-dashboard",
  },

  {
    img: virtualHoliday,
    title: "Virtual Holiday",
    technologies: ["jQuery", "API", "Video", "Audio", "Typewriter"],
    deployedUrl: "https://c-sim.github.io/virtual-holiday/index.html",
    gitHubRepo: "https://github.com/C-Sim/virtual-holiday",
    featured: true,
  },
  {
    img: dayPlanner,
    title: "Day Planner",
    technologies: ["JavaScript", "Bootstrap", "Moment.js"],
    deployedUrl: "https://c-sim.github.io/work_day_planner/",
    gitHubRepo: "https://github.com/C-Sim/work_day_planner",
  },
  {
    img: codeQuiz,
    title: "Code Quiz",
    technologies: ["JavaScript", "DOM", "Local Storage"],
    deployedUrl: "https://c-sim.github.io/code_quiz/",
    gitHubRepo: "https://github.com/C-Sim/code_quiz",
  },
  {
    img: passwordGenerator,
    title: "Password Generator",
    technologies: ["JavaScript", "HTML", "CSS"],
    deployedUrl: "https://c-sim.github.io/password_generator/",
    gitHubRepo: "https://github.com/C-Sim/password_generator",
  },
  {
    img: semanticRefactor,
    title: "Semantic HTML Refactor",
    technologies: ["HTML" - "CSS"],
    deployedUrl: "https://c-sim.github.io/semantic-html-refactor/",
    gitHubRepo: "https://github.com/C-Sim/semantic-html-refactor",
  },
];
