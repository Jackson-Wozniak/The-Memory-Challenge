class ApiCall {
    nameOfGame;
    finalScore;
    selfAssessmentGrade;
    liked;
    
    constructor(nameOfGame, finalScore, selfAssessmentGrade, liked){
        this.nameOfGame = nameOfGame;
        this.finalScore = finalScore;
        this.selfAssessmentGrade = selfAssessmentGrade;
        this.liked = liked;
    }
}

export function callApiWithData(name, score, selfAssessmentGrade, liked){
    let apiCall = new ApiCall(name, score, selfAssessmentGrade, liked);
    fetch("http://localhost:8080/api/v1/game/new-data", {
        method : 'POST',
        body : JSON.stringify(apiCall)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(ex => console.log("Error: " + ex));
}