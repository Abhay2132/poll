const $ = (a) => document.querySelector(a);
const $$ = (a) => document.querySelectorAll(a);

function submit () {
	let name = $(".uid").value;
	let ans = ""
	$$("input[name=option]").forEach(i => (i.checked && (ans = i.value)) );
	console.table({name, ans})
	
	fetch(`http://phppro.rf.gz/poll/q1.php?name=${name}&ans=${ans}`)
	.then(a => a.json())
	.then(t => setBars(t));
}

$$("label").forEach(l => l.addEventListener("click",  function () {
	$$("label").forEach(lab => lab.style.borderColor = "#333");
	this.style.borderColor = "#00A3FF";
}))

$("form").addEventListener("submit", submit);

function setBars ({a1, a2, a3, a4}) {
	let total = a1 + a2 + a3 + a4;
	let p1 = (a1 / total).toFixed(1) * 100 + '%';
	let p2 = (a2 / total).toFixed(1) * 100 + '%';
	let p3 = (a3 / total).toFixed(1) * 100 + '%';
	let p4 = (a4 / total).toFixed(1) * 100 + '%';
	
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

	console.table({p1, p2, p3, p4, total})
}