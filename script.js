let NUMROWS = 4;
let NUMCOLS = 4;
let NUMCELLS = NUMROWS * NUMCOLS;
let DIFFSCALE = 20;
let score = 0;
let results = ' ';

let createTable = function(){

    //FOR LOOP - used when you KNOW how many times to loop something.

    //FOR(initialize control variable; state the boolean expression and then you update the control variable)

    let redColor = Math.floor(Math.random()*256);
    let greenColor = Math.floor(Math.random()*256);
    let blueColor = Math.floor(Math.random()*256);

    let regColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
    let diffColor = "rgb(" + (redColor+DIFFSCALE) + "," + (greenColor+DIFFSCALE) + "," + (blueColor+DIFFSCALE) + ")";

    let randRow = Math.floor(Math.random()*NUMROWS)+ 1;
    let randCols = Math.floor(Math.random()*NUMCOLS)+ 1;

    let table = document.createElement("TABLE");

    for(let row = 1; row <= NUMROWS; row++){
        let tableRow = document.createElement("TR");
        table.appendChild(tableRow);

        for(let col = 1; col <= NUMCOLS; col++){

            let cell = document.createElement("TD");
            cell.onclick = function(){checkWin(this)};
            cell.style.backgroundColor = regColor;

            if(row === randRow && col === randCols){
                cell.style.backgroundColor = diffColor;
                cell.id = "correctBox";
            }

            tableRow.appendChild(cell);
        }
    }

    table.classList.add("aside");
    
    let placetoputthistable = document.getElementById("content");
    placetoputthistable.innerHTML = " ";
    placetoputthistable.appendChild(table);

    let scoreRow = document.createElement("TR");
    let scoreRow2 =  document.createElement("TR");
    let scoreRow3 = document.createElement("TR");
    let scoreCol = document.createElement("TD");
    let scoreCol2 = document.createElement("TD");
    let scoreCol3 = document.createElement("TD");
    scoreCol.id = "results";
    scoreCol.innerText = "Player's Score";
    scoreCol2.innerText = score;
    scoreCol3.innerText = results;
    scoreCol.classList.add = "smallCell";
    scoreCol2.classList.add = "smallCell";
    scoreCol3.classList.add = "smallCell";
    scoreRow.appendChild(scoreCol);
    scoreRow2.appendChild(scoreCol2);
    scoreRow3.appendChild(scoreCol3);

    let scoreBoard = document.createElement("TABLE");
    scoreBoard.classList.add("aside");
    scoreBoard.appendChild(scoreRow);
    scoreBoard.appendChild(scoreRow2);
    scoreBoard.appendChild(scoreRow3);

    placetoputthistable.appendChild(scoreBoard);

};

let checkWin = function(cell) {
  if(celll.id === "correctBox"){
      results = "You found it!";
      score++;
      if(score >= 10){
          score = 0;
          DIFFSCALE -=5;
      }
      if(DIFFSCALE <= 0){
          winMenu();
      }else{
          createTable()
      }
  }else{
      results = "Wrong one! You lose a point, Try again!";
      score--;
      if(score <= -5){
          score = 0;
          DIFFSCALE = 50;
          startMenu();
      }else{
          createTable()
      }
  }

};

let WinMenu = function(){
    let title = document.createElement("H1");
    title.innerText = "Color Chooser Game!";

    let directions = document.createElement("P");
    directions.innerText = "You won! Click the button to try again!";

    let begin = document.createElement("BUTTON");
    begin.innerText = "BEGIN";
    begin.onclick = createTable;

    let display = document.getElementById("content");
    display.appendChild(title);
    display.appendChild(directions);
    display.appendChild(begin);

};



let startMenu = function(){
        let title = document.createElement("H1");
        title.innerText = "Color Chooser Game!";

        let directions = document.createElement("P");
        directions.innerText = "Find the color that is different. Score a point if you do! Lose a point if you don't. A score of 10 progresses you to the next level. a score of -5 ends the game.";

     let begin = document.createElement("BUTTON");
     begin.innerText = "BEGIN";
     begin.onclick = createTable;

     let display = document.getElementById("content");
     display.appendChild(title);
     display.appendChild(directions);
     display.appendChild(begin);

};