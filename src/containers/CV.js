import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const CV = () => {
  return (
    <Grid container>
      <ImageList>
        <ImageListItem key="Subheader" cols={12}>
          <ListSubheader component="div">Front End</ListSubheader>
        </ImageListItem>
        {frontEnd.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=64&fit=crop&auto=format`}
              srcSet={`${item.img}?w=64&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              position="below"
              sx={{
                textAlign: "center",
                color: "#4f6367ff",
                fontSize: 10,
                fontWeight: 100,
              }}
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList>
        <ImageListItem key="Subheader" cols={12}>
          <ListSubheader component="div">Back End</ListSubheader>
        </ImageListItem>
        {backEnd.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=64&fit=crop&auto=format`}
              srcSet={`${item.img}?w=64&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              position="below"
              sx={{
                textAlign: "center",
                color: "#4f6367ff",
                fontSize: 10,
                fontWeight: 100,
              }}
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList>
        <ImageListItem key="Subheader" cols={12}>
          <ListSubheader component="div">Development Tools</ListSubheader>
        </ImageListItem>
        {tools.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=64&fit=crop&auto=format`}
              srcSet={`${item.img}?w=64&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              position="below"
              sx={{
                textAlign: "center",
                color: "#4f6367ff",
                fontSize: 10,
                fontWeight: 100,
              }}
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList>
        <ImageListItem key="Subheader" cols={12}>
          <ListSubheader component="div">Professional Skills</ListSubheader>
        </ImageListItem>
        {skills.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=64&fit=crop&auto=format`}
              srcSet={`${item.img}?w=64&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              position="below"
              sx={{
                textAlign: "center",
                color: "#4f6367ff",
                fontSize: 10,
                fontWeight: 100,
              }}
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Typography
        sx={{
          textAlign: "center",
          width: "100vw",
          padding: 4,
          color: "#eef5dbff",
          fontWeight: 100,
        }}
      >
        For more detail on my skills and experience, please find a copy of my CV{" "}
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
  );
};

const frontEnd = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    title: "React",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    title: "HTML5",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    title: "CSS3",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    title: "MaterialUI",
    cols: 1,
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    title: "Bootstrap",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg",
    title: "jQuery",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg",
    title: "Moment",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/handlebars/handlebars-original-wordmark.svg",
    title: "Handlebars",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg",
    title: "FontAwesome",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bulma/bulma-plain.svg",
    title: "Bulma",
    cols: 1,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg",
    title: "Typewriter",
    cols: 1,
  },
];

const backEnd = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    title: "JavaScript ES6",
    rows: 2,
    cols: 2,
    featured: true,
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
    cols: 2,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    title: "Express",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "NoSQL",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    title: "MongoDB",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "Mongoose",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain-wordmark.svg",
    title: "GraphQL",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "Inquirer",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original-wordmark.svg",
    title: "Sequelize",
    cols: 2,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "RESTful APIs",
    cols: 2,
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "Axios",
    cols: 2,
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "bcrypt",
    cols: 2,
  },
];

const tools = [
  {
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    title: "Git",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
    title: "Heroku",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "JawsDB",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "Postman",
    cols: 2,
  },

  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Agile",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "TDD",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "OOP",
    rows: 2,
    cols: 2,
    featured: true,
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
    rows: 2,
    cols: 2,
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
    title: "Leadership",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Stakeholder Management",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Data Analysis",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Lean Six Sigma",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Commercial Awareness",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "Continuous Improvement",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "Business Development",
  },
];
