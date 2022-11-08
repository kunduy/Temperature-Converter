var frtmp,totmp,inpval;
function TempType(){
   var temptype= document.getElementById("mylist");
   var optionIndex = temptype.options.selectedIndex;
    frtmp=temptype.options[optionIndex].value;
   console.log(frtmp);
}
function TempType1(){
   var temptype= document.getElementById("mylist1");
   var optionIndex = temptype.options.selectedIndex;
    totmp=temptype.options[optionIndex].value;
   console.log(totmp);
}
function Inputvalue(){
     let inval=document.getElementById("in").value;
     inpval = parseInt(inval);
    
}
function Convert()
{
    var temptype= document.getElementById("mylist1");
   var optionIndex = temptype.options.selectedIndex;
    totmp=temptype.options[optionIndex].value;
   console.log(totmp);
   var caltemp=document.getElementById("output").innerText;
    console.log(caltemp);

    if(frtmp=="Celsius"){
         if(totmp=="Celsius" )caltemp=inpval;
         else if(totmp=="Fahrenheit") caltemp=1.8*inpval+32;
         else if(totmp=="Kelvin") caltemp=inpval+273.15;

    }
    else  if(frtmp=="Fahrenheit"){
         if(totmp=="Fahrenheit" )caltemp=inpval;
         else if(totmp=="Celsius")caltemp= 5*(inpval-32)/9;
         else if(totmp=="Kelvin") caltemp=5*(inpval-32)/9+273.15;

    }
    else  if(frtmp=="Kelvin"){
         if(totmp=="Kelvin" )caltemp=inpval;
         else if(totmp=="Celsius")caltemp= inpval-273.15;
         else if(totmp=="Fahrenheit") caltemp=1.8*(inpval-273.15)+32;
    }
    console.log(caltemp);
    document.querySelector("#output").value=caltemp;            
}