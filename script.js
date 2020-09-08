const count = document.getElementById('count');

const add = document.getElementById("add-btn");
const minus = document.getElementById('minus-btn');

let myCount = 0;

add.addEventListener('click', function(){
	//Console.log("Add was")
	myCount +=1;
	//Console.log(myCount);
	count.innerHTML = myCount;
	if(myCount > 0){
		count.style.color = '#2ecc71';
	}
});


minus.addEventListener('click',function(){
	myCount -=1;
	count.innerHTML = myCount;
	if(myCount < 0){
		count.style.color = "#e74c3c";
	}
});