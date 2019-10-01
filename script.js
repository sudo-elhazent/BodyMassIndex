function bmi(beratBadan, tinggiBadan) {
	var rumus = beratBadan/(tinggiBadan/100*tinggiBadan/100);
	console.log(rumus);
  if (rumus < 17.0){
		return "Kurus, Kekurangan berat badan berat";
	} else if (rumus >= "17.0" && rumus <= 18.4){
		return "Kurus, Kekurangan berat badan ringan";
	} else if (rumus >= 18.5 && rumus <= 27.0){
		return  "Normal";
	} else if (rumus >= 25.1 && rumus <= 27.0){
		return "Gemuk, Kelebihan berat badan tingkat ringan";
	} else if (rumus > 27.0){
		return"Gemuk, Kelebihan berat badan tingkat berat";
	}
}
	

console.log(bmi(56,170));