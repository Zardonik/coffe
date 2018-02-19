
// var ans = 4;
// var quetion = "Ваше число?";
// var g = Number(prompt(quetion));

// while(g!=4){
// 	g = Number(prompt(que));
// }

// if(g>10){
// 	document.write(">>>>>>>>>>>");
// }else if (g<0) {
// 	document.write("<<<<<<<<<<<");
// }else if (g>4 && g<10) {
// 	document.write("near >>>>>>");
// }else if (g>0 && g<4) {
// 	document.write("near <<<<<<");
// }else if (g===4) {
// 	document.write("<<<{...}>>>");
// }

// alert("Отгадай загадки");
//     var b = prompt('Всегда он в работе,Когда говорим,А отдыхает,Когда мы молчим.');
//     var a = 0;
//     if (b == 'Язык' || 'Мысли') {
//         alert("Верно");
//         a = a + 1
//     }
//     else {
//         alert("неверно");
//         a=a
//     }
//     alert("Верных ответов=" + a);
//     alert("Конец");
var a = Number(prompt("Enter amount:"));
var b = prompt("choose a drink <late 10>,<americano 10>,<cappuccino 15>,<russiano 20>");
if (b=="late") {
	if (a<10) {
		var value = Number(prompt("insufficient funds"));
		a+=value;
	} 
	if (a>=10) {
		alert("Your drink: late balance: "+(a-10))
	}
}

if (b=="americano") {
	if (a<10) {
		var value = Number(prompt("insufficient funds"));
		a+=value;
	} 
	if (a>=10) {
		alert("Your drink: americano Balance: "+(a-10))
	}
}

if (b=="cappuccino") {
	if (a<15) {
		var value = Number(prompt("insufficient funds"));
		a+=value;
	} 
	if (a>=15) {
		alert("Your drink: cappuccino. Balance: "+(a-15))
	}
}

if (b=="russiano") {
	if (a<20) {
		var value = Number(prompt("insufficient funds"));
		a+=value;
	} 
	if (a>=20) {
		alert("Your drink: russiano. Balance: "+(a-20))
	}
}