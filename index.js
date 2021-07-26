var DoomsdayButton = document.getElementById("DoomsdayButton");
DoomsdayButton.addEventListener("click", function() {
    calculateDoomsday();
});

var YearNum = document.getElementById("YearNum");
var MonthNum = document.getElementById("MonthNum");
var DateNum = document.getElementById("DateNum");

var DoomsdayResult = document.getElementById("DoomsdayResult");

//Doomsday 0000 = monday (adjusted for leap year)
var Doomsday0000 = 1;

function calculateDoomsday() {

    //Get input values
    var YearNumValue = YearNum.value;
    var MonthNumValue = MonthNum.value;
    var DateNumValue = DateNum.value;
    alert(YearNumValue + "/" + MonthNumValue + "/" + DateNumValue);

    //Check valid inputs

    //Anchor calculation
    var YearCentury = Math.floor(YearNumValue/100);
    var isLeapCentury = YearCentury % 4 == 0;
    //Calculate simple anchor doomsday
    var AnchorDoomsday = Math.abs(Doomsday0000 - (YearCentury * 2));
    if(isLeapCentury) { //If anchor century was a leap year, doomsday is 29, so +=1
        AnchorDoomsday += 1;
    }
    AnchorDoomsday = AnchorDoomsday % 7;
    alert("Anchor - " + YearCentury + "00: " + AnchorDoomsday);
    //Year calculation
    var YearSinceCentury = YearNumValue - (YearCentury*100);
    var isLeapYear = YearSinceCentury % 4 == 0;
    var YearDoomsday = AnchorDoomsday + YearSinceCentury + Math.floor(YearSinceCentury / 4);
    alert("Year - " + YearSinceCentury + ": " + YearDoomsday);
    //Month calulation
    var MonthDoomsday;
    switch(MonthNumValue) {
        case 1: //January
            if(isLeapYear) {
                MonthDoomsday = 32;
            } else {
                MonthDoomsday = 31;
            }
            break;
        case 2: //February
            if(isLeapYear) {
                MonthDoomsday = 29;
            } else {
                MonthDoomsday = 28;
            }
            break;
        case 3: //March
            MonthDoomsday = 7;
            break;
        case 4: //April
            MonthDoomsday = 4;
            break;
        case 5: //May
            MonthDoomsday = 9;
            break;
        case 6: //June
            MonthDoomsday = 6;
            break;
        case 7: //July
            MonthDoomsday = 11;
            break;
        case 8: //August
            MonthDoomsday = 8;
            break;
        case 9: //Septempber
            MonthDoomsday = 5;
            break;
        case 10: //October
            MonthDoomsday = 10;
            break;
        case 11: //November
            MonthDoomsday = 7;
            break;
        case 12: //December
            MonthDoomsday = 12;
            break;
    }
    alert(MonthDoomsday + ": " + YearDoomsday);
    //Date calculation
    var DateDifference = DateNumValue - MonthDoomsday;
    var DateDoomsday = YearDoomsday + DateDifference;
    DateDoomsday = DateDoomsday % 7;
    alert(DateNumValue + ": " + DateDoomsday);
}