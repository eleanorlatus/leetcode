/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let i = 0
    while(num > 0){
        i++
        if(num % 2 == 0){
            num = num / 2
        }else{
            num--
        }
    }
    return i
};