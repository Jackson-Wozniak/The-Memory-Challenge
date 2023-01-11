import '../styles/components/SelfAssessment.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SelfAssessment(props) {
    const [chosenGrade, setChosenGrade] = useState("average");

    return ( 
        <div className="assessment-container">
            <h1>Before We Begin...</h1>
            <hr />
            <form onSubmit={(e) => props.setSelfAssessmentGrade(chosenGrade)} className="self-assessment">
                <h3>How would you grade your own {props.memoryCategory} memory?</h3>
                <div>
                    <input type="radio" name="grade" value="verybad" id="very-bad" onChange={(e) => setChosenGrade(e.target.value)}/>
                    <label className="choose-grade-label" htmlFor="very-bad">Very Bad</label>

                    <input type="radio" name="grade" value="bad" id="bad" onChange={(e) => setChosenGrade(e.target.value)}/>
                    <label className="choose-grade-label" htmlFor="bad">Bad</label>
                    
                    <input type="radio" name="grade" value="average" defaultChecked id="average" onChange={(e) => setChosenGrade(e.target.value)}/>
                    <label className="choose-grade-label" htmlFor="average">Average</label>
                    
                    <input type="radio" name="grade" value="good" id="good" onChange={(e) => setChosenGrade(e.target.value)}/>
                    <label className="choose-grade-label" htmlFor="good">Good</label>

                    <input type="radio" name="grade" value="verygood" id="very-good" onChange={(e) => setChosenGrade(e.target.value)}/>
                    <label className="choose-grade-label" htmlFor="very-good">Very Good</label>
                    
                </div>
                <button action="submit" className="submit-assessment">Start Memory Challenge</button>
                <Link to="/grade-desc" target="_blank" className="to-grade-desc">Not sure how to grade yourself?</Link>
            </form>
        </div>
    );
}

export default SelfAssessment;