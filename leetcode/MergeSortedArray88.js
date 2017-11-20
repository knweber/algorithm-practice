function merge(nums1, nums2) {

  var len1 = nums1.length;
  var len2 = nums2.length;

  while(len1 > 0 && len2 > 0) {
    if(nums1[len1-1] > nums2[len2-1]) {
      // add enough slots for nums1 to hold the elements in nums2 as well
      nums1[len1+len2-1] = nums1[len1-1];
      len1--;
    } else {
      nums1[len1+len2-1] = nums2[len2-1];
      len2--;
    }
  }

// if nums2 is longer than nums1 but nums1 has larger numbers, so that len1 reaches 0 before len2
// fills in the gaps left after len1 reaches 0, and moves through the string backwards to keep it sorted as these new elements are added
  while(len2 > 0) {
    nums1[len2-1] = nums2[len2-1];
    len2--;
  }

  return nums1;

}
