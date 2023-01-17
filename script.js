function threeSum(arr, target) {
  //your code here
	 arr.sort((a, b) => a - b);
    let threeSum = Infinity;
    let threeSumArr;
    // Iterate through the array
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (Math.abs(sum - target) < Math.abs(threeSum - target)) {
                threeSumSum = sum;
                threeSumArr = [arr[i], arr[left], arr[right]];
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return threeSum;
            }
        }
    }
    return threeSum;
}
}

module.exports = threeSum;
