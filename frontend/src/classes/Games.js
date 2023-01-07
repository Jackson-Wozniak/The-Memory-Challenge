class Game {
    name;
    path;
    description;
    constructor(name, path, description){
        this.name = name;
        this.path = path;
        this.description = description;
    }
}

let games = [];

games.push(new Game("Grid Memory", "/grid-memory","Buttons on a grid will change colors, and users must accurately track those that change colors"));
games.push(new Game("Recognize Repeating Photos", "/repeating-photos","A group of photos will be shown, and users must recognize those that are shown more than once"));
games.push(new Game("Letter Mapping", "/letter-mapping", "You will be shown 3 numbers, each mapping to 2 letters. Match the letters shown on screen to the numbers to get points"));

export function getAllCurrentGames(){
    return games;
}