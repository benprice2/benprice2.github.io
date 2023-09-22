import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project_img_weatherapp.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";

export const Projects = () => {

  const api_projects = [
    {
      title: "Basic API Weather App",
      description: "Weather Application",
      imgUrl: projImg1,
      path: '/WeatherApp'
    },
    {
      title: "Complex API Exercise App",
      description: "Exercise Application",
      imgUrl: projImg2,
      path: '/WeatherApp'
    },
    {
      title: "Restful API",
      description: "Design & Development",
      imgUrl: projImg3,
      path: '/WeatherApp'
    }
  ];

  const commerce_projects = [
    {
      title: "Basic Store Application",
      description: "Store Application",
      imgUrl: projImg1,
      path: '/WeatherApp'
    },
    {
      title: "Complex Online Store",
      description: "Affiliate Amazon Store",
      imgUrl: projImg2,
      path: '/WeatherApp'
    }
  ];

  const company_websites = [
    {
      title: "Salazar Marine Website",
      description: "Boat Building, Spray Painting and Maintenance",
      imgUrl: projImg1,
      path: '/WeatherApp'
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">API Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Commerce Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Company Websites</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          api_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    <Row>
                        {
                          commerce_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          company_websites.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background-img" src={colorSharp2} ></img>
    </section>
  )
}

export default Projects