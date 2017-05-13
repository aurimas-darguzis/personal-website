// http://btholt.github.io/four-semesters-of-cs/

insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        // take out one element from array at index i
        const spliced = nums.splice(i, 1);
        // insert element
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
}

// Merge sort

/* 
  it uses recursion, useful and consistent algorithm.
  The basic gist of merge sort is that you are going to take your
  big list, and first divide down in two half size lists and
  recursively call merge sort on those smaller list, which in turn
  will do the same. The base case is when you have a list of one, 
  at which point you will return that sorted list of one.
  On the way up the recursive calls, you will merge those sorted
  lists together (preferably by another merge function you will write)
  that walks through both lists simultaneously and insert the smaller
  value first, effectively creating a bigger sorted list. 
*/