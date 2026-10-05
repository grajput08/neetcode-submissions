class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height || height.length ===0){
            return 0;
        }
        let trapBlocked=0;
        let left=0;
        let maxLeft= height[left];
        let right=height.length-1;
        let maxRight= height[right];
        while(left<right){
            if(maxLeft<maxRight){
                left++;
                maxLeft = Math.max(maxLeft, height[left]);
                trapBlocked += maxLeft - height[left]; 
            }
            else{
                right--;
                maxRight = Math.max(maxRight, height[right]);
                trapBlocked += maxRight - height[right];
            }
        }
        return trapBlocked;
    }
}
