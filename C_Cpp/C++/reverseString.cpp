/*
LeetCode stats:
    - runtime beat 93.61% of submission
    - memory usage beat 97.94% of submissions
Date: 8/26/20
Objective: reverse a string given in vector<char> format
*/

class Solution {
    public:
        void reverseString(vector<char>& s) {
            char temp = '';
            int i = 0;
            int j = s.size() - 1;
            while(i < j){
                temp = s[i];
                s[i] = s[j];
                s[j] = temp;
                
                i++; j--;
            }
        }
};