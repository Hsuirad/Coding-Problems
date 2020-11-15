/**
 * (3 kyu)
 * Date: 4/19/20
 * Objective: Take any battlship field (the game) inputted as a 2-d array of binary and see if the ships are in valid positions per the rules
 */

function validateBattlefield(field) {
    
  let arr = new Array(12);
  
  for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(12).fill(0);
  }
  
  for(let y = 0; y < 12; y++){
    for(let x = 0; x < 12; x++){
      if(y <= 9 && x <= 9){
        arr[y+1][x+1] = field[y][x];
      }
    }
  }
  
  let visited = [];
  
  let valid = true;
  let inArray = false;
  let size = 1;
  let posX = 0;
  let posY = 0;
  let submarines = 0;
  let destroyers = battleship = cruisers = 0;
  
  for(let i = 1; i < 11; i++){
    for(let j = 1; j <  11; j++){
      if(arr[i][j] == 1){
        valid = false;
        for(let a = -1; a <= 1; a++){
          for(let y = -1; y <= 1; y++){
            if(arr[i+a][j+y] == 1 && (a != 0 || y != 0)){
              valid = true;
              posX = y;
              posY = a;
              if(posX != 0 && posY != 0){
                return false;
              }
            }
          }
        }
        if(valid == false){
          if(submarines == -1){
            return false;
          }
          else{
            submarines++;
          }
        }
        else{
          inArray = false;
          for(let z = 0; z < visited.length; z++){
            if(visited[z][i] == j){
              inArray = true;
            }
          }
          if(!inArray){
            size = 1;
            visited.push({[i]: j});
            console.log(visited[i], size, posX, posY);
            while(arr[i+posY][j+posX] != 0){
              size++;
              visited.push({[i+posY]: (j+posX)});
              posY+=(posY>0?1:posY!=0?-1:0);
              posX+=(posX>0?1:posX!=0?-1:0);
              visited.push({[i+posY]: (j+posX)});
              console.log(posX, posY);
            }
            console.log(size, i, j, posX, posY)
            if(size == 2){
              if(destroyers == 3){
                return false;
              }
              else{
                destroyers++;
              }
            }
            if(size == 3){
              if(cruisers == 2){
                return false;
              }
              else{
                cruisers++;
              }
            }if(size == 4){
              if(battleship == 1){
                return false;
              }
              else{
                battleship++;
              }
            }
          }
        }
      }
    }
  }
  
  if(destroyers != 3 || cruisers != 2 || battleship != 1 || submarines != 4){
    return false;
  }
  return true;
}