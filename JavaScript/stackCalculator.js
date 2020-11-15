/*
(3 kyu)
Date: 4/2/20
Objective: Make a calculator that follows PEMDAS and takes a string like "5 + 5 * 5 / 5 + 5 - 5 / 5" 
without making use of javascript's eval() function
*/

const Calculator = function() {
    this.evaluate = string => {
        let i = 0;
        
        let numbers = string.split(' ').filter((e, i) => (i%2==0))
        let signs = string.split(' ').filter((e, i) => (i%2));
        
        if(signs.length == 0){
            return numbers[0];
        }
        
        while(signs.includes("*") == true || signs.includes('/') == true){
            if(signs[i] == "*"){
                numbers[i] = (numbers[i] * numbers[i+1]);
                signs.splice(i, 1);
                numbers.splice(i+1, 1);
            }
            if(signs[i] == "/"){
                numbers[i] = (numbers[i] / numbers[i+1]);
                signs.splice(i, 1);
                numbers.splice(i+1, 1);
            }
            
            if(signs.includes("*")){
                if(signs.includes("/")){
                    i = (signs.indexOf("/") < signs.indexOf("*")?signs.indexOf("/"):signs.indexOf("*"));
                }
                else{
                    i = signs.indexOf('*');
                }
            }
            else if(signs.includes("/")){
                i = signs.indexOf("/");
            }
        }
        
        return calc(numbers, signs);
    }
};
  
const calc = (nums, signs) => {
    let sum = 0;

    while(signs.length > 0){
        if(signs[0] == "+"){
        nums[0] = (Number(nums[0]) + Number(nums[1]));
        } else{
        nums[0] = (Number(nums[0]) - Number(nums[1]));
        }
        signs.splice(0, 1);
        nums.splice(1, 1);
    }

    sum = nums[0];

    return sum
}