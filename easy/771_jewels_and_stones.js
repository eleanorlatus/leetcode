/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
    const map = {}
    let count = 0
    for(let jewel in jewels){
        const j = jewels[jewel]
       if(!map[j]) map[j] = true
    }
    for(let stone in stones){
        const s = stones[stone]
        if(map[s]) count++
    }
    return count
};
