const fruit = [
	"Apple",
	"Apricot",
	"Avocado 🥑",
	"Banana",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry",
	"Boysenberry",
	"Currant",
	"Cherry",
	"Coconut",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit",
	"Kumquat",
	"Lemon",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango",
	"Mangosteen",
	"Marionberry",
	"Melon",
	"Cantaloupe",
	"Honeydew",
	"Watermelon",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach",
	"Pear",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
];

const textInput = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

// ==== code sitation start ====
// Code sourced and modified from youtube https://www.youtube.com/watch?v=pdyFf1ugVfk user GreatStack
textInput.onkeyup = function () {
	let result = [];
	let input = textInput.value;
	if (input.length) {
		result = fruit.filter((keyword) => {
			return keyword.toLowerCase().includes(input.toLowerCase());
		});
		// console.log(result);
	}
	showSuggestions(result);
	if (!result.length) {
		textInput.innerHTML = "";
	}
};
function showSuggestions(result) {
	const content = result.map((list) => {
		return "<li>" + list + "</li>";
	});
	suggestions.innerHTML = "<ul>" + content.join("") + "</ul>";
}
function useSuggestion(evt) {
	console.dir(evt.target);
	textInput.value = evt.target.innerText;
	suggestions.innerHTML = "";
}
//==== code sitation end ====
suggestions.addEventListener("click", useSuggestion);
