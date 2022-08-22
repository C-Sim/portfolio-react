import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import GitHub from "@mui/icons-material/GitHub";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Portfolio = () => {
  return (
    <Grid container>
      <ImageList
        sx={{
          width: "100%",
        }}
        cols={4}
      >
        {projects.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <a href={item.deployedUrl} target="_blank">
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </a>
              <ImageListItemBar
                title={item.title}
                sx={{
                  color: "#4f6367ff",
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
    img: "../images/mentor-me.png",
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
    img: "../images/eComm-be.png",
    title: "eCommerce Back End",
    technologies: ["Sequelize", "Express", "MySQL", "Postman"],
    deployedUrl:
      "https://drive.google.com/file/d/1ZsGv_8xPxgYXTafwbNoTRKxS7y16YVn6/view?usp=sharing",
    gitHubRepo: "https://github.com/C-Sim/eComm-back-end",
  },
  {
    img: "../images/workforce-planner.png",
    title: "Workforce Planner",
    technologies: ["Node", "Inquirer", "MySQL", "Nodemon"],
    deployedUrl:
      "https://drive.google.com/file/d/1eIAQ1se44oPhi-0MjxnWu9Bn-g4_2Jlm/view?usp=sharing",
    gitHubRepo: "https://github.com/C-Sim/workforce-planner",
  },
  {
    img: "../images/note-taker.png",
    title: "Note Taker",
    technologies: ["JavaScript", "Express", "JSON", "Heroku"],
    deployedUrl: "https://guarded-tor-34423.herokuapp.com/",
    gitHubRepo: "https://github.com/C-Sim/note-taker",
    cols: 2,
  },
  {
    img: "../images/team-profile.png",
    title: "Team Profile Generator",
    technologies: ["JavaScript", "Inquirer", "Node", "Jest"],
    deployedUrl:
      "https://drive.google.com/file/d/1y5Z_9yz278-IN78ka1i0RD4YklBlRgDE/view",
    gitHubRepo: "https://github.com/C-Sim/team-profile-generator",
    cols: 2,
  },
  {
    img: "../images/rmg-sample.png",
    title: "ReadMe Generator",
    technologies: ["JavaScript", "Inquirer", "Node", "fs"],
    deployedUrl:
      "https://drive.google.com/file/d/1wCfdWHnkdtJ8Yb8K1r3Zj_ot0dvN9S-P/view",
    gitHubRepo: "https://github.com/C-Sim/readme-generator",
    rows: 2,
    cols: 2,
  },
  {
    img: "../images/virtual-holiday.png",
    title: "Virtual Holiday",
    technologies: ["jQuery", "API", "Video", "Audio", "Typewriter"],
    deployedUrl: "https://c-sim.github.io/virtual-holiday/index.html",
    gitHubRepo: "https://github.com/C-Sim/virtual-holiday",
    featured: true,
  },
  {
    img: "../images/weather-dashboard.png",
    title: "Weather Dashboard",
    technologies: ["JavaScript", "jQuery", "APIs", "JSON"],
    deployedUrl: "https://c-sim.github.io/weather-dashboard/",
    gitHubRepo: "https://github.com/C-Sim/weather-dashboard",
  },
  {
    img: "../images/day-planner.png",
    title: "Day Planner",
    technologies: ["JavaScript", "Bootstrap", "Moment.js"],
    deployedUrl: "https://c-sim.github.io/work_day_planner/",
    gitHubRepo: "https://github.com/C-Sim/work_day_planner",
  },
  {
    img: "../images/code-quiz.png",
    title: "Code Quiz",
    technologies: ["JavaScript", "DOM", "Local Storage"],
    deployedUrl: "https://c-sim.github.io/code_quiz/",
    gitHubRepo: "https://github.com/C-Sim/code_quiz",
  },
  {
    img: "../images/password-generator.png",
    title: "Password Generator",
    technologies: ["JavaScript", "HTML", "CSS"],
    deployedUrl: "https://c-sim.github.io/password_generator/",
    gitHubRepo: "https://github.com/C-Sim/password_generator",
  },
  {
    img: "../images/semantic-html-refactor.png",
    title: "Semantic HTML Refactor",
    technologies: ["HTML" - "CSS"],
    deployedUrl: "https://c-sim.github.io/semantic-html-refactor/",
    gitHubRepo: "https://github.com/C-Sim/semantic-html-refactor",
  },
];
