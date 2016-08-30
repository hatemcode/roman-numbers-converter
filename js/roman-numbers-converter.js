/**
 * @Roman Numbers Converter
 * @author Hatem A. <hatem@tuta.io>
 * @version 1.0
 * @licence Licensed under the Apache License, Version 2.0
 */

if(typeof roman == "undefined"){
  var roman = (function(){

    // basic roman symbols
    var symbols = [{1:"I",5:"V",10:"X",50:"L",100:"C",500:"D",1000:"M"}];

    /**
       * Convert number into roman number.
       *
       * @param {Integer} num - the number .
       * @returns {String} number in roman pattern or null if cannot converted.
       */
    convertToRoman = function(num){
      if(typeof num === "number" && !Number.isNaN(num)){
        var romanNumber = getSymbol(num);

        if(romanNumber == undefined){

          romanNumber = "";
          var brokenNums = numberBreaker(num);

          for(var i=0;i < brokenNums.length;i++){
            var romanDecNum = convertDecimalNumberToRoman(brokenNums[i]);
            romanNumber += romanDecNum;
          }
        }

        return romanNumber;
      }
      return null;
    };

    /**
       * Convert roman number into regular number.
       *
       * @param {Integer} num - roman number .
       * @returns {Integer} number or null if cannot converted.
       */
    convertToNumber = function(roman){
      if(typeof roman === "string"){
        var num = getNumberBySymbol(roman);
        
        if(num == undefined){
          return calculateNumber(roman);
        }else{
          return num;
        }
      }
      return null;
    };

      /**
       * Calculate the regular number.
       *
       * @param {Integer} num - roman number .
       * @returns {Integer} basic regular number.
       */
    calculateNumber = function(roman){
      roman = roman.split("");
      
      var total = 0;
      
      for(var i=0;i < roman.length;i++){
        var current = roman[i];
        
        if(i < roman.length - 1){
          var next = roman[i+1];
          var toAdd;

          if(next !== current){
            
            if(current < next){
              toAdd = getNumberBySymbol(next) - getNumberBySymbol(current);
              
              if(toAdd > 0){
                total += toAdd;
                i++;
              }else{
                total += getNumberBySymbol(current); 
              }              
            }else if( current > next){
              toAdd = getNumberBySymbol(next) + getNumberBySymbol(current);
              total += toAdd;

              i++;
            }
            
          }else{
            total += getNumberBySymbol(current); 
          }

        }else{
          total += getNumberBySymbol(current);
        } 
      }
      
      return total;
    };
    
    
    /**
       * Breaks number into decimal places.
       *
       * @param {Integer} num - the number .
       * @returns {Array} decimal places.
       */
    numberBreaker = function(num){

      var str = num.toString();
      var len = str.length;
      var brokenNums = [];
      var mult = 1;

      for(var i = (len - 1); i >= 0 ;i--){
        var decNum = parseInt(str[i]) * mult;
        if(decNum !== 0){
          brokenNums.push(decNum);
        }

        mult = mult * 10;
      }

      brokenNums.reverse();
      return brokenNums;  
    };


    /**
       * Convert decimal number into roman number.
       *
       * @param {Integer} num - the number .
       * @returns {String} number in roman pattern.
       */
    convertDecimalNumberToRoman = function(num){
      var symbol =  getSymbol(num);
      if(symbol !== undefined){
        return symbol;
      }else if(num < 1000) {
        var symbolsByKey = Object.keys(symbols[0]);
        for (var i= 0; i < symbolsByKey.length; i++){
          var current = symbolsByKey[i];
          var next = symbolsByKey[i+1];

          if(num > current && num < next){
            return calculateSymbol(num,current,next);        
          }
        }
      }else if(num > 1000){
        return calculateSymbol(num,null,null); 
      }
    };

    /**
       * Calculate the roman symbol.
       *
       * @param {Integer} num - the number .
       * @param {Integer} low - the left roman basic number.
       * @param {Integer} high - he right roman basic number.
       * @returns {String} number in roman pattern.
       */
    calculateSymbol = function(num,low,high){
      var mult = getDecimalPlace(num);
      var symbol = "";
      if(num < 1000){
       if(num == (high-mult)){
          symbol = getSymbol(mult) + getSymbol(high);
          return symbol;
        }else{
          var diff = (num - low);
          var div = diff/mult;
          var total = 0;

          for(var i=1;i<=div;i++){
              total += mult;
              symbol += symbols[0][mult];
          }

          if(num - low - total > 0){
             symbol += convertDecimalNumberToRoman(num - low - total);
          }

          symbol = symbols[0][low] + symbol;
          return symbol;
        }   
      }else{

        var numAfterThousands = num;
        while(numAfterThousands > 1000){
          numAfterThousands -= 1000;
          symbol += getSymbol(1000);

          symbol += convertDecimalNumberToRoman(numAfterThousands);
          return symbol;
        }
      }

    };


    /**
       * Get roman basic number symbol..
       *
       * @param {Integer} num - the number .
       * @returns {String} number in roman pattern.
       */
    getSymbol = function(num){
      return symbols[0][num];
    };
    

    /**
       * Get decimal place multiple.
       *
       * @param {Integer} num - the number .
       * @returns {Integer} multiple.
       */
    getDecimalPlace = function(num){
      var mult = 10;

        if(num < 10){
          mult = 1;
        }else{
           while(num/mult > 10){
             mult *= 10;
           }
        }

      return mult;
    };

        /**
       * Get basic regular number by its roman symbol.
       *
       * @param {String} symbol - roman number .
       * @returns {Integer} basic regular number.
       */
    getNumberBySymbol = function(symbol){
      var symbolsByKey = Object.keys(symbols[0]);
      for (var i= 0; i < symbolsByKey.length; i++){
        
        if(getSymbol(symbolsByKey[i]) === symbol){
          return parseInt(symbolsByKey[i]);
        }
      }
    };
    
    return{
      convertToRoman:convertToRoman,
      convertToNumber:convertToNumber
    }
  }());
} 
