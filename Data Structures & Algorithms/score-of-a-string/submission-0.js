class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let i=0;
        let j=1;
        let sum =0;
        while(i<s.length-1){
            sum = sum + Math.abs(s.charCodeAt(j) - s.charCodeAt(i));
            i++;
            j++;
        }
        return sum;
    }
}
