/**
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode(val) {
   this.val = val;
   this.left = null;
   this.right = null;
 }

 var sortedArrToBST = function(arr) {
   if(arr.length === 0) {
     return null;
   }
   return getRoot(arr,0,arr.length-1);
 }

 function getRoot(arr,start,end) {
   if(start > end) {
     return null;
   }

   var mid = Math.floor((start+end)/2);
   var node = new TreeNode(arr[mid]);

   //  console.log(node);
   // for the example below, the value of console.log(node) goes:
   // 9 (ROOT) -->
   //  LEFT SUBTREE
   // 3 (left child of root) -->
   // 1 (left child of 3, bottommost left node of left subtree, go back up to 3 and call node.right => 4) -->
   // 4 (right child of 3) -->
   // 7 (right child of 4, bottommost right node of left subtree, go back up to root and call node.right => 11) -->
   //  RIGHT SUBTREE
   // 11 (right child of root) -->
   // 9 (left child of 11, bottommost left node of right subtree, go back up to 11 and call node.right => 14) -->
   // 14 (right child of 11) -->
   // 27 (right child of 14, bottommost right node of right subtree, go back up to root, DONE)
  // (top-down from root)

   node.left = getRoot(arr,start,mid-1); // get left child from first half of array(elements less than current node)
   node.right = getRoot(arr,mid+1,end);  // get right child from second half of array(elements greater than current node)

   //  console.log(node);
   // for the example below, the value of console.log(node) goes:
   // BUILD LEFT SUBTREE
   // 1 (bottommost left node of left subtree) -->
   // 7 (bottommost right node of left subtree) -->
   // 4 (parent of 7 in left subtree) -->
   // 3 (left child of root, root of left subtree) -->
   // BUILD RIGHT SUBTREE
   // 9 (bottommost left node of right subtree -- NOT THE ROOT) -->
   // 27 (bottommost right node of right subtree) -->
   // 14 (parent of 27 in right subtree) -->
   // 11 (right child of root, root of right subtree) -->
   // 9 (*** ROOT ***)
  // (built via bottom-up DFS)

   return node;
 }

 sortedArrToBST([1,3,4,7,9,9,11,14,27])

//           9
//         /  \
//        3   11
//      / \   / \
//     1  4  9  14
//         \     \
//         7     27
