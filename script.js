
let boardArray = [ [ ], [ ], [ ] ] ;
        
        
        let title = document.createElement("div");
        let text = document.createElement("h2");
        text.style.color ="#ff0081"
        text.innerText = " Play Tic - Tac - Toe" ;
        title.appendChild(text);
        title.style.display = "flex";
        title.style.justifyContent = "center";
        title.style.alignItems = "center";  
        title.style.width = "100%";
        title.style.height= " 120px";
        title.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
        title.style.fontStyle= "italic";
        title.style.fontSize = "50px"
        title.style.background = "linear-gradient(90deg, rgba(116,255,139,0.6924894957983193) 0%, rgba(16,16,186,1) 26%, rgba(0,212,255,1) 83%)"

        let result = document.createElement("div");

        let winner = document.createElement("h2");
        winner.style.color ="#ff0081"
        winner.style.color = "black";
        
        result.appendChild(winner);
        result.style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        result.style.fontSize = "25px";
        result.style.display="flex";
        result.style.width = "100%";
        result.style.height = "80px";
        result.style.justifyContent="center";
        result.style.alignItems = "center";
        result.style.background = "linear-gradient(90deg, rgba(255,255,255,0.9838060224089635) 0%, rgba(71,71,214,0.7961309523809523) 37%, rgba(0,212,255,1) 76%)"


        let screen = document.createElement("div");
        screen.style.display="flex";
        screen.style.width = "100%";
        screen.style.height = "100vh";
        screen.style.justifyContent="center";
        //screen.style.alignItems = "center";
        screen.style.background = "linear-gradient(90deg, rgba(255,255,255,0.9838060224089635) 0%, rgba(71,71,214,0.7961309523809523) 37%, rgba(0,212,255,1) 76%)   "

        

        let  board = document.createElement("div");
        board.style.width = "470px";
        board.style.height = "420px";
        board.style.display = "flex";
        board.style.flexWrap = "wrap";
        
        let currentPlayer = "X";
        let row = 1;
        let col = 1;
        for(let i=0; i<9;i++){
            let box = document.createElement("div");
            box.style.width = "140px";
            box.style.height = "140px";
            box.style.backgroundColor = " lightblue";
            box.style.border = "4px solid black"

            box.style.textAlign = "center";
            box.style.verticalAlign = "middle";
            box.style.lineHeight = "155px"
            box.style.fontFamily = "Arial, Helvetica, sans-serif";
            box.style.fontSize = "6em";
            box.style.cursor = "pointer";

            let id=0;
            if((i+1) % 3 == 0){
                id = `${row}${col}`;
                row = row + 1;
                col = 1
            }
            else{
                id = `${row}${col}`;
                col = col+1;
            }
            box.setAttribute("id",id);

            box.onmousemove = function(){
                this.style.backgroundColor = "#31aed7";
            }
            
            box.onmouseleave = function(){
                this.style.backgroundColor = "lightblue"
            }
            box.onclick = function () {
                
                if(this.innerText == ""){
                    this.innerText = currentPlayer;

                    let [row,col] = this.id.split("");        
                    boardArray[parseInt(row)-1][parseInt(col)-1] = currentPlayer;
                    console.log(boardArray);


                        if(this.innerText == "X")
                        {
                            currentPlayer = "O";
                        }

                        if(this.innerText == "O")
                        {
                            currentPlayer = "X"
                        }

                        let val = checkWinner(boardArray);
                        if(val == null)
                            val = "No One ";
                        
                        console.log(val + " is winner !");
                        winner.innerText =  val + " is winner !";
                }
            }

            board.appendChild(box);
        }

        screen.appendChild(board);

        document.body.appendChild(title);
        document.body.appendChild(result);
        document.body.appendChild(screen);

        function checkWinner(boardArray){
            const rows = boardArray.length;
            const cols = boardArray[0].length;

            //check Rows
                for(let i=0; i<rows; i++){
                    if((boardArray[i][0] === boardArray[i][1]) && (boardArray[i][1] === boardArray[i][2]))
                        return boardArray[i][0];
                }

            //check Col
                for(let i=0; i<cols ; i++){
                        if((boardArray[0][i] === boardArray[1][i]) && (boardArray[1][i] === boardArray[2][i]))
                            return boardArray[0][i];
                    }
            //check Diagnols
                
                if((boardArray[0][0] === boardArray[1][1]) && (boardArray[1][1] === boardArray[2][2]))
                            return boardArray[0][0];
                
                if((boardArray[0][2] === boardArray[1][1]) && (boardArray[1][1] === boardArray[2][0]))
                            return boardArray[0][2];

            
            return null;
        }
