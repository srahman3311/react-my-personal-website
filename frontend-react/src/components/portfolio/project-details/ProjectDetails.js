// Components
import TitleHeader from "../../reuseable-components/TitleHeader";
import DescriptionHeader from "../../reuseable-components/DescriptionHeader";
import ItemDescription from "../../reuseable-components/ItemDescription";
import BasicInfo from "../../welcome-section/BasicInfo";




// Stylesheet
import "../../../styles/Portfolio.css";






export default function ProjectDetails() {

    const projectDetails = `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
    centuries but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;



    return (
        <div className="projectDetails_container">
            <TitleHeader content = "Project Details" />
            <div className="project_details">
                <div className="project_description">
                    <DescriptionHeader content = "Project description" />
                    <ItemDescription content = {projectDetails} />
                </div>
                <div className="project_summary" style = {{padding: "4% 2%"}}>
                    <BasicInfo header = "Order date" content = "24.09.2021" />
                    <BasicInfo header = "Final Date" content = "24.09.2022" />
                    <BasicInfo header = "Status" content = "Completed" />
                    <BasicInfo header = "Client" content = "Ahmad" />
                    <BasicInfo header = "Location" content = "The Netherlands" />
                </div>
            </div>
        </div>
    );

}