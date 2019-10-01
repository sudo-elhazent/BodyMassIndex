function bmi(weight, height) {
	var formula = weight/(height/100*height/100);
	console.log(formula);
  if (formula < 17.0){
		return "Skinny, underweight";
	} else if (formula >= 17.0 && formula <= 18.4){
		return "Still lack of weight";
	} else if (formula >= 18.5 && formula <= 27.0){
		return  "Normal";
	} else if (formula >= 25.1 && formula <= 27.0){
		return "Fat, but not too fat";
	} else if (formula > 27.0){
		return"Too fat, reduce your weight! ";
	}
}
	

console.log(bmi(56,170));
