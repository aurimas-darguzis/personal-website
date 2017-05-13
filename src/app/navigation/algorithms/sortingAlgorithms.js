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
