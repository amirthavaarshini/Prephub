import React, { useState } from "react";
import "./index.css";

const Quiz = () => {


    const [showAns, setShowAns] = useState(false);

    const handleShowBtn = () => {
        setShowAns(prev => !prev);
    }

    const handleNxt = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="quiz-container">
                <div className="quiz-qstn">What is React?</div>
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
                        <div className="answer-container" >It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.</div>
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