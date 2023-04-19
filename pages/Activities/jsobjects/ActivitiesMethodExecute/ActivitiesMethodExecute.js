export default {
	myFun1: () => {
		//write code here
		if(ChooseMethod.selectedOptionValue == "Delete") {
			ButtonDoMethod.isVisible = true
			Container1.isVisible = false
		} else if(ChooseMethod.selectedOptionValue == "Update") {
			ButtonDoMethod.isVisible = false
			Container1.isVisible = true
		} else {
			Container1.isVisible = false
			ButtonDoMethod.isVisible = false
		}
	}
}