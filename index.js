

window.onload = () =>{
    mein();
}


         var errorTost = document.getElementById('errorTost')

        // var colorDisplay = document.getElementById('colorDisplay')


         var valueP1 = document.getElementById('valueP1')
         var valueP2 = document.getElementById('valueP2')
         var valueP3 = document.getElementById('valueP3')


         var range1 = document.getElementById('range1')
         var range2 = document.getElementById('range2')
         var range3 = document.getElementById('range3')


         var colorExicute = document.getElementById('disimalValue')
         var  hexValue = document.getElementById('hexValue')

         var colorDisplay = document.getElementById('colorDisplay')

         var copyColorBtn = document.getElementById('copyColorBtn')

         const radioBtn = document.getElementsByName('radio')
      
         




var   tostMsg = null ;


         copyColorBtn.addEventListener('click' , function(){
            var check = checkedValueFromRedios(radioBtn)
            if(check === null){
               throw new Error('We Dont Find Color')
            }
            if (tostMsg !== null) {
               tostMsg.remove();
               tostMsg = null;
            }
         


           


            if(isValidHex(hexValue.value) ){
            

               if(check == 'hex'){
                  console.log('hum')
                  copyColorTost(`#${hexValue.value} copied`)
                  navigator.clipboard.writeText( `#${hexValue.value}`)
               }else{
                  console.log('yeah success')
                  copyColorTost(`${colorExicute.value} copied`)
                  navigator.clipboard.writeText ( colorExicute.value)
               }
            }else{
               

                  copyColorTost("Sorry We can't find color code")
             
           
               
            }
         })
         


     

function copyColorTost(msg){
   tostMsg = document.createElement('div')
   tostMsg.innerText=msg
   tostMsg.className = 'toast-message toast-message-slide-in'
   document.body.appendChild(tostMsg)    
   //tostMsg.classList.add('toast-message-slide-in')
  

   tostMsg.addEventListener(`click`,  function(){
    // console.log('hi bangladesh')
     tostMsg.classList.remove('toast-message-slide-in')
     tostMsg.classList.add('toast-message-slide-out')
     
     tostMsg.addEventListener('animationend', function () {
      tostMsg.remove();
      tostMsg = null;
   });

  
   })
   
}


         
function mein (){
         
   
   function domUpdatefn(color){
    //  var color = hexToDecimalColors() ;
         
      range1.value = color.red
      range2.value = color.green
      range3.value = color.blue

      valueP1.innerText = color.red;
      valueP2.innerText = color.green;
      valueP3.innerText = color.blue;


    var red=  range1.value 
    var green=range2.value 
    var blue= range3.value 


   //   colorDisplay.style.background = //ganarateRGBcolor() ;
      colorExicute.value =  `rgb(${red} , ${green} , ${blue})`;
   }






 var randomBtn = document.getElementById('randomBtn')
 
 randomBtn.addEventListener('click' , function(){
    var color = ganarateRandomColor()
         

          var hex = `#${color.red.toString(16)}${color.green.toString(16)}${color.blue.toString(16)}`

          
        //  var colorDisplay = document.getElementById('colorDisplay')
          colorDisplay.style.background = hex
          var hex0 = `${color.red.toString(16)}${color.green.toString(16)}${color.blue.toString(16)}`

         
         hexValue.value = hex0
         
         
          var update =    domUpdatefn(color)
       


 })



 

 console.log(hexValue.value)
 hexValue.addEventListener('keyup' , function(e){

var hexColor = e.target.value




if(hexColor){
   hexValue.value = hexColor


   if(isValidHex(hexColor)){

      var hex2dicimal = hexToDecimalColors(hexColor)
      domUpdatefn(hex2dicimal)
     // domUpdatefn(hexColor)
      colorDisplay.style.background = `#${hexColor}`

      errorTost.style.opacity = 0;
      errorTost.style.visibility = 'hidden';
      errorTost.style.height = 0 ;
   }else{
      console.log('dont Work')
      errorTost.style.opacity = 1;
      errorTost.style.visibility = 'visible';
      errorTost.style.height = '20px' ;
      

   }
}
  
 })





 range1.addEventListener('change' , rangeSetting)
 range2.addEventListener('change' , rangeSetting)
 range3.addEventListener('change' , rangeSetting)




function rangeSetting(range){

  var red = parseInt(range1.value)
  var green = parseInt(range2.value)
  var blue = parseInt(range3.value)

  valueP1.innerText = red 
  valueP2.innerText = green 
  valueP3.innerText = blue 

 //  console.log('Yeah Active')

   var rgbColor = `rgb(${red} , ${green} , ${blue})`
   var hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
   hexValue.value = `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
   colorExicute.value = rgbColor
   colorDisplay.style.background = rgbColor









}








function ganarateRGBcolor(){
   var color =ganarateRandomColor();
   return `rgb(${color.red} , ${color.green} , ${color.blue})`
}


function hexToDecimalColors(hex) {
	const red = parseInt(hex.slice(0, 2), 16);
	const green = parseInt(hex.slice(2, 4), 16);
	const blue = parseInt(hex.slice(4 , 6), 16);

	return {
		red,
		green,
		blue,
	};
}

}




function ganarateRandomColor(){
    
    var red = Math.floor(Math.random()*255)
    var green = Math.floor(Math.random()*255)
    var blue = Math.floor(Math.random()*255)
   return {
       red, 
       green , 
       blue ,
   }
 
}



//console.log(parseInt('a0' ,16 ))






function isValidHex(color) {
   // console.log('yeah Find')
    if (color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
    
 }



 function checkedValueFromRedios(nodes){
   var checkedValue = null
   for (let i=0 ; i < nodes.length ; i++){
      if(nodes[i].checked){
         checkedValue = nodes[i].value
         break;
      }

   }
   return checkedValue ;

}