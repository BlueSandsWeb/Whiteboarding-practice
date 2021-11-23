/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let node = l1;
    const num1 = getNum(l1);
    const num2 = getNum(l2);
    const sum = num1 + num2;
    console.log("sum: ", sum)
    

    
}

function getNum(ll){
    let c = true;
    let val = 0;
    let power = 0;
    while(c){
        val = val + (ll.val * (10**power))
        if(ll.next){
            ll = ll.next
            power++;
        } else {
            c = false;
        }
    }
    return val;
}  