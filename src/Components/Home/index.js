import React from "react";
import "./index.css"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    const goToNewPage = () => {
        navigate("/quiz");
    }

    return(
        <>
        <div className="home-container">
            <button  className="home-btn" onClick={() => goToNewPage()}>Start Quiz</button>
        </div>
        </>
    )
}

export default Home;