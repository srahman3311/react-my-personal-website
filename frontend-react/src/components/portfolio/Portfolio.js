// Components
import ProjectTitle from "./project-details/ProjectTitle";
import ProjectDetails from "./project-details/ProjectDetails";


// Stylesheet
import "../../styles/Portfolio.css";


export default function Porfolio() {


    return (
        <div className="portfolio">
            <ProjectTitle />
            <ProjectDetails />
        </div>
    );

}