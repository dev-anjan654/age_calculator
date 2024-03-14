const inputAge= document.querySelector(".input-age");
const calcBtn= document.querySelector(".cal-btn");
const ageResult= document.querySelector(".age-result");

//disable the future Date
const presentDate = new Date();
const presentDay = presentDate.getDate();
const presentMonth = presentDate.getMonth();
const presentYear = presentDate.getFullYear();
const presentDayString = (presentDay < 0) ? `0${presentDay}` : presentDay;
const presentMonthString = (presentMonth < 0) ? `0${presentMonth}` : presentMonth;
const currentDate = `${presentYear}-0${presentMonthString}-${presentDayString}`;

inputAge.max = currentDate;

//age calculation
calcBtn.addEventListener("click",()=>{
    if(inputAge.value==""){
        alert("Please enter Date of Birth");
    }
    else{
        //birth date calculation//
        const dob= inputAge.value;
        let myDate = new Date(dob);
        const birthYear= myDate.getFullYear();
        const birthMonth= myDate.getMonth();
        const birthDay= myDate.getDate();
        
        //current date calculation//
        const myCurrentDate = new Date();
        const currentYear=myCurrentDate.getFullYear();
        const currentMonth= myCurrentDate.getMonth();
        const currentDay= myCurrentDate.getDate();
        
        //age calculation//
        let ageYears= currentYear-birthYear;
        let ageMonth, ageDay;
    
        if(currentMonth>=birthMonth){
           ageMonth= currentMonth-birthMonth;
        }
        else{
            ageYears--;
            ageMonth= 12+currentMonth-birthMonth;
        }
        if(currentDay>=birthDay){
            ageDay= currentDay-birthDay;
        }
        else{
            ageMonth--;
            ageDay = 30+currentDay-birthDay;
        }
        ageResult.innerHTML=`You are ${ageYears} Years ${ageMonth} Months ${ageDay} Days old.`
    }   
        
})