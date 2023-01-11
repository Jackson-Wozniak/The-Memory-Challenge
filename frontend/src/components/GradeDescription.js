import '../styles/components/GradeDescription.css'

function GradeDescription() {
    return (  
        <div className="grade-desc-container">
            <h4 id="grade-desc-note">Note: These grades depend on the specific category (visual, verbal, etc...) you are looking for</h4>
            <div className="desc-per-grade">
                <h2>Average</h2>
                <hr />
                <p>
                    With an average memory, you should be able to keep up with those around you when it comes 
                    to remembering things that are shared with you. An average visual memory should mean that you
                    can recognize the faces of those you know well, whereas you may forget what someone you rarely see 
                    looks like. Verbal memory would be similar, except using names as the condition instead.
                </p>
            </div>
            <div className="desc-per-grade">
                <h2>Good</h2>
                <hr />
                <p>
                    With a good memory, you should rarely forget things related to the specific category.
                    If you are looking to grade your visual memory, this means that you can recall what a place you visited
                    looked like, or some details of what someone was wearing earlier in the day. You may still forget some 
                    things, but you often remember things better than those around you.
                </p>
            </div>
            <div className="desc-per-grade">
                <h2>Bad</h2>
                <hr />
                <p>
                    With a bad memory, you often find that you are forgetful of things that other people are able
                    to remember. You can keep up for the most part, but might find yourself asking others for clarification
                    to ensure that you rememebered correctly.
                </p>
            </div>
            <div className="desc-per-grade">
                <h2>Very Good</h2>
                <hr />
                <p>
                    With a very good memory, you should be able to memorize
                    very specific details, and you often find yourself reminding others of things that they may forget.
                    You find that your memory is better than nearly everyone you meet, and you have no trouble
                    recalling information in a quick and accurate manner.
                </p>
            </div>
            <div className="desc-per-grade">
                <h2>Very Bad</h2>
                <hr />
                <p>
                    With a very bad memory, you will often need to ask for clarification to be sure that 
                    you recalled information correctly, and you are quick to forget new information. You may have trouble
                    remembering new names, or remembering faces, and you have to verify recalled information often.
                </p>
            </div>
        </div>
    );
}

export default GradeDescription;