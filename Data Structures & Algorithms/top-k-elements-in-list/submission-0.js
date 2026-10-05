class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

  // count frequency
  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
  }

  // sort by frequency
  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .slice(0, k)
    .map(Number);
    }
}
