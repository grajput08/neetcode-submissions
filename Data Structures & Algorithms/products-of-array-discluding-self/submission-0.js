class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        // Approach 1: Brute Force (baseline)
        // let output = [];
        // for (let i = 0; i < n; i++) {
        // let product = 1;
        //     for (let j = 0; j < n; j++) {
        //         if (i !== j) product *= nums[j];
        //     }
        // output[i] = product;
        // }
        // return output

        // Approach 2: Using Division (NOT allowed in follow-up)
        // let outputArr = [];
        // const product = nums.reduce((acc, num) => acc * num, 1);
        // nums.map(num=>outputArr.push(product/num));
        // return outputArr;
        // Why interviewers reject this => Division not allowed => Fails when nums[i] === 0
    
    // Approach 3: In-place output (BEST answer)
    const n = nums.length;
    const output = new Array(n).fill(1);

    // Prefix products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Suffix products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;
    }
}
