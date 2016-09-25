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
// get month number on 0 iundex
var monthNumberZeroIndex = currentDate.getMonth();

//array with month abbreviations
var abrMonthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// add 0 to a number that's less than 10'
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};


var hour = addZero(currentDate.getHours());
var minute = addZero(currentDate.getMinutes());
var second = addZero(currentDate.getSeconds());


var dateTime = Date.now();

//get the abbreviated month name
var abrOfCurrentMonth = (abrMonthArray[currentDate.getMonth()]);

//array with month names
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//returns the name of the current month from monthNames
var currentMonth = (monthNames[currentDate.getMonth()]);

//gets year number
var currentYear = currentDate.getFullYear();

//returns the date of the month
var dayNumber = currentDate.getDate();

//return day number of the week 
var dayOfWeek = currentDate.getDay();

//puts st, nd, rd, or th on the end of the dayNumber
var ordinalDay = function (){
	if (dayNumber>3 && dayNumber < 21) return "th";

	else if ((dayNumber % 10) == 1) return "st";
	else if ((dayNumber % 10) == 2) return "nd";
	else if ((dayNumber % 10) == 3) return "rd";
	else return "th";

	}();

//array of weekday names
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//get name of the day from dayNames array
var dayOfWeek = (dayNames[dayOfWeek]);


//returns the date in double digit format
var dayDblDigit = function(){
	if (dayNumber < 10) {
		return ("0" + dayNumber);
	} else {
		return dayNumber;
	}
}();

//military Time
var twentyFourHour = currentDate.getHours();

//day of the year
var timeStmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
var yearFirstDay = Math.floor(timeStmp / 86400000);
var today = Math.ceil((new Date().getTime()) / 86400000);
var dayOfYear = today - yearFirstDay;

//12 hour time
var twelveHour = function() {
				if (twentyFourHour <= 12) {
					return twentyFourHour;
				} else {
					return (twentyFourHour % 12);
				}
}();

//return am or pm
var amPm = function (){
	if (twentyFourHour >= 12) {
		return ("pm");
	} else {
		return ("am");
	}
}();

//get seconds
var seconds = currentDate.getSeconds();

// Check to see if it's a leap year'
var isLeapYear = function() {
    if((currentYear % 4) != 0) return false;
    return ((currentYear % 100) != 0 || (currentYear % 400) == 0);
}();


	return {
	TimeStamp: (function(){
		return {
		UnixTimestamp: function(){
			var timeStamp = Math.floor(dateTime / 1000);
			return timeStamp.toString();
		},
		UnixMillisecond: function(){
			return new Date().getTime();
		}
	  }
	})(),
	
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
						return (twelveHour + ":" + minute + ":" + second) + " " + (amPm.toUpperCase().toString()).toString();
					},
	   	    WithOutSeconds: function() {
						return (twelveHour + ":" + minute) + " " + (amPm.toUpperCase().toString()).toString();
					 }
		  }
		})(),
		
		MDY: (function(){
	  	  return {
		    Numeral: function(){
				return (monthNumber + "/" + dayDblDigit + "/" + currentYear).toString();
				},
			Name: function(){
				return (currentMonth + " " + dayDblDigit + "," + " " + currentYear).toString();
			}
		  }
		  })(),
		}
	})(),
	
	Second: (function(){
		return{
			Second: function(){
				 return seconds.toString();
			},
			DblDigit: function(){
				 if (seconds < 10) {
					 return ("0" + seconds).toString();
				 } else {
					 return seconds.toString();
				 }
			}
		}
	})(),
	
	Minute: (function(){
		return{
			Minute: function(){
				return currentDate.getMinutes().toString();
			},
			DblDigit: function(){
				if (currentDate.getMinutes() < 10) {
					return ("0" + (currentDate.getMinutes())).toString();
				} else {
					return (currentDate.getMinutes()).toString();
				}
			}
		}
	})(),
	
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				return twentyFourHour.toString();
			},
			TwelveHour: function() {
				if (twentyFourHour <= 12) {
					return twentyFourHour.toString();
				} else {
					return (twentyFourHour % 12).toString();
				}
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						return amPm.toUpperCase().toString();
					},
					LowerCase: function(){
						return amPm.toString();
					}
				}
			})()
		}
	})(),

	Week: (function(){
		return {
			DayOfWeek: function(){
				return dayOfWeek.toString();
			},
			AbrDayOfWeek: function(){
				return dayOfWeek.substring (0,3);
			},
			FirstTwoOfWeek: function(){
				return dayOfWeek.substring (0,2);
			},
			WeekOfYear: function(){
				return weekNumber.toString();
			}
			
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
					Numeral: function(){
						return dayOfYear.toString();
					},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){
				return currentYear.toString();
			},
			YearAbr: function(){
				return (currentYear % 100).toString();
			}
		}
	})(),
	Defaults: function(){
		return (currentYear + "-" + monthDblDigit + "-" + dayDblDigit + "T" + twentyFourHour + ":" + minute + ":" + second).toString();
	}
	}
})();