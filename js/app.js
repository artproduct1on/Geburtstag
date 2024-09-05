document.addEventListener("DOMContentLoaded", () => {




	const punkts = [
		{
			id: 1,
			text: "Aloha, ich habe gehört, dass du mir helfen könntest, einen Weg zu meiner Ohana (Familie) zu finden. Aber ich möchte sicher sein, dass du Sasha bist. Sag mir dein Lieblingsessen!",
			img: "./img/start.jpg",
			answer: "wassermelone",
		},
		{
			id: 2,
			text: "Ja, das bist wirklich du. Dann fangen wir an: Es gibt ein kleines Zimmer, Darin ein Becken und eine Bürste. Wasser kann man dort ablassen, Kannst du erraten, was das ist? Dann find es. Es gibt einen Code.",
			img: "./img/2.gif",
			answer: "Wasser",
		},
		{
			id: 3,
			text: "Du bist gut gemacht! Aber es ist noch zu früh, um sich zu freuen. Es liegt ein langer Weg vor uns: Hat einen Griff und einen Schnabel, bringt Wasser zum Kochen ohne Probleme. Aus ihm gießt du deinen Tee, was ist das? Versuch es zu erraten!",
			img: "./img/3.gif",
			answer: "Strom",
		},
		{
			id: 4,
			text: "Wow, wir sind einen Schritt näher gekommen: Er bringt das Universum ins Haus, leuchtet hell im Raum und macht Krach. Bilder ändern sich darin schnell, die Fernbedienung ist sein Helfer. Was ist das?",
			img: "./img/4.gif",
			answer: "Fernbedienung",
		},
		{
			id: 5,
			text: "Es ist sehr schwierig, aber wir haben bereits die Hälfte geschafft: Er hat Türen, die zur Seite aufgehen, und darin sind Kleidung und Schuhe ordentlich verstaut – was ist das?",
			img: "./img/5.gif",
			answer: "Kleidung",
		},
		{
			id: 6,
			text: "Letzter Schritt, man kann es einen Hof nennen, ist es aber nicht!",
			img: "./img/6.gif",
			answer: "Geschenk",
		},
		{
			id: 7,
			text: "Hurra, du hast mich gefunden. Vielen Dank. Jetzt lasst uns deinen Geburtstag feiern!",
			img: "./img/end.jpg",
			answer: "",
		},
	]

	let isActive = 0;

	const 	img = document.querySelector(".img"),
			audio  = document.getElementById('background-music'),
			answerBlock = document.querySelector(".answer"),
			answerInput = document.querySelector(".answer__input"),
			countAllMain = document.querySelector(".count__all--main"),
			countEnteredMain = document.querySelector(".count__entered--main"),
			countAllAnswer = document.querySelector(".count__all--answer"),
			countEnteredAnswer = document.querySelector(".count__entered--answer"),
			text = document.querySelector(".text");

	countAllMain.textContent = punkts.length;
	

	const fillingFunction = (item) => {
		img.src = item.img;
		countEnteredAnswer.textContent = 0;
		countAllAnswer.textContent = item.answer.length;
		countEnteredMain.textContent = isActive + 1;
		answerInput.value = "";
		text.textContent = item.text;
		if (punkts.length <= isActive+1) {
			answerBlock.style.display = "none"
		}
		if ( isActive > 0 ) {
			audio.src = "./music/" + isActive + ".mp3";
			audio.play();
		}

	};
	audio.volume = 0.4;
	fillingFunction(punkts[isActive]);

	answerInput.addEventListener("input", (e) => {
		const value = e.target.value;
		countEnteredAnswer.textContent = value.length;
		if (value.toLowerCase() === punkts[isActive].answer.toLowerCase()) {
			isActive ++;
			fillingFunction(punkts[isActive])
		}
	})

});