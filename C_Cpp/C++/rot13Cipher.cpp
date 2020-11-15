/*
(5 kyu)
Date: 5/7/20
Objective: implement a ROT13 cipher (a caeser cipher with 13 forward shift)
*/

#include <string>
using namespace std;

string rot13(string msg){
  for(int i = 0; i < int(msg.length()); i++){
    if(int(msg[i]) > int('Z')){
      if(int(msg[i]) >= int('a') && int(msg[i]) <= int('z'))msg[i] = char((int(msg[i]) + ((int(msg[i]) + 13) > int('z')? -26 : 0))+13);
    } else {
      if(int(msg[i]) >= int('A') && int(msg[i]) <= int('Z'))msg[i] = char((int(msg[i]) + ((int(msg[i]) + 13) > int('Z')? -26 : 0))+13);
    }
  }
  return msg;
}