/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //     ===== String checker #1 =====     //
    // ----- Stats ----- //
    // runtime: 180ms
    // memory usage: 48.3 MB

    // ----- Code ----- //
    //     // check for edge cases
    //     if(x < 0) return false;
    
    //     // convert to a string
    //     const num = `${x}`
    
    //     // reverse the number
    //     const reverse = num.split("").reverse().join("");
    
    //     //check if reverse is the same as originial
    //     if(reverse === num) return true
    
    //     // otherwise it isn't a palindrome
    //     return false
    
    //     ===== String checker #1 =====     //
    // ----- Stats ----- //
    // runtime: 156ms faster than 98.83% of JavaScript online submissions for Palindrome Number.
    // memory usage: 47.5 MB\ less than 97.52% of JavaScript online submissions for Palindrome Number.

    // ----- Code ----- //
        // check for edge cases
        if(x < 0) return false;
    
        // convert to a string
        const num = `${x}`
        
        // "double pointer" loop check that terminates at half length of string
        for(let i = 0; i < num.length / 2; i++){
            if(num[i] !== num[num.length -1 - i])return false;
        }
        return true;
    
    //     ===== Numeric Only checker =====     //
    // ----- Stats ----- //
    // runtime: 448ms
    // memory usage: 54.6 MB

    // ----- Code ----- //
    //     let temp = x;
    //     let reverse = 0;
        
    //     let numLoops = 0;
    //     while(temp > 0){
    //         // store last digit
    //         const remainder = temp%10;
            
    //         // add last digit
    //         reverse = reverse * 10 + remainder;
    //         console.log(reverse)
            
    //         temp = Math.trunc(temp/10)
    //     }
    //     if(reverse === x) return true;
    //     return false;
    };