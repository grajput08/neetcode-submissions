class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode_string = "";
        for(let i of strs){
            const countStr = i.length;
            encode_string = encode_string + countStr + "#" + i;
        }
        return encode_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const Strs = [];
        let i =0;
        while(i< str.length){
            let j =i;
            while(str[j]!=="#"){
                j++;
            }
            // get the length 
            const length = parseInt(str.substring(i,j));
            // string

            const  s = str.substring(j+1, j+1+length);
            Strs.push(s);
            i=j+1+length;
        }
        return Strs;
    }
}
