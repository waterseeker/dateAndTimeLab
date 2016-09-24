var library = (function() {

//get the current date object
var currentDate = new Date();

//get the current month as a # and add one to change it from 0 index to 1 index
var monthNumber = currentDate.getMonth() +1;

//array with total number of days in the year up to the month you index
var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

//turns all single-digit numerical months into double-digit numbers
var monthDblDigit = function(){
	if (monthNumber < 10) {
		return ("0" + monthNumber);
	}  else {
		return monthNumber;
	}
	}();

//array with month abbreviations
var abrMonthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//get the abbreviated month name
var abrOfCurrentMonth = (abrMonthArray[currentDate.getMonth()]);

//array with month names
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//returns the name of the current month from monthNames
var currentMonth = (monthNames[currentDate.getMonth()]);

//returns the day of the week
var dayNumber = currentDate.getDate();

//puts st, nd, rd, or th on the end of the dayNumber
var ordinalDay = function (){
	if (dayNumber>3 && dayNumber < 21) return "th";

	else if ((dayNumber % 10) == 1) return "st";
	else if ((dayNumber % 10) == 2) return "nd";
	else if ((dayNumber % 10) == 3) return "rd";
	else return "th";

	}();


//returns the date in double digit format
var dayDblDigit = function(){
	if (dayNumber < 10) {
		return ("0" + dayNumber);
	} else {
		return dayNumber;
	}
}();

// Check to see if it's a leap year'
var isLeapYear = function() {
    var fullYear = currentDate.getFullYear();
    if((fullYear % 4) != 0) return false;
    return ((fullYear % 100) != 0 || (fullYear % 400) == 0);
};

// Get Day of Year
var getDayOfYear = function() {
    var mn = currentDate.getMonth();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};


	return {
	TimeStamp: (function(){
		return {
		UnixTimestamp: function(){

		},
		UnixMillisecond: function(){

		}
	  }
	})(),
	
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	
	Second: (function(){
		return{
			Second: function(){},
			DblDigit: function(){
		
			}
		}
	})(),
	
	Minute: (function(){
		return{
			Minute: function(){},
			DblDigit: function(){}
		}
	})(),
	
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),

	Week: (function(){
		return {
			DayOfWeek: function(){},
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
		}
	})(),
	
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						return currentDate.getDate().toString();
					},
					Ordinal: function(){
						return (dayNumber + ordinalDay).toString();
					},
					DateDblDigit: function(){
						return dayDblDigit.toString();
					}
				}
			})(),
			MonthNumber: function(){
				return monthNumber.toString();
			},
			MonthNumberDblDigit: function(){
				return monthDblDigit.toString();
			},
			AbrOfCurrentMonth: function(){
				return abrOfCurrentMonth.toString();
			},
			CurrentMonth: function(){
				return currentMonth.toString();
			}
		}
	})(),
	
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){},
			YearAbr: function(){}
		}
	})(),
	Defaults: function(){}
	}
})();