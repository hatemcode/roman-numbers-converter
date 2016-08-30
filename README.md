# Roman Numbers Converter

## How to use as end-user ?

1. Just open the page (converter.html) in your modern browser. 
2. Make sure you're connected to the interner in order to get Bootstrap and JQuery from CDN.
3. Submit integer or roman symbols into input box and click convert.
4. You will see the result under the input box.

![alt tag](http://i.imgur.com/ztz9b1u.png)

## How to use as developer ?
- The core library is roman-numbers-converter.js which is located at js folder.
- The library namespaced with "roman".
- Easily use this public function to convert regular number to roman pattern:
```javascript
var result = roman.convertToRoman(1014);
```
- Or you can convert from roman number to regular number
```javascript
var result = roman.convertToNumber("CIX");
```

## Test Drive ?
Please go [here](http://htmlpreview.github.io/?https://github.com/hatemcode/roman-numbers-converter/master/converter.html) to run the app.
###### That's all !
