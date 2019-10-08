function bmi(weight, height) {
	var rumus = weight/(height/100*height/100);
	console.log(rumus);
  if (rumus < 17.0){
		return "Skinny, underweight";
	} else if (rumus >= 17.0 && rumus <= 18.4){
		return "Still lack of weight";
	} else if (rumus >= 18.5 && rumus <= 27.0){
		return  "Normal";
	} else if (rumus >= 25.1 && rumus <= 27.0){
		return "Fat, but not too fat";
	} else if (rumus > 27.0){
		return"Too fat, reduce your weight! ";
	}
}
	

console.log(bmi(56,170));
