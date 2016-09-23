var library = (function() {
var currentDate = new Date();
var monthNumber = currentDate.getMonth() +1;
var monthDblDigit = function(){
	if (monthNumber < 10) {
		return ("0" + monthNumber);
	}  else {
		return monthNumber;
	}
	}();
var abrMonthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var abrOfCurrentMonth = (abrMonthArray[currentDate.getMonth()]);
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = (monthNames[currentDate.getMonth()]);
var dayNumber = currentDate.getDate();

var ordinalDay = function (){
	if (dayNumber>3 && dayNumber < 21) return "th";

	else if ((dayNumber % 10) == 1) return "st";
	else if ((dayNumber % 10) == 2) return "nd";
	else if ((dayNumber % 10) == 3) return "rd";
	else return "th";

	}();

var dayDblDigit = function(){
	if (dayNumber < 10) {
		return ("0" + dayNumber);
	} else {
		return dayNumber;
	}
}();


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