/**
 * (4 kyu)
 * Date: 2/15/20
 * Objective: for the sequence u, u(0) = 1, and then for each x in u, y = 2x+1 and z=3x+1 must also be present, return u(n) given n
 */

function dblLinear(n) {

    let u = [1];
    let nums_used = {};
    let indexes_reached = {};
    for(let i = 0; i < n*4; i++){
      if(!nums_used[u[i] * 2 + 1]){
        u.push(u[i] * 2 + 1);
        nums_used[u[i] * 2 + 1] = i;
      }
      if(!nums_used[u[i] * 3 + 1]){
        u.push(u[i] * 3 + 1);
        nums_used[u[i] * 3 + 1] = i;
      }
      if(!indexes_reached[i]) indexes_reached[i]=1;
      else if(indexes_reached[i] && Object.keys(indexes_reached).length >= n && indexes_reached[n] == 1) break;
    }
    
    return Number(Object.keys(nums_used)[n-1]);
}