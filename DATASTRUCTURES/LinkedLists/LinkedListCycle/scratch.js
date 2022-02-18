var detectCycle = function (head) {
  if (head === null) return null;
  if (head.val === 'v') return head;
  head.val = 'v';
  return detectCycle(head.next);
};
