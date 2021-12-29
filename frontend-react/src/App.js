import { BrowserRouter as Router, Route } from "react-router-dom";


// Components
import Welcome from "./components/welcome-section/Welcome";
import Portfolio from "./components/portfolio/Portfolio"


export default function App() {


    return (
        <div className="App">
            <Router>
                <Route exact path = "/" component = {Welcome} />
                <Route exact path = "/portfolio" component = {Portfolio} />
            </Router>
        </div>
    );
}