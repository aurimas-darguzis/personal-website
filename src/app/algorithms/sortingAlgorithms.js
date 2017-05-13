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

const mergeSort = (nums) => {
  // first thing you do when using recursive functions
  // is to write if statement to break out of the funciton
  if (nums.length < 2) { // if the length is 1, than the array is sorted
    return nums
  }

  const length = nums.length
  // always round down to the nereast number
  const middle = Math.floor(length / 2)

  // let's split our array into two smaller arrays
  // slice is an array function (not destructive)
  const left = nums.slice(0, middle)
  // its going to go from middle to the end of the array
  const right = nums.slice(middle, length)

  // recursive call on both sides
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  // and stitch sorted arrays together
  return stitch(sortedLeft, sortedRight)
}

const stitch = (left, right) => {
  // inner array that we are going to return in the end
  const results = []

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      // take my element and put it at the end - that's what .push do'
      // shift is going to take first or zero element and take the off, and push into results
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  while(left.length) {
    results.push(left.shift())
  }
  while(right.length) {
    results.push(right.shift())
  }

  return results
}

// unit test for mergeSort
describe('insertion sort', function() {
  it('should sort correctly', () => {
    const nums = [10,5,3,8,2,6,4,7,9,1]
    const ans = mergeSort(nums)
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10])
  })
})
