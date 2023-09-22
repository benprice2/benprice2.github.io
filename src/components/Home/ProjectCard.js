import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, path }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <Link to={path}>
            <img src={imgUrl} alt="project_img"/>
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </Link>
        </div>
    </Col>
  )
}