function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode(1);
var b = new LinkedListNode(2);
var c = new LinkedListNode(3);
var d = new LinkedListNode(4);

a.next = b;
b.next = c;
c.next = d;

function reverseLinkedList(node) {
  var next = null;
  var last = null;
  var curr = node;
  if(curr === null)
    return null;

  while(curr && curr.next !== null && curr.next !== curr) {
    next = curr.next;
    curr.next = last;
    last = curr;
    curr = next;
  }
  curr.next = last;
  return curr;
}

reverseLinkedList(a);
