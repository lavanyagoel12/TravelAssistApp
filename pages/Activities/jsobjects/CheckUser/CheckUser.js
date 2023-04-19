export default {
	myFun1: () => {
		//write code here
		if(Select_User.selectedOptionValue == "TRAVELER") {
			navigateTo('Itineraries', {}, 'SAME_WINDOW')
		}
	}
}