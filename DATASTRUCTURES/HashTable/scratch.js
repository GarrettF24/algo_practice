// YOU COULD ALSO DO THE HASH FUNCTION OUTSIDE THE CLASS
function _hash(key, arrayLen) {
    // ...
}

// SEPARATE CHAINING
class HashTable {

    // CONSTRUCTOR SHOULD TAKE IN NUMBER OF BUCKETS
    constructor(numBuckets) {
        this.array = new Array(numBuckets).fill(null);  // another option to fill the empty buckets with is []
        
        // A TABLE WITH 20 BUCKETS WOULD LOOK LIKE:
        // [ __, __, __, ... , __ ] (20 buckets)

        // WHAT LIVES WITHIN EACH BUCKET?
        //   []   an inner array, which stores key/value pairs in this format: [key, val]

        // FOR EXAMPLE, IF BUCKET 2 HAPPENS TO HAVE 3 KEY/VAL PAIRS IN IT, THEN this.array[2] IS:
        //   [ [key1, val1], [key2, val2], [key3, val3] ]
        //       ^ key always at position 0
        //              ^ val always at position 1

        // IF EVERY OTHER BUCKET WERE EMPTY, THEN THE WHOLE TABLE WOULD BE:
        // [ null, null, [ [key1, val1], [key2, val2], [key3, val3] ], null, null, ... , null ]
        //    ^     ^                                                   ^      ^           ^
        //    0     1             this whole thing is bucket 3          4      5           19
    }

    _hash(key) {

        let runningTotal = 0;

        for (const char of key) {
            runningTotal += char.charCodeAt(0);
        }

        return runningTotal % this.array.length;

        // WHAT IS THIS HASH FUNCTION DOING?
        // - initializing runningTotal at 0
        // - going character by character through the key (which is a string), and adding its ASCII code value to the runningTotal

        // e.g. let's say key is: 'abcde'
        // running total: 97 + 98 + 99 + 100 + 101 = 495
        // return 495 % 20 --> 15
        // THEREFORE, THE KEY 'abcde' ALWAYS MAPS TO BUCKET 15, IF WE HAVE 20 BUCKETS IN OUR HASH TABLE
    }
    get(key) {
        
        // STEP 1: GET RELEVANT INDEX (BUCKET)
        const index = this._hash(key);

        // STEP 2: IF NOTHING LIVES IN THAT BUCKET, RETURN undefined (OR WHATEVER OTHER VALUE YOU DEEM APPROPRIATE)
        if (this.array[index] === null) return undefined;

        // STEP 3: ELSE, SOMETHING DOES EXIST AT THE BUCKET, SO NEXT, WE GO THROUGH THE SEPARATE CHAIN
        // iterate through every key/val pair in the chain that lives at that bucket
        for (let i = 0; i < this.array[index].length; ++i) {
            const pair = this.array[index][i];                          // recall that key/val pairs are stored like [key, val]
            if (pair[0] === key) {                                      // if the key you're looking at matches the key you called `get` on...
                return pair[1];                                         // ...then return the value you're looking at
            }
        }

    }
}

const ht = new HashTable(20);
ht.get('a')
console.log(ht)