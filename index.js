function handleMealOption(){
    var mealOption = document.getElementById("mealOption").value;
    var mealTypeRow = document.getElementById("mealTypeRow");

    if(mealOption === 'Office Lunch'){
        mealTypeRow.style.display = 'table-row';
    } else{
        mealTypeRow.style.display = 'none';
    }   
}
function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById('age').value = age;
}