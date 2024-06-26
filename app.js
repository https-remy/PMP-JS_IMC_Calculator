// IMC = weight in kg / height² in m

const BMIData = [
  { name: "Thinness", color: "midnightblue", range: [0, 18.5] },
  { name: "Good health", color: "green", range: [18.5, 25] },
  { name: "Overweight", color: "lightcoral", range: [25, 30] },
  { name: "Moderate obesity", color: "orange", range: [30, 35] },
  { name: "Severe obesity", color: "crimson", range: [35, 40] },
  { name: "Morbid obesity", color: "purple", range: 40 },
];

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

form.addEventListener("submit", handleForm);

function handleForm(event) {
	event.preventDefault();

	calculateBMI();
}

function calculateBMI() {
	const height = inputs[0].value;
	const weight = inputs[1].value;

	if (!height || !weight || height <= 0 || weight <= 0) {
		handleError();
		return;
	}

	const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);

	showResult(BMI);
}

function handleError() {
	displayBMI.textContent = "Wops !";
	displayBMI.style.color = "crimson";
	result.textContent = "Put correct values.";
}

function showResult(BMI) {
	const rank = BMIData.find((data) => {
		if (BMI >= data.range[0] && BMI < data.range[1])
			return data;
	});

	displayBMI.style.color = rank.color;
	displayBMI.textContent = BMI;
	result.textContent = `Result : ${rank.name}`;
}