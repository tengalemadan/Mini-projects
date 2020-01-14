/*Function for decimal to hex binary octal conversion*/
function decimalToAll()
{
  var decimalNum = document.getElementById("decimal").value;
  if(!(validateDecimal(decimalNum)))
  {
    document.getElementById("invalid").innerHTML="Invalid Decimal Number! 0-9 only Or Enter Number";
    resetAllFields();
  }
  else 
  {
    var num = parseInt(decimalNum);
    var b = num.toString(2);
    var c = num.toString(8);
    var d = num.toString(16).toUpperCase();
    document.getElementById("hex").value=d;
    document.getElementById("octal").value=c;
    document.getElementById("binary").value=b;
    //if valid Number reset field
    document.getElementById("invalid").innerHTML="";
  }
}
/*Function for hex to decimal binary octal conversion*/
function hexToAll()
{
  var hexNum = document.getElementById("hex").value;
  if(!(validateHex(hexNum)))
  {
    document.getElementById("invalid").innerHTML="Invalid Hex Number! 0-9 A-F only Or Enter Number";
    resetAllFields();
  }
  else
  {
    document.getElementById("invalid").innerHTML="";
    var decimalNum = hexToDecimal(hexNum);
    var b = decimalNum.toString(2);
    var c = decimalNum.toString(8);
    //var d = num.toString(10);
    document.getElementById("decimal").value=decimalNum;
    document.getElementById("octal").value=c;
    document.getElementById("binary").value=b; 
    document.getElementById("invalid").innerHTML=""; 
  }
  
}
/*Function to convert hex to decimal */
function hexToDecimal(hex) 
{
  var base=1;
  let decimal=0
  for (var i = hex.length-1; i >=0 ; i--) {
    if(hex.charAt(i).toUpperCase()=='A'){
      let a=10;
      decimal=decimal+base*a;
    }
    else if(hex.charAt(i).toUpperCase()=='B'){
      let b=11;
      decimal=decimal+base*b;
    }
    else if(hex.charAt(i).toUpperCase()=='C'){
      let c=12;
      decimal=decimal+base*c;
    }
    else if(hex.charAt(i).toUpperCase()=='D'){
      let d=13;
      decimal=decimal+base*d;
    }
    else if(hex.charAt(i).toUpperCase()=='E'){
      let e=14;
      decimal=decimal+base*e;
    }
    else if(hex.charAt(i).toUpperCase()=='F'){
      let f=15;
      decimal=decimal+base*f;
    }
    else{
      decimal=decimal+base*parseInt(hex.charAt(i));
    }
    base=base*16;

  }
  return decimal;
}
/*Function for octal to decimal binary hex conversion*/
function octalToAll()
{
  var octal = document.getElementById("octal").value;
  if(!(validateOctal(octal)))
  {
    document.getElementById("invalid").innerHTML="Invalid octal Number! 0-7  only Or Enter Number";
    resetAllFields();
  } 
  else
  {
    document.getElementById("invalid").innerHTML="";
    var decimalNum = octalToDecimal(parseInt(octal));
    var b = decimalNum.toString(2);
    //var c = num.toString(10);
    var d = decimalNum.toString(16).toUpperCase();
    document.getElementById("hex").value=d;
    document.getElementById("decimal").value=decimalNum;
    document.getElementById("binary").value=b;  
  }
  
}
/*Funnction for convert octal to decimal*/
function octalToDecimal(octal) {
  var decimal=0;
  var base=1;
  let remainder=0;
  while (octal!=0) {
    remainder=octal%10;
    decimal=decimal+remainder*base;
    base=base*8;
    octal=Math.floor(octal/10);
  }
  return decimal;
}
/*Function for binary to decimal hex octal conversion*/
function binaryToAll()
{
  var binary = document.getElementById("binary").value;
  if(!(validateBinary(binary))||binary=="")
  {
    if (binary=="") {
      document.getElementById("invalid").innerHTML="Enter number";
    } else {
      document.getElementById("invalid").innerHTML="Invalid binary Number! 0 or 1 only "; 
    }
    resetAllFields();
  }
  else 
  {
  document.getElementById("invalid").innerHTML="";
  var num = binaryToDecimal(parseInt(binary));
  var b = num.toString(10);
  var c = num.toString(8);
  var d = num.toString(16).toUpperCase();
  document.getElementById("hex").value=d;
  document.getElementById("octal").value=c;
  document.getElementById("decimal").value=num;
  }
  
}
/*Function for binary to decimal*/
function binaryToDecimal(binary) 
{
  console.log("in binaryToDecimal() ..");
  var decimal=0;
  var base=1;
  let remainder=0;
  while (binary!=0) 
  {
    console.log("in binary while..");
    remainder=binary%10;
    decimal=decimal+remainder*base;
    base=base*2;
    binary=Math.floor(binary/10);
  }
  return decimal;

}
/*Function for reset all fields*/
function resetAllFields() 
{
  document.getElementById("hex").value="";
  document.getElementById("decimal").value="";
  document.getElementById("octal").value="";
  document.getElementById("binary").value="";
}
//Functions Written for validate inputs 
/*Hex validation */
function validateHex(hex) {
  //regex for hex input
  var patt = new RegExp("^[0-9a-fA-F]+$");
  return patt.test(hex);  
}
/**Decimal validation */
function validateDecimal(decimal) {
  //regex for decimal
  var patt = new RegExp("^[0-9]{1,100}$");
  return patt.test(decimal);
}
/**Octal validation */
function validateOctal(octal) {
  //regex for octal
  var patt = new RegExp("^[0-7]{1,100}$");
  return patt.test(octal);
}
/** */
function validateBinary(binary) {
  //regex for binary
  var patt = new RegExp("^[0-1]{1,100}$");
  return patt.test(binary);
}
/*Decimal to binary conversion*/
/*function toBinary(n)
{
  alert("to binary")
/*var bin=[];
var binary="";
for(var i=0;i<32;i++)
{
  let rem=n%2;
  console.log(n%2);
//  bin.push("rem");
  //  console.log(bin[i]);
  n=n/2;
}
for(var i=31;i>=0;i--)
{
  //binary+=bin.pop();
//  console.log(bin.splice(i,32));
  console.log(bin[i]);
}

return binary;*/
/*var bits = [];
           var dividend = n;
           var remainder = 0;
           while (dividend >= 2) {
               remainder = dividend % 2;
               bits.push(remainder);
               dividend = (dividend - remainder) / 2;
           }
           bits.push(dividend);
           bits.reverse();
           return bits.join("");
}*/
/*Decimal to octal conversion*/
