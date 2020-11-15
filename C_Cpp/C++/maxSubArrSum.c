/*
(5 kyu)
Date: 5/15/20
Objective: find the maximum subarray sum of size n
*/

#include <stddef.h>

int maxSequence(const int* array, size_t n) {
  int sum = 0;
  int maxSum = 0;
  
  for(int i = 0; i < (int)n; i++){
    sum = 0;
    for(int j = i; j < (int)n; j++){
      sum += array[j];
      if(sum > maxSum) maxSum = sum;
    }
  }
  
  return maxSum > 0 ? maxSum : 0;
}