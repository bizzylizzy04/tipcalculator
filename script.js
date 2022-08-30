const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// Calculate the total bill per person
const calculateBill = () => {
	// get bill from user input & convert it into a number
	const bill = Number(billInput.value);

	// get tip from user & convert it into a percentage (divide by 100)
	const tipPercentage = Number(tipInput.value) / 100;

	// get total tip amount
	const tipAmount = bill * tipPercentage;

	// calculate total (tip amount + bill)
	const total = tipAmount + bill;

	// calculate per person total (total divided by number of people)
	const perPersonTotal = total / numberOfPeople;

	// update perPersonTotal on DOM & show it to user
	perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
	// .toFixed(2) - doesn't go beyond 2 decimals
}

// Split bill between more people
const increasePeople = () => {
	// increment the amount of people
	numberOfPeople += 1;

	// update DOM with new number of people
	numberOfPeopleDiv.innerText = numberOfPeople;

	// calculate bill based on new number of people - recalculates because numberOfPeople has changed
	calculateBill();
}

// Split bill between fewer people
const decreasePeople = () => {
	// guard clause - fancy name for an IF statement
	// if amount is 1 or less simply return - doesn't allow to go negative
	if (numberOfPeople <= 1) {
		return
	}

	// decrement amount of people
	numberOfPeople -= 1;

	// update DOM with new number of people
	numberOfPeopleDiv.innerText = numberOfPeople;

	// calculate bill based on new number of people
	calculateBill();
}
