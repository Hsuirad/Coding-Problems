/**
 * LeetCode stats:
 *      - memory usage beat 90.44% of submissions
 *      - runtime beat 87.48% of submissions
 * Date: 9/20/20
 * Objective: find the longest substring with nonrepeating characters
 */

 
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let right = 0;
    let left = 0;
    let maxCount = 0;
    
    while(right < s.length){
        if(!set.has(s[right])){
            set.add(s[right]);
            right++;
            maxCount = Math.max(set.size, maxCount);
        } else{
            set.delete(s[left]);
            left++;
        }
    }
    
    return maxCount
};