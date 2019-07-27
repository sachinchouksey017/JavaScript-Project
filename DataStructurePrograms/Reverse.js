var rr=require('../DataStructurePrograms/StackUsingLinkedList');
var st=new rr.StackLinkedList;
st.push(45);
st.push(56);
st.push(34);
var stn=st.reveseStack();
console.log(stn.pop())