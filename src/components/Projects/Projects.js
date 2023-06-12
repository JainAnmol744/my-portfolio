import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from '../../Assets/Projects/weather.jpg';
import mailkaro from '../../Assets/Projects/mail-karo.jpg'
import inotebook from '../../Assets/Projects/inotebook.jpg';
import news from '../../Assets/Projects/news.jpg';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mailkaro}
              isBlog={false}
              title="Mail-Karo"
              description=" Mailbox client is an application where users can send and receive mail.Each user has their own account and users cannot access other users data"
              ghLink="https://github.com/JainAnmol744/Mail-Karo"
              demoLink="https://mail-karo.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-App"
              description=" A weather forecast site, in which user have to enter the city name and it will display the weather conditions of a city. It is built using express, EJS and OpenWeatherMapAPI. "
              ghLink="https://github.com/JainAnmol744/Weather-App"
              demoLink="https://weather-app-three-eta-50.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inotebook}
              isBlog={false}
              title="iNotebook-App"
              description="A Notebook site, to record your note items.It is built using express framework, EJS and it uses MongoDB Atlas as its database. Offers CRUD operations.Login and Signup functionality provides security to your notes. Only authorize user can access notes."
              ghLink="https://github.com/JainAnmol744/iNotebook-App"
              demoLink="https://i-notebook-app.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News-Portal"
              description="A daily journal news website. It is built on React framework and EJS and NEWSAPI."
              ghLink="https://github.com/JainAnmol744/News-App"
              demoLink="news-app-tau-ruby.vercel.app"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
