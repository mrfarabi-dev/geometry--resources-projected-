/**
 *Objective : get base, height of a tringle. calculate the area by using the 
 provided formula. add then display the area.
 *
 * step-: 1 - get base value
 *
 */ 

function calculetTraingleArea(){
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBasetext = triangleBaseInput.value ;
   const base = parseFloat(triangleBasetext);
   console.log(typeof base);

// get triangle height value
   const triangleHeightInput = document.getElementById('triangle-hight');
   const triangleHeighttext = triangleHeightInput.value ;
   const height = parseFloat(triangleHeighttext);
   console.log(height);
   
//    calculate triangle area
   const area = 0.5 * base * height;
   console.log('area triangle of this :',area);


//    display triangle area
   const triandleAreaSpan = document.getElementById('triangle-area');
   triandleAreaSpan.innerText = area;

   const areaofdispy = document.getElementById('display-area');
   areaofdispy.innerText= area;

  
}

function calculetNewArea (){
    //    get triangle width area
    const triangleWidthInput = document.getElementById('triangle-width');
    const triangleWidthText = triangleWidthInput.value ;
    const width = parseFloat(triangleWidthText);
    console.log(width);
 
 //    get triangle i area
 
    const triangleInputArea = document.getElementById('triangle-input');
    const triangleInputText = triangleInputArea.value ;
    const input = parseFloat(triangleInputText);
    console.log(input);
 
 //    calculate  triangle width area
    const areaof = width * input;
    console.log('area triangle of this :',areaof);
 
 //    dispaly triangle area 
    const trianglewidthspan = document.getElementById('triangle-areaof');
    trianglewidthspan.innerText = areaof;
 
    const newDisply = document.getElementById('display-area');
    newDisply.innerText = areaof;
}
