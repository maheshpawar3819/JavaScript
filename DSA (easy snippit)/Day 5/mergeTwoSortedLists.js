var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;k
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

console.log(mergeTwoLists([1, 2, 3, 1], [4, 9, 4]));
