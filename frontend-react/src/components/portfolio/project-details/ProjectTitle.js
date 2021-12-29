// Title Image
import TitleImage from "../portfolio-images/alexandru-acea-XEB8y0nRRP4-unsplash.jpg";

// Components
import Image from "../../reuseable-components/Image/Image";
import TitleHeader from "../../reuseable-components/TitleHeader";



// Stylesheet
import "../../../styles/Portfolio.css";




export default function ProjectTitle() {

    return (
        <div className="portfolioProject_title">
            <TitleHeader content = "Project Title" />
            <Image imageSrc = {TitleImage} imageDescription = "Project Title Image" />
        </div>
    );

}