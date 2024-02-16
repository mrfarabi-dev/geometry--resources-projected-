function parallelogramCalculation(){
    const parallelogramBumiInput = document.getElementById('parallelogram-input');
    const parallelogramBumiText = parallelogramBumiInput.value ;
    const bumi = parseFloat(parallelogramBumiText);
    console.log(bumi) 

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText =  parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);

    // calculation parallelograme area
    const calculateParalelograme = bumi * height;
    console.log( 'Area of this paralelograme',calculateParalelograme);
    

    // display show paralelograme area
    const paralelogrameArea = document.getElementById('parallelogram-area');
    paralelogrameArea.innerText = calculateParalelograme;



    const pelolegramdisply =  document.getElementById('display-area');
    pelolegramdisply.innerText = calculateParalelograme;
}

function rombushCalculation(){
    const rombushDethInput = document.getElementById('rombush-input');
    const rombushDethText = rombushDethInput.value;
    const deth = parseFloat(rombushDethText);
    console.log(deth);

    const rombushAreaDeth = document.getElementById('rombush-deth');
    const rombushAreaText = rombushAreaDeth.value;
    const area = parseFloat(rombushAreaText);
    console.log(area);

    // calculatetion rombush area
    const rombush = 0.5 * deth * area;
    console.log('area of this rombush',rombush);

    // diaplay show in rombush area
    const rombushArea = document.getElementById('rombush-area');
    rombushArea.innerText = rombush;


    const rombushDispaly = document.getElementById('display-area');
    rombushDispaly.innerText = rombush;
}

function pentagonCalculation (){
    const pentagonPlaseInput = document.getElementById('pentagon-input');
    const pentagonPlasetext = pentagonPlaseInput.value;
    const plase = parseFloat(pentagonPlasetext);
    console.log(plase);

    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const base = parseFloat(pentagonBaseText);
    console.log(base);

    // calculation pentagon area
    const pentagon = 0.5 * plase * base;
    console.log(pentagon);

    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = pentagon;

    const getdisply = document.getElementById('display-area');
    getdisply.innerText = pentagon;
}

function ellipseCalculation (){
    const ellipseAbsoliutInput = document.getElementById('ellipse-input');
    const ellipseAbsoliuttext = ellipseAbsoliutInput.value;
    const absoliut = parseFloat(ellipseAbsoliuttext);
    console.log(absoliut);

    const ellipseBoomInput = document.getElementById('ellipse-boom');
    const ellipseBoomText = ellipseBoomInput.value;
    const boom = parseFloat(ellipseBoomText);
    console.log(boom);

    // calculation area of ellpse
    const ellpseArea = 3.1416 * absoliut * boom;
    console.log(ellpseArea);

    // dispaly show of ellepses area
    const ellipseDispaly = document.getElementById('ellipse-area');
    ellipseDispaly.innerText = ellpseArea;




// all dispal area
    const allDispaly = document.getElementById('display-area');
    allDispaly.innerText = ellpseArea;

   
}

