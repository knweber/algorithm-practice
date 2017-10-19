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

// shorter implementation

function reverseLinkedList(head) {
  var prev = null;
  while(head) {
    var next = head.next;  //  next node
    head.next = prev;  //  head.next is now null
    prev = head;  //  the value of head is assigned to 'previous'
    head = next;  //  'head' now refers to the next node (the original head and head.next have now switched places)
  }
  return prev;
}

reverseLinkedList(a);
