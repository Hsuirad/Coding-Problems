/*
LeetCode stats:
    - runtime beat 100.0% of submissions (0 ms)
    - memory usage beat 91.71% of submissions
Date: 7/2/20
Objective: determine is capital usage is correct, i.e. USA leetcode and Google are all acceptable but LeEtcode and LeetCode aren't
*/

class Solution {
    public:
        bool detectCapitalUse(string word) {
            bool correct = true;
            //second cap, first uncap, first cap
            bool vals[3] = {false, false, false};
            for(int i = 0; i < word.length(); i++){
                if(i == 1){
                    if(int(word[1]) < int('a')){
                        vals[0] = true;
                    }
                } else if(i == 0){
                    if(int(word[0]) < int('a')){
                        vals[2] = true;
                    } else{
                        vals[1] = true;
                    }
                }
                if(vals[0] == true && vals[2] == true && int(word[i]) > int('Z')){
                    correct = false;
                    break;
                }
                if(i > 0){
                    if(vals[1] == true && int(word[i]) < int('a')){
                        correct = false;
                        break;
                    }
                }
                if(i > 1 && vals[0] == false && vals[2] == true && int(word[i]) < int('a')){
                    correct = false;
                    break;
                }
            }
            
            return correct;
        }
};