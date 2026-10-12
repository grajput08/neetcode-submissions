class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const unqiue = [...new Set(nums)];
        for( let i=0; i<unqiue.length; i++){
            nums[i] = unqiue[i];
        }

        return unqiue.length

    }
}
