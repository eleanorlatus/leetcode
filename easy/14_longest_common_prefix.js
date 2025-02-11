/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// horizontal scanning:
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]

    for(let i = 0; i < prefix.length; i++){
        for(let j = 1; j < strs.length; j++){
            if(prefix[i] !== strs[j][i]){
                return prefix.slice(0, i)
            }
        }
    }
    return prefix
};

//vertical scanning:
longestCommonPrefix(strs) {
        for (let i = 0; i < strs[0].length; i++) {
            for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return s.slice(0, i);
                }
            }
        }
        return strs[0];
    }
