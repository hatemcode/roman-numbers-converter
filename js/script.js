/**
 * Roman Numbers Converter
 * @author Hatem A. <hatem@tuta.io>
 * @version 1.0
 * @licence Licensed under the Apache License, Version 2.0
 */
 
$(document).ready(function(){
    
  // on click convert to roman
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
      $("#error").html("Please write Integer only (except 0) !");
      $("#error").show();
    }
  });

    // on click convert to number
  $("#convert-to-number-button").click(function(event1){
    event1.preventDefault();
    
    // hide previous errors and results
    $(".error").hide();
    $(".result").hide();
    
    // get value and convert it to integer
    var value = $("#roman-number-input").val();
    var result = roman.convertToNumber(value);
    
    // if convertion is ok show the result
    if(result !== null && value != ""){
      $("#number-result").html(result);
      $("#number-result").show();
      
    // if not show error  
    }else{
      $("#error").html("Please write Roman Number !");
      $("#error").show();
    }
  });
  
  // input mask
  $("#regular-number-input").keyup(function(){

    var value = $("#regular-number-input").val();
    var index = value.length - 1;
    
    if(!value[index].match(/[1-9]+/g)){
      value = value.substring(0,index);     
      $("#regular-number-input").val(value);
    }
  });

  $("#roman-number-input").keyup(function(){
    
    var value = $("#roman-number-input").val();
    $("#roman-number-input").val(value.toUpperCase());
    var index = value.length - 1;
    
    if(!value[index].match(/[IiVvMmLlXxMmCcDd]/g)){
      value = value.substring(0,index);     
      $("#roman-number-input").val(value.toUpperCase());
    }
  });
});
