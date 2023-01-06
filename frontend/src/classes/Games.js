class Game {
    name;
    description;
    //timesPlayed;
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}

let games = [];

games.push(new Game("Grid Memory", "Buttons on a grid will change colors, and users must accurately track those that change colors"));
games.push(new Game("Recognize Repeating Photos", "A group of photos will be shown, and users must recognize those that are shown more than once"));

export function getAllCurrentGames(){
    return games;
}