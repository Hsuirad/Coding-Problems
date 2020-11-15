/*
(6 kyu)
Date: 5/11/20
Objective: find if a number is prime (true) or not (false)
*/

#include <stdbool.h>
#include <math.h>

bool is_prime(int num){
  if(num <= 1){
    return false;
  } else if(num < 4){
    return true;
  }
  
  for(int i = 2; i <= sqrt(num); i++){
    if(num % i == 0){
      return false;
    }
  }
  
  return true;
}