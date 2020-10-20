function bomain(beratTubuh, tinggiTubuh) {
	var rumus = beratTubuh/(tinggiTubuh/100*tinggiTubuh/100);
	console.log(rumusnya);
	
  if (rumusnya < 17.0){
		return "Kurus, Kekurangan berat badan berat";
	} else if (rumusnya >= 17.0 && rumusnya <= 18.4){
		return "Kurus, Kekurangan berat badan ringan";
	} else if (rumusnya >= 18.5 && rumusnya <= 27.0){
		return  "Normal";
	} else if (rumusnya >= 25.1 && rumusnya <= 27.0){
		return "Gemuk, Kelebihan berat badan tingkat ringan";
	} else if (rumusnya > 27.0){
		return"Gemuk sekali, Kelebihan berat badan tingkat berat";
	}
}
	

console.log(bomain(56,170));
