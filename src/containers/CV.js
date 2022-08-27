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
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Moment",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "FontAwesome",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
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
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Inquirer",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "REST APIs",
  },

  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
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
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "JawsDB",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Agile",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "TDD",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "OOP",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "MVC",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "DOM",
  },
];

const skills = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Project Management",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Product Development",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "People Management",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Leadership & Influencing",
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
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Data Analysis",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Commercial Awareness",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Continuous Improvement",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Business Development",
  },
];
