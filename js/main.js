import { postVote } from "./fb.js";

const $ = (a) => document.querySelector(a);
const $$ = (a) => document.querySelectorAll(a);

function submit() {
	let name = $(".uid").value.trim();
	let ans = ""
	$$("input[name=option]").forEach(i => (i.checked && (ans = i.value)));
	//console.table({ name, ans })

	if (!name.match(/[a-zA-Z0-9_]{5,21}/g)) return { error: `username should should be 5 - 20 character and Alpha-Numeric Only !` }
	postVote({ name, ans })
		.then(t => setBars(t));
}

$$("label").forEach(l => l.addEventListener("click", function() {
	$$("label").forEach(lab => lab.style.borderColor = "#333");
	this.style.borderColor = "#00A3FF";
}))

$("form").addEventListener("submit", submit);

function setBars({ a1, a2, a3, a4 }) {
	let pi = (a) => parseInt(a);
	a1 = pi(a1);
	a2 = pi(a2);
	a3 = pi(a3);
	a4 = pi(a4);
	//console.log({ a1, a2, a3, a4 })
	let total = a1 + a2 + a3 + a4;
	let p1 = a1 == 0 ? '0%' : pi((a1 / total) * 100) + '%';
	let p2 = a2 == 0 ? '0%' : pi((a2 / total) * 100) + '%';
	let p3 = a3 == 0 ? '0%' : pi((a3 / total) * 100) + '%';
	let p4 = a4 == 0 ? '0%' : pi((a4 / total) * 100) + '%';

	let bars = $$("label > div");
	bars[0].style.width = p1;
	bars[1].style.width = p2
	bars[2].style.width = p3
	bars[3].style.width = p4

	let pc = $$(".pc");
	pc[0].innerHTML = p1
	pc[1].innerHTML = p2
	pc[2].innerHTML = p3
	pc[3].innerHTML = p4

	$(".vote_cc").style.transform = "translateX(0)";
	$(".total_votes").innerHTML = total;

	//console.table({ p1, p2, p3, p4, total })
}

window.showError = function showError(msg) {
	$("#msg").className = "error";
	$("#msg").innerHTML = msg;
}

$("#msg").addEventListener("click", function(e) {
	this.className = "note";
	this.textContent = "Like this code so we can get more votes 😁"
})

// showError("HELLO SIR G")