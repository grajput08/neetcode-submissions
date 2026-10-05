class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let newArray = [];
        let greatestelement = 0;
        for(let j=0 ; j<arr.length; j++){
                greatestelement = -1;
            for( let i =j+1; i < arr.length; i++){
                if(greatestelement <= arr[i] ){
                    greatestelement = arr[i];
                }
            }
            newArray[j]= greatestelement;

        }
        return newArray;
    }
}
