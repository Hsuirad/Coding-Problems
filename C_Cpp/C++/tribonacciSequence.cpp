/*
(6 kyu)
Date: 1/15/20
Objective: Create a "tribonacci" sequence, like fibonacci but instead of the previous 2 integers sums its the previous 3
*/

std::vector<int> tribonacci(std::vector<int> signature, int n){
    std::vector<int> result;
    int z =0;
    std::cout<<n<<std::endl;
    for(int i = 0; i < (signature.size() > n ? n : signature.size()); i++) result.push_back(signature[i]);
    while(result.size() < n){
      std::cout << result[z] + result[z+1] + result[z+2]<< " " << z << std::endl;
      result.push_back(result[z] + result[z+1] + result[z+2]);
      z++;
    }
    
    return result;
}