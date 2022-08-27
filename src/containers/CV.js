import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import { PageTitle } from "../components/atoms/PageTitle";

export const CV = () => {
  return (
    <Box sx={{ margin: 8, mt: 4, mb: 4 }}>
      <PageTitle title="Skills" />

      <Grid container>
        <ImageList
          sx={{
            width: "100%",
          }}
          cols={12}
        >
          <ImageListItem
            key="Subheader"
            cols={12}
            sx={{ paddingBottom: "8px" }}
          >
            <ListSubheader component="div" sx={{ lineHeight: "32px" }}>
              Front End
            </ListSubheader>
          </ImageListItem>
          {frontEnd.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Typography
                position="below"
                sx={{
                  textAlign: "center",
                  color: "#4f6367ff",
                  fontSize: "0.72rem",
                  fontWeight: 100,
                  paddingTop: "8px",
                }}
              >
                {item.title}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>

        <ImageList
          sx={{
            width: "100%",
          }}
          cols={12}
        >
          <ImageListItem
            key="Subheader"
            cols={12}
            sx={{ paddingBottom: "8px" }}
          >
            <ListSubheader component="div" sx={{ lineHeight: "32px" }}>
              Back End
            </ListSubheader>
          </ImageListItem>
          {backEnd.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Typography
                position="below"
                sx={{
                  textAlign: "center",
                  color: "#4f6367ff",
                  fontSize: "0.72rem",
                  fontWeight: 100,
                  paddingTop: "8px",
                }}
              >
                {item.title}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>

        <ImageList
          sx={{
            width: "100%",
          }}
          cols={12}
        >
          <ImageListItem
            key="Subheader"
            cols={12}
            sx={{ paddingBottom: "8px" }}
          >
            <ListSubheader component="div" sx={{ lineHeight: "32px" }}>
              Development Tools
            </ListSubheader>
          </ImageListItem>
          {tools.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Typography
                position="below"
                sx={{
                  textAlign: "center",
                  color: "#4f6367ff",
                  fontSize: "0.72rem",
                  fontWeight: 100,
                  paddingTop: "8px",
                }}
              >
                {item.title}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>

        <ImageList
          sx={{
            width: "100%",
          }}
          cols={12}
        >
          <ImageListItem
            key="Subheader"
            cols={12}
            sx={{ paddingBottom: "8px" }}
          >
            <ListSubheader component="div" sx={{ lineHeight: "32px" }}>
              Professional Skills
            </ListSubheader>
          </ImageListItem>
          {skills.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Typography
                position="below"
                sx={{
                  textAlign: "center",
                  color: "#4f6367ff",
                  fontSize: "0.72rem",
                  fontWeight: 100,
                  paddingTop: "8px",
                }}
              >
                {item.title}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>

        <Typography
          sx={{
            textAlign: "center",
            width: "100vw",
            padding: 4,
            color: "#4f6367ff",
            fontWeight: 100,
            fontSize: "0.9rem",
          }}
        >
          For more detail on my skills and experience, please find a copy of my
          CV{" "}
          <a
            sx={{
              color: "#4f6367ff",
              fontWeight: 100,
              textDecoration: "none",
            }}
            href="https://resume.io/r/O2cItbDOx"
          >
            here
          </a>
          .
        </Typography>
      </Grid>
    </Box>
  );
};

const frontEnd = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    title: "React",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    title: "HTML5",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    title: "CSS3",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    title: "MaterialUI",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    title: "Bootstrap",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg",
    title: "jQuery",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/handlebars/handlebars-original-wordmark.svg",
    title: "Handlebars",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bulma/bulma-plain.svg",
    title: "Bulma",
  },
  {
    img: "https://toppng.com/uploads/preview/momentjs-logo-11609369329b8uomvn3ng.png",
    title: "Moment",
  },
  {
    img: "https://iconape.com/wp-content/files/pm/370894/svg/370894.svg",
    title: "FontAwesome",
  },
  {
    img: "https://jquery-plugins.net/image/plugin/typewriterjs-javascript-plugin-for-cool-typewriter-effect.png",
    title: "Typewriter",
  },
];

const backEnd = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    title: "JavaScript",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "MERN",
  },

  {
    img: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    title: "Jest",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    title: "MySQL ",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "Node",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    title: "Express",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    title: "MongoDB",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain-wordmark.svg",
    title: "GraphQL",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original-wordmark.svg",
    title: "Sequelize",
  },
  {
    img: "https://raw.githubusercontent.com/SBoudrias/Inquirer.js/master/assets/inquirer_readme.svg?sanitize=true",
    title: "Inquirer",
  },
  {
    img: "https://gitlab.com/uploads/-/system/project/avatar/9910889/875327.png",
    title: "REST APIs",
  },

  {
    img: "https://avatars.githubusercontent.com/u/32372333?s=280&v=4",
    title: "Axios",
  },
];

const tools = [
  {
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    title: "Git",
  },
  {
    img: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
    title: "Heroku",
  },
  {
    img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    title: "Figma",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original-wordmark.svg",
    title: "Jira",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "Postman",
  },
  {
    img: "https://www.jawsdb.com/theme/images/shark.svg",
    title: "JawsDB",
  },
  {
    img: "https://remotepm.lucianocastro.com/wp-content/uploads/2020/11/agile_logo.png",
    title: "Agile",
  },
  {
    img: "https://i0.wp.com/www.ogmcs.com/wp-content/uploads/2019/03/tdd-banner.jpg?fit=696%2C393",
    title: "TDD",
  },
  {
    img: "https://miro.medium.com/max/300/0*goJuBKoyL-zZX4RB.png",
    title: "OOP",
  },
  {
    img: "https://cdn2.iconfinder.com/data/icons/programming-76/512/MVC-model-view-controller-512.png",
    title: "MVC",
  },
  {
    img: "https://static.thenounproject.com/png/1320675-200.png",
    title: "DOM",
  },
];

const skills = [
  {
    img: "https://images.unsplash.com/photo-1595013694368-aab1b4f70dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2plY3QlMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    title: "Project Management",
  },
  {
    img: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3QlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    title: "Product Development",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Leadership & Management",
  },
  {
    img: "https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGVhZGVyc2hpcCUyMHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    title: "Negotiation & Influencing",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Stakeholder Management",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Supplier Management",
  },

  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3QlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    title: "Data Analysis",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Commercial Awareness",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Continuous Improvement",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Business Development",
  },
];
