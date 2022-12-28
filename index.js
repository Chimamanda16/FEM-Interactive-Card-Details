const form = document.getElementById("form");
const formName = document.getElementById("form-name");
const formNumber = document.getElementById("form-number");
const isNumber = /^\d+$/;
let cardCvc = document.getElementsByClassName("backcard-cvc")[0];
let cardMonth = document.getElementsByClassName("card-month")[0];
let cardName = document.getElementsByClassName("frontcard-name")[0];
let cardYear = document.getElementsByClassName("card-year")[0];
let formCvc = document.getElementsByClassName("form-cvc")[0];
let formMain = document.getElementsByTagName("form")[0];
let cardNumber = document.getElementsByClassName("frontcard-number")[0];
let formDateError = document.getElementsByClassName("formdate-error")[0];
let formNumberError = document.getElementsByClassName("formnumber-error")[0];
let formMonth = document.getElementsByClassName("month")[0];
let formYear = document.getElementsByClassName("year")[0];
let thanksContainer = document.getElementsByClassName("thank-you-div")[0];
thanksContainer.style.display = "none";
//Card Name Update Function
formName.addEventListener("keyup", function nameUpdate(){
	cardName.innerHTML = formName.value;
	if (formName.value.length ===  0){
		cardName.innerHTML = "Chimamanda Unachukwu";
	}
});
// Card Number Update Function
formNumber.addEventListener("keyup", function cardNumberUpdate(){
	if (isNumber.test(formNumber.value) === true || formNumber.value.length === 0){
		cardNumber.innerHTML = formNumber.value;
		cardNumber.innerHTML = cardNumber.innerHTML.replace(/(.{4})/g, "$1 ");
		formNumberError.innerHTML = "";
		if (formNumber.value.length === 0){
			cardNumber.innerHTML = "0000 0000 0000 0000";
		}
	}
	else{
		formNumberError.innerHTML = "Wrong Format Numbers Only";
	}
})
// Card month Update function
formMonth.addEventListener("keyup", function monthUpdate(){
	if (isNumber.test(formMonth.value) === true || formMonth.value.length === 0){
		if (formMonth.value <= 12){
			cardMonth.innerHTML = formMonth.value;
			formDateError.innerHTML = "";
			if (formMonth.value.length === 0){
				cardMonth.innerHTML = "00";
			}
		}
		else if(formMonth.value > 12){
			formDateError.innerHTML = "Number cannot be greater than 12";
		}
	}
	else{
		formMonth.value = "";
	}
});
// Card Year Update Function
formYear.addEventListener("keyup", function yearUpdate(){
	if(isNumber.test(formYear.value) === true || formYear.value.length === 0){
		cardYear.innerHTML = formYear.value;
		if (formYear.value.length === 0){
			cardYear.innerHTML = "00";
		}
	}
	else{
		formYear.value = "";
	}
})
formCvc.addEventListener("keyup", function cvcUpdate(){
	if (isNumber.test(formCvc.value) === true || formCvc.value.length === 0){
		cardCvc.innerHTML = formCvc.value;
		if (formCvc.value.length === 0){
			cardCvc.innerHTML = "000";
		}
	}
	else{
		formCvc.value = "";
	}
})
function buttonValidation(){
	for(i=0; i<5; i++){
		var inputs = document.getElementsByTagName("input");
		var inputList = Array.from(inputs);
		const checkValue = inputList.every(item => {
		    return (item.value.length > 0);
		})
		inputList.forEach(function(input){
			if (input.value.length === 0){
				var errorMessage = input.parentNode.getElementsByTagName("small")[0];
				errorMessage.innerHTML = "Can't be blank";
				input.addEventListener("keyup", function(){
					if (input.value.length > 0){
						errorMessage.innerHTML = "";
					}})
			}
			else if (checkValue === true){
				formMain.style.display = "none";
				thanksContainer.style.display = "block";
			}
		})
	}
}

function continueButton(){
	thanksContainer.style.display = "none";
	formMain.style.display = "block";
}