class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        return cleanStr === cleanStr.split("").reverse().join("");
    }
}
