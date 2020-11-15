/**
 * (3 kyu)
 * Date: 2/6/20
 * Objective: generate a spiral pattern out of '0' and '.', so like:
 * 
 *                  0 0 0 0 0 0 0 0 0 0
 *                  . . . . . . . . . 0
 *                  0 0 0 0 0 0 0 0 . 0
 *                  0 . . . . . . 0 . 0
 *                  0 . 0 0 0 0 . 0 . 0
 *                  0 . 0 . . 0 . 0 . 0
 *                  0 . 0 . . . . 0 . 0
 *                  0 . 0 0 0 0 0 0 . 0
 *                  0 . . . . . . . . 0
 *                  0 0 0 0 0 0 0 0 0 0
 * 
 */

var spiralize = function(size) {
    let arr = Array(size).fill().map(() => Array(size).fill(0));

    let z = 1;
    let x = 0;
    let y = 0;
    let mov = size;
    let done = false;

    while(!done){
        if(z == 4) mov-=2;
        else if(z > 3 && (z) % 2 == 0 && (size%2==0 ? mov>2 : mov>3)) mov-=2;
        else if((size%2==0 ? mov==2 : mov==3)) done = true;
        
        for(let i = 0; i < mov - 1; i++){
            arr[y][x] = 1;
            z % 2 == 0 ? (z % 4 == 0 ? y-- : y++) : ((z-1) % 4 == 0 || z==1 ? x++ : x--);
            if(done == true && i == mov - 2 && size % 2 == 1){
            arr[y][x] = 1;
            }
        }        
        z++;
    }
    
    return arr;
}