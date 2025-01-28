// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// sort and compare:
var isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};

// hashmap, two pass:
var isAnagram = function(s, t) {
   const hashMap = {}

   for(const letter of s){
    if(hashMap[letter]){
        hashMap[letter] = hashMap[letter] + 1
    }else{
        hashMap[letter] = 1
    }
   }

   for(const letter of t){
    if(hashMap[letter]){
        hashMap[letter] = hashMap[letter] -1
    }else{
        hashMap[letter] = -1
    }
   }

   for(const [key, value] of Object.entries(hashMap)){
    if(value !== 0){
       return false
   }}
   return true
};

// hashmap, one pass:
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

   const hashMap = {}

   for(let i = 0; i < s.length; i++){
    hashMap[s[i]] = (hashMap[s[i]] || 0) + 1
    hashMap[t[i]] = (hashMap[t[i]] || 0) - 1
   }


   for(const key in hashMap){
    if(hashMap[key] !== 0){
       return false
   }}
   return true
};
