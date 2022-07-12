"use strict";

const notes = { note1: 275, note2: 40, note3: 430 };

const tips = (addition) => {
	return addition > 50 && addition <=300 ? addition * 0.15 : addition * 0.20;
}



console.log("La note était de :" + notes.note1," le pourboire de : " +  tips(275) ," et la valeur totale était de : " + (notes.note1 + tips(275)));
console.log("La note était de :" + notes.note2," le pourboire de : " + tips(40)," et la valeur totale était de : " + (notes.note1 + tips(40)));
console.log("La note était de :" + notes.note3," le pourboire de : " +tips(430)," et la valeur totale était de  : " + (notes.note1 + tips(430)));


