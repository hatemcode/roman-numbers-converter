/**
 * @Roman Numbers Converter
 * @author Hatem A. <hatem@tuta.io>
 * @version 1.0
 * @licence Licensed under the Apache License, Version 2.0
 */
 
$(document).ready(function(){
  
  // on click convert
  $("#convert-to-roman-button").click(function(event1){
    event1.preventDefault();
    
    // hide previous errors and results
    $(".error").hide();
    $(".result").hide();
    
    // get value and convert it to integer
    var value = $("#regular-number-input").val();
    value = parseInt(value);
    var result = roman.convertToRoman(value);
    
    // if convertion is ok show the result
    if(result !== null){
      $("#roman-number-result").html(result);
      $("#roman-number-result").show();
      
    // if not show error  
    }else{
      $("#error").show();
    }
  });
  
  // input mask
  $("#regular-number-input").keyup(function(){

    var value = $("#regular-number-input").val();
    var index = value.length - 1;
    
    if(!value[index].match(/\d/g)){
      value = value.substring(0,index);     
      $("#regular-number-input").val(value);
    }
  });
});
