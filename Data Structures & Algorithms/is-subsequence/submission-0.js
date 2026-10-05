class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0;
        let j=0;
        while(j<= t.length-1){
            if(s[i] === t[j]){
                i++;
                j++
            } else{
                j++;
            }
        }
        if(i === s.length){
            return true;
        }
        return false;
    }
}
