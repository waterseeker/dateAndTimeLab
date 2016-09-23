var library = (function() {
var currentDate = new Date;
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
					Numeral: function(){},
					Ordinal: function(){},
					DateDblDigit: function(){}
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
			CurrentMonth: function(){}
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