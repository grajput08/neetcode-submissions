class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = new Map();
        let maxCount=0;
        let result=0;
        for(let i=0; i<nums.length;i++){
            count.set(nums[i], (count.get(nums[i])|| 0)+1);
            if(count.get(nums[i])> maxCount){
                maxCount = count.get(nums[i]);
                result = nums[i];
            }
        }
        return result;

    }
}
