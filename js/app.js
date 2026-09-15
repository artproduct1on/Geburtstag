document.addEventListener("DOMContentLoaded", () => {

	const punkts = [
		{
			id: 1,
			text: "Ві-і-і-і-і-і-таю на квесті: Саша у пошуках дефіциту калорій! Щоб підтвердити, що ти є Булочка, введи її улюблену ягоду!",
			img: "./img/1.jfif",
			answer: "Wassermelone",
		},
		{
			id: 2,
			text: "Дуже добре, це ти. Що ж, час рухати тілом! Нехай партнер по квесту візьме тебе за ноги, так ти маєш пересуватися по квартирі. Підказку знайдеш десь на шляху до своєї кімнати. *(Не просто так ти маєш пересуватися руками!)*",
			img: "./img/2.jfif",
			answer: "Kinder",
		},
		{
			id: 3,
			text: "Боремося із шоколадом в усьому світі! Джуліан дозволяє сьогодні! Наступне запитання: На що ти з міньйоном дивишся?",
			img: "./img/3.jfif",
			answer: "Wurstchen",
		},
		{
			id: 4,
			text: "А-а-а, ось ти яка?! На ковбаси дивишся. Все з тобою зрозуміло. Напевно після такого ще й душик полюбляєш?",
			img: "./img/4.jfif",
			answer: "Mambo",
		},
		{
			id: 5,
			text: "Бешкетниця! А ну, розкажи історію Лева Алекса з другої частини та скористайся методом дедукції!",
			img: "./img/5.jfif",
			answer: "marshmallow",
		},
		{
			id: 6,
			text: "Ми вже майже на фініші... *Можливостей твоїх штанів. Потрібно подихати свіжим повітрям!",
			img: "./img/6.jfif",
			answer: "milka",
		},
		{
			id: 7,
			text: "Що ж, ти перемогла та виграла головний приз: моє кохання. У суботу 19.09.2026 збирайся на побачення!",
			img: "./img/7.jpg",
			answer: "",
		},
	];

	let isActive = 0;

	const img = document.querySelector(".img"),
		audio = document.getElementById('background-music'),
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
		if (punkts.length <= isActive + 1) {
			answerBlock.style.display = "none"
		}
		if (isActive > 0) {
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
			isActive++;
			fillingFunction(punkts[isActive])
		}
	})

});