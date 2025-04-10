//your JS code here. If required.
function functionName(){
	let p=document.querySelector("p");
	p.textContent=`alert("${arguments.callee.name}");`;
}
functionName();