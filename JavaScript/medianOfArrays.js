/**
 * LeetCode stats:
 *      - memory usage beat 93.32% of submissions
 *      - runtime beat 89.02% of submissions
 * Date: 8/25/20
 * Objective: Find the median of two sorted arrays (combine and find middle)
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = (nums1, nums2) => {
    let mainArr = [];
    if(nums1.length != 0 && nums2.length != 0){
        while(nums1.length != 0 || nums2.length != 0){
            if(nums1.length != 0){
                if(nums2.length != 0){
                    nums1[0] > nums2[0] ? mainArr.push(nums2.shift()) : mainArr.push(nums1.shift());
                } else{
                    mainArr.push(nums1.shift())
                }
            } else if(nums2.length != 0){
                mainArr.push(nums2.shift())
            }
        }
        return (mainArr.length % 2 == 1 ? mainArr[(mainArr.length - 1)/2] : (mainArr[(mainArr.length/2)] + mainArr[mainArr.length/2 - 1])/2)
    } else if(nums1.length != 0){
        return (nums1.length % 2 == 1 ? nums1[(nums1.length - 1)/2] : (nums1[(nums1.length/2)] + nums1[nums1.length/2 - 1])/2)
    } else{
        return (nums2.length % 2 == 1 ? nums2[(nums2.length - 1)/2] : (nums2[(nums2.length/2)] + nums2[nums2.length/2 - 1])/2)
    }
};