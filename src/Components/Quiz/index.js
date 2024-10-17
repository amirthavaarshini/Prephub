import React, { useEffect, useState } from "react";
import "./index.css";
import questions from "./questions";

const Quiz = () => {


    const [showAns, setShowAns] = useState(false);
    const [randomIndex, setRandomIndex] = useState(0)

    const handleShowBtn = () => {
        setShowAns(prev => !prev);
    }

    const handleNxt = () => {
        window.location.reload();
    }

    useEffect(() => {
        console.log("onload");
        let num = Math.floor((Math.random()*questions.length));
        console.log(num);
        setRandomIndex(num);
    }, [])                                  //[] - dependency array



    // useEffect(() => {
    //     console.log("show ans is changed");
    // }, [showAns]) 

    // useEffect(() => {
    //     console.log("text is updated");
    // }, [sampleState])
    
    // useEffect(() => {
    //     console.log("always");
    // }) 

    

    return (
        <>
            <div className="quiz-container">
                <div className="quiz-qstn">{questions[randomIndex].question}</div>
                <div className="text-container">
                    <textarea rows="5" className="quiz-text" placeholder="Type your Answer here."></textarea>
                </div>
                <div className="show-hide-container">
                    <button className="show-btn" onClick={handleShowBtn}>
                        {showAns === true ?"Hide Answer" : "Show Answer"}
                    </button>
                </div>
                {showAns &&
                    <>
                        <div className="answer-container" >{questions[randomIndex].answer}</div>
                        <div className="show-hide-container">
                            <button className="show-btn" onClick={handleNxt}>Next Question</button>
                        </div>
                    </>
                }
            </div>

        </>
    )
}

export default Quiz;