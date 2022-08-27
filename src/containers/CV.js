import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import { PageTitle } from "../components/atoms/PageTitle";
import { textFieldClasses } from "@mui/material";
import { textAlign } from "@mui/system";

export const CV = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ margin: 8, mt: 4, mb: 4 }}>
      <PageTitle title="Skills" />

      <Grid container>
        <ImageList
          sx={{
            width: isMobile ? "25%" : "100%",
            display: isMobile ? "flex" : "",
            flexDirection: isMobile ? "column" : "",
            alignItems: isMobile ? "center" : "",
            justifyContent: isMobile ? "top" : "",
            flexWrap: "wrap",
          }}
          cols={12}
        >
          <ImageListItem
            key="Subheader"
            cols={12}
            sx={{ paddingBottom: "8px" }}
          >
            <ListSubheader
              component="div"
              sx={{
                lineHeight: isMobile ? "64px" : "32px",
                textAlign: isMobile ? "center" : "",
              }}
            >
              Front End
            </ListSubheader>
          </ImageListItem>
          {frontEnd.map((item) => (
            <ImageListItem key={item.img} sx={{ m: 3 }}>
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
            width: isMobile ? "25%" : "100%",
            display: isMobile ? "flex" : "",
            flexDirection: isMobile ? "column" : "",
            alignItems: isMobile ? "center" : "",
            justifyContent: isMobile ? "top" : "",
            flexWrap: "wrap",
          }}
          cols={12}
        >
          <ImageListItem
            key="Subheader"
            cols={12}
            sx={{ paddingBottom: "8px" }}
          >
            <ListSubheader
              component="div"
              sx={{
                lineHeight: isMobile ? "64px" : "32px",
                textAlign: isMobile ? "center" : "",
              }}
            >
              Back End
            </ListSubheader>
          </ImageListItem>
          {backEnd.map((item) => (
            <ImageListItem key={item.img} sx={{ m: 3 }}>
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
            width: isMobile ? "25%" : "100%",
            display: isMobile ? "flex" : "",
            flexDirection: isMobile ? "column" : "",
            alignItems: isMobile ? "center" : "",
            justifyContent: isMobile ? "top" : "",
            flexWrap: "wrap",
          }}
          cols={12}
        >
          <ImageListItem
            key="Subheader"
            cols={12}
            sx={{ paddingBottom: "8px" }}
          >
            <ListSubheader
              component="div"
              sx={{ lineHeight: "32px", textAlign: isMobile ? "center" : "" }}
            >
              Development Tools
            </ListSubheader>
          </ImageListItem>
          {tools.map((item) => (
            <ImageListItem key={item.img} sx={{ m: 3 }}>
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
            width: isMobile ? "25%" : "100%",
            display: isMobile ? "flex" : "",
            flexDirection: isMobile ? "column" : "",
            alignItems: isMobile ? "center" : "",
            justifyContent: isMobile ? "top" : "",
            flexWrap: "wrap",
          }}
          cols={12}
        >
          <ImageListItem
            key="Subheader"
            cols={12}
            sx={{ paddingBottom: "8px" }}
          >
            <ListSubheader
              component="div"
              sx={{
                lineHeight: "32px",
                textAlign: isMobile ? "center" : "",
              }}
            >
              Professional Skills
            </ListSubheader>
          </ImageListItem>
          {skills.map((item) => (
            <ImageListItem key={item.img} sx={{ m: 3 }}>
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
    img: "https://seeklogo.com/images/M/momentjs-logo-4DF96FC733-seeklogo.com.png",
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
    img: "https://www.productplan.com/uploads/Stages-in-Product-Management-Process.png",
    title: "Project Management",
  },
  {
    img: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3QlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    title: "Product Development",
  },
  {
    img: "https://images.unsplash.com/photo-1632137349293-14d5e9f0e0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    title: "Leadership & Management",
  },
  {
    img: "https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2013/06/24135803/Bplans-Headers-13.jpg",
    title: "Stakeholder Engagement",
  },
  {
    img: "https://www.venafi.com/sites/default/files/content/blog/2020-02/handshake_newblog.png",
    title: "Negotiation & Influencing",
  },

  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3QlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    title: "Data Analysis",
  },
  {
    img: "https://img.capital.com/imgs/glossary/750xx/Supply%20definition_0.jpg",
    title: "Supplier Management",
  },

  {
    img: "https://cdn.pixabay.com/photo/2017/03/27/21/31/money-2180330__480.jpg",
    title: "Commercial Awareness",
  },
  {
    img: "https://www.socialsciencespace.com/wp-content/uploads/Management-studies.jpg",
    title: "Business Development",
  },
  {
    img: "https://cdn.thefabricator.com/a/the-manufacturing-fundamentals-of-follow-through-in-continuous-improvement-1626819095.jpg",
    title: "Continuous Improvement",
  },
];
