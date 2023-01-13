class ApiCall {
    name;
    score;
    grade;
    liked;
    
    constructor(name, score, grade, liked){
        this.name = name;
        this.score = score;
        this.grade = grade;
        this.liked = liked;
    }
}

export function callApiWithData(name, score, selfAssessmentGrade, liked){
    let apiCall = new ApiCall(name, score, selfAssessmentGrade, liked);
    fetch("http://localhost:8080/api/v1/game", {
        method : 'PUT',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify(apiCall),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(ex => console.log("Error: " + ex));
}