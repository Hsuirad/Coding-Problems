/*
LeetCode stats:
    - memory usage beat 65.21% of submissions
    - runtime beat 35.20% of submissions
Date: 9/15/20
Objective: Construct a linked list that adds all elements in two inputted linked lists (traverse nodes and add)
*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
    public:
        ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {    
            ListNode * res = new ListNode();
            int carry = 0;
            
            ListNode * tempnode = NULL;
            bool isCarry = false;
            
            tempnode = res;
            
            while(l1 != NULL || l2!=NULL){
                std::cout << carry << endl;
                isCarry = false;
                tempnode->val = ((l1!=NULL?l1->val:0) + (l2!=NULL?l2->val:0) + carry) % 10;
                if((l1!=NULL?l1->val:0)+(l2!=NULL?l2->val:0)+carry>9){
                    carry = floor(float((l1!=NULL?l1->val:0)+(l2!=NULL?l2->val:0)+carry)/10);
                    isCarry = true;
                }
                if(!isCarry){
                    carry = 0;
                }
                if(l1!=NULL)l1 = l1->next;
                if(l2!=NULL)l2 = l2->next;
                if(l1!=NULL || l2!=NULL){
                    tempnode->next = new ListNode();
                    tempnode = tempnode->next;
                }
            }
            if(carry != 0){
                tempnode->next = new ListNode(carry);
            }
            
            return res;
        }
};