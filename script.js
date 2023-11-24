// alert("hi");
let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");
//console.log(kgRef.value);

//add event
kgRef.addEventListener("input", function(){
	let kg=kgRef.value;
	//console.log(kg);
   //toFixed(2) limits the decimals to 2 digits.
   lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
});

lbRef.addEventListener("input", function(){
	let lb=lbRef.value;
	//console.log(kg);
   //toFixed(2) limits the decimals to 2 digits.
  kgRef.value = (lb / 2.205).toFixed(2);
  ozRef.value = (lb * 16).toFixed(2);
});

ozRef.addEventListener("input", function(){
	let oz=ozRef.value;
	//console.log(kg);
   //toFixed(2) limits the decimals to 2 digits.
  kgRef.value = (oz / 35.274).toFixed(2);
  lbRef.value = (oz / 16).toFixed(2);
});

window.addEventListener("load",function(){
	let kg=kgRef.value;
	//console.log(kg);
   //toFixed(2) limits the decimals to 2 digits.
   lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
});