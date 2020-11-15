/*
LeetCode stats:
    - memory usage beat 91.96% of users
    - run time beat 21.67% of users
Date: 8/5/20
Objective: given an array and an integer target return indices of two numbers so that they add up to target
*/

class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            std::vector <int> v = {};
            int i = 0, j = 0;
            int len = nums.size();
            for(i = 0; i < len - 1; i++){
                for(j = i; j < len; j++){
                    if(nums[i] + nums[j] == target && i != j){
                        v.push_back(i);
                        v.push_back(j);
                        break;
                    }    
                }
                
            }
            return v;
        }
};