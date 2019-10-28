
//кнопка скрыть меню
document.getElementById("HideMenuBtn").addEventListener("click", hideMenuBlock); 
function hideMenuBlock() {
    document.getElementById("menu-block").classList.add("hidden");
    document.getElementById("HideMenuBtn").classList.add("hidden");
    document.getElementById("ShowMenuBtn").classList.remove("hidden");
        
}

//кнопка показать меню
document.getElementById("ShowMenuBtn").addEventListener("click", showMenuBlock); 
function showMenuBlock() {
    document.getElementById("menu-block").classList.remove("hidden");
    document.getElementById("HideMenuBtn").classList.remove("hidden");
    document.getElementById("ShowMenuBtn").classList.add("hidden");
}


//функции кнопок меню
//труба
document.getElementById("TubeBtn").addEventListener("click", showTubeCalc); 
function showTubeCalc() {
    document.getElementById("tube").classList.remove("hidden");
    document.getElementById("round").classList.add("hidden");
    document.getElementById("hex").classList.add("hidden");
    document.getElementById("square").classList.add("hidden");
    document.getElementById("sheet").classList.add("hidden");
    document.getElementById("corner").classList.add("hidden");
    //активная кнопка
    document.getElementById("TubeBtn").classList.add("activated-btn");
    document.getElementById("RoundBtn").classList.remove("activated-btn");
    document.getElementById("HexBtn").classList.remove("activated-btn");
    document.getElementById("SquareBtn").classList.remove("activated-btn");
    document.getElementById("SheetBtn").classList.remove("activated-btn");
    document.getElementById("CornerBtn").classList.remove("activated-btn");
    //прятать меню на мобильных экранах
    document.getElementById("HideMenuBtn").classList.remove("hidden");
    if (screen.width < 1200)  {
        hideMenuBlock();
    }
    else {

    }
}

//круг
document.getElementById("RoundBtn").addEventListener("click", showRoundCalc); 
function showRoundCalc() {
    document.getElementById("tube").classList.add("hidden");
    document.getElementById("round").classList.remove("hidden");
    document.getElementById("hex").classList.add("hidden");
    document.getElementById("square").classList.add("hidden");
    document.getElementById("sheet").classList.add("hidden");
    document.getElementById("corner").classList.add("hidden");
    //активная кнопка
    document.getElementById("TubeBtn").classList.remove("activated-btn");
    document.getElementById("RoundBtn").classList.add("activated-btn");
    document.getElementById("HexBtn").classList.remove("activated-btn");
    document.getElementById("SquareBtn").classList.remove("activated-btn");
    document.getElementById("SheetBtn").classList.remove("activated-btn");
    document.getElementById("CornerBtn").classList.remove("activated-btn");
    //прятать меню на мобильных экранах
    document.getElementById("HideMenuBtn").classList.remove("hidden");
    if (screen.width < 1200)  {
        hideMenuBlock();
    }
    else {

    }
}
//шестигранник
document.getElementById("HexBtn").addEventListener("click", showHexCalc); 
function showHexCalc() {
    document.getElementById("tube").classList.add("hidden");
    document.getElementById("round").classList.add("hidden");
    document.getElementById("hex").classList.remove("hidden");
    document.getElementById("square").classList.add("hidden");
    document.getElementById("sheet").classList.add("hidden");
    document.getElementById("corner").classList.add("hidden");
    //активная кнопка
    document.getElementById("TubeBtn").classList.remove("activated-btn");
    document.getElementById("RoundBtn").classList.remove("activated-btn");
    document.getElementById("HexBtn").classList.add("activated-btn");
    document.getElementById("SquareBtn").classList.remove("activated-btn");
    document.getElementById("SheetBtn").classList.remove("activated-btn");
    document.getElementById("CornerBtn").classList.remove("activated-btn");
    //прятать меню на мобильных экранах
    document.getElementById("HideMenuBtn").classList.remove("hidden");
    if (screen.width < 1200)  {
        hideMenuBlock();
    }
    else {

    }
}
//квадрат
document.getElementById("SquareBtn").addEventListener("click", showSquareCalc); 
function showSquareCalc() {
    document.getElementById("tube").classList.add("hidden");
    document.getElementById("round").classList.add("hidden");
    document.getElementById("hex").classList.add("hidden");
    document.getElementById("square").classList.remove("hidden");
    document.getElementById("sheet").classList.add("hidden");
    document.getElementById("corner").classList.add("hidden");
    //активная кнопка
    document.getElementById("TubeBtn").classList.remove("activated-btn");
    document.getElementById("RoundBtn").classList.remove("activated-btn");
    document.getElementById("HexBtn").classList.remove("activated-btn");
    document.getElementById("SquareBtn").classList.add("activated-btn");
    document.getElementById("SheetBtn").classList.remove("activated-btn");
    document.getElementById("CornerBtn").classList.remove("activated-btn");
    //прятать меню на мобильных экранах
    document.getElementById("HideMenuBtn").classList.remove("hidden");
    if (screen.width < 1200)  {
        hideMenuBlock();
    }
    else {

    }
}

//лист
document.getElementById("SheetBtn").addEventListener("click", showSheetCalc); 
function showSheetCalc() {
    document.getElementById("tube").classList.add("hidden");
    document.getElementById("round").classList.add("hidden");
    document.getElementById("hex").classList.add("hidden");
    document.getElementById("square").classList.add("hidden");
    document.getElementById("sheet").classList.remove("hidden");
    document.getElementById("corner").classList.add("hidden");
    //активная кнопка
    document.getElementById("TubeBtn").classList.remove("activated-btn");
    document.getElementById("RoundBtn").classList.remove("activated-btn");
    document.getElementById("HexBtn").classList.remove("activated-btn");
    document.getElementById("SquareBtn").classList.remove("activated-btn");
    document.getElementById("SheetBtn").classList.add("activated-btn");
    document.getElementById("CornerBtn").classList.remove("activated-btn");
    //прятать меню на мобильных экранах
    document.getElementById("HideMenuBtn").classList.remove("hidden");
    if (screen.width < 1200)  {
        hideMenuBlock();
    }
    else {

    }
}

//уголок
document.getElementById("CornerBtn").addEventListener("click", showCornerCalc); 
function showCornerCalc() {
    document.getElementById("tube").classList.add("hidden");
    document.getElementById("round").classList.add("hidden");
    document.getElementById("hex").classList.add("hidden");
    document.getElementById("square").classList.add("hidden");
    document.getElementById("sheet").classList.add("hidden");
    document.getElementById("corner").classList.remove("hidden");
    //активная кнопка
    document.getElementById("TubeBtn").classList.remove("activated-btn");
    document.getElementById("RoundBtn").classList.remove("activated-btn");
    document.getElementById("HexBtn").classList.remove("activated-btn");
    document.getElementById("SquareBtn").classList.remove("activated-btn");
    document.getElementById("SheetBtn").classList.remove("activated-btn");
    document.getElementById("CornerBtn").classList.add("activated-btn");
    //прятать меню на мобильных экранах
    document.getElementById("HideMenuBtn").classList.remove("hidden");
    if (screen.width < 1200)  {
        hideMenuBlock();
    }
    else {

    }
}
//END функции кнопок меню


//функции расчета заготовок
//расчет трубы  
//событие кнопки "рассчитать"
document.getElementById("calcTubeBtn").addEventListener("click", tubeCalc); 
//функция расчета массы трубы
function tubeCalc() {
    var diametr = document.getElementById("diametr").value;
    var thickness = document.getElementById("thickness").value;
    var length = document.getElementById("length").value;
    var v1 = 3.14*((diametr/2)*(diametr/2))*length;
    var v2 = (3.14*((((diametr/2)-thickness))*((diametr/2)-thickness)))*length;
    var vTr = (v1-v2)/1000000000;
    var density = document.getElementById("density");
    var densityVal = density.options[density.selectedIndex].value;
    var massaKg = densityVal*(vTr);
    var massaG = massaKg*1000;
    var massaKgOut = document.getElementById("mas-kg-out");
    var massaGOut = document.getElementById("mas-g-out");
    var dAlert = document.getElementById("d-alert");
    var tAlert = document.getElementById("t-alert");
    var lAlert = document.getElementById("l-alert");
    var outBlockTube = document.getElementById("out-block-tube");
    outBlockTube.innerHTML = 'Труба '+ diametr + 'x' + thickness + ', длиной ' + length +' мм<br>' +'из материала: '+ density.options[density.selectedIndex].text;
    massaKgOut.value = massaKg.toFixed(3);
    massaGOut.value = massaG.toFixed(3);
    
    //условия проверки исходных данных
    if (diametr == '') {
        dAlert.innerHTML = 'Введите значение!';
        outBlockTube.innerHTML = '';
    }
    else {
        dAlert.innerHTML = '';
    }
    if (thickness == '') {
        tAlert.innerHTML = 'Введите значение!';
        outBlockTube.innerHTML = '';
    }
    else {
        tAlert.innerHTML = '';

        if (massaGOut.value < 0) {
            tAlert.innerHTML = 'S должно быть меньше D!';
            massaKgOut.value = '';
            massaGOut.value = '';
            outBlockTube.innerHTML = '';
          }
          else {
              tAlert.innerHTML = '';
          }
    }
    if (length == '') {
        lAlert.innerHTML = 'Введите значение!';
        outBlockTube.innerHTML = '';
    }
    else {
        lAlert.innerHTML = '';
    }

}
//очистка формы (расчет трубы)   
document.getElementById("resetTubeBtn").addEventListener("click", newCalcTube);
function newCalcTube() {
    document.getElementById("diametr").value = '';
    document.getElementById("thickness").value = '';
    document.getElementById("length").value = '';
    document.getElementById("mas-kg-out").value = '';
    document.getElementById("mas-g-out").value = '';
    document.getElementById("d-alert").innerHTML = '';
    document.getElementById("t-alert").innerHTML = '';
    document.getElementById("l-alert").innerHTML = '';
    document.getElementById("out-block-tube").innerHTML = '';
}
//END расчет трубы  


//расчет круглого прутка
document.getElementById("calcRoundBtn").addEventListener("click", roundCalc);
function roundCalc() {
    var diametrRound = document.getElementById("diametr-round").value;
    var lengthRound = document.getElementById("length-round").value;
    var volRound = (3.14*((diametrRound/2)*(diametrRound/2))*lengthRound)/1000000000;
    var densityRound = document.getElementById("density-round");
    var densityRoundVal = densityRound.options[densityRound.selectedIndex].value;
    var massaRoundKg = densityRoundVal*(volRound);
    var massaRoundG = massaRoundKg*1000;
    var massaKgRoundOut = document.getElementById("mas-kg-out-round");
    var massaGRoundOut = document.getElementById("mas-g-out-round");
    var dAlertRound = document.getElementById("d-alert-round");
    var lAlertRound = document.getElementById("l-alert-round");
    var outBlockRound = document.getElementById("out-block-round");
    outBlockRound.innerHTML = 'Пруток круглого сечения диаметром '+ diametrRound + ' мм'+', длиной ' + lengthRound +' мм<br>' +'из материала: '+ densityRound.options[densityRound.selectedIndex].text;
    massaKgRoundOut.value = massaRoundKg.toFixed(3);
    massaGRoundOut.value = massaRoundG.toFixed(3);

    if (diametrRound == '') {
        dAlertRound.innerHTML = 'Введите значение!';
        outBlockRound.innerHTML = '';
    }
    else {
        dAlertRound.innerHTML = '';
    }
    if (lengthRound == '') {
        lAlertRound.innerHTML = 'Введите значение!';
        outBlockRound.innerHTML = '';
    }
    else {
        lAlertRound.innerHTML = '';
    }

}
//очистка формы (расчет круглого прутка)   
document.getElementById("resetRoundBtn").addEventListener("click", newCalcRound);
function newCalcRound() {
    document.getElementById("diametr-round").value = '';
    document.getElementById("length-round").value = '';
    document.getElementById("mas-kg-out-round").value = '';
    document.getElementById("mas-g-out-round").value = '';
    document.getElementById("out-block-round").innerHTML = '';
}
//END расчет круг. прутка



//расчет шестигранного прутка
document.getElementById("calcHexBtn").addEventListener("click", hexCalc);
function hexCalc() {
    var sizeHex = document.getElementById("size-hex").value;
    var lengthHex = document.getElementById("length-hex").value;
    var volHex = (2*1.723*((sizeHex/2)*(sizeHex/2))*lengthHex)/1000000000;
    var densityHex = document.getElementById("density-hex");
    var densityHexVal = densityHex.options[densityHex.selectedIndex].value;
    var massaHexKg = densityHexVal*(volHex);
    var massaHexG = massaHexKg*1000;
    var massaKgHexOut = document.getElementById("mas-kg-out-hex");
    var massaGHexOut = document.getElementById("mas-g-out-hex");
    var dAlertHex = document.getElementById("d-alert-hex");
    var lAlertHex = document.getElementById("l-alert-hex");
    var outBlockHex = document.getElementById("out-block-hex");
    outBlockHex.innerHTML = 'Шестигранник размером '+ sizeHex + ' мм'+', длиной ' + lengthHex +' мм,<br>' +'из материала: '+ densityHex.options[densityHex.selectedIndex].text;
    massaKgHexOut.value = massaHexKg.toFixed(3);
    massaGHexOut.value = massaHexG.toFixed(3);

    if (sizeHex == '') {
        dAlertHex.innerHTML = 'Введите значение!';
        outBlockHex.innerHTML = '';
    }
    else {
        dAlertHex.innerHTML = '';
    }
    if (lengthHex == '') {
        lAlertHex.innerHTML = 'Введите значение!';
        outBlockHex.innerHTML = '';
    }
    else {
        lAlertHex.innerHTML = '';
    }

}

//очистка формы (расчет шестигранника)   
document.getElementById("resetHexBtn").addEventListener("click", newCalcHex);
function newCalcHex() {
    document.getElementById("size-hex").value = '';
    document.getElementById("length-hex").value = '';
    document.getElementById("mas-kg-out-hex").value = '';
    document.getElementById("mas-g-out-hex").value = '';
    document.getElementById("out-block-hex").innerHTML = '';
}

//END расчет шестигранника

//расчет квадрата
document.getElementById("calcSquareBtn").addEventListener("click", squareCalc);
function squareCalc() {
    var dimASquare = document.getElementById("dim-a-square").value;
    var dimBSquare = document.getElementById("dim-b-square").value;
    var lengthSquare = document.getElementById("length-square").value;
    var volSquare = (dimASquare*dimBSquare*lengthSquare)/1000000000;
    var densitySquare = document.getElementById("density-square");
    var densitySquareVal = densitySquare.options[densitySquare.selectedIndex].value;
    var massaSquareKg = densitySquareVal*volSquare;
    var massaSquareG = massaSquareKg*1000;
    var massaKgSquareOut = document.getElementById("mas-kg-out-square");
    var massaGSquareOut = document.getElementById("mas-g-out-square");
    var aAlertSquare = document.getElementById("a-alert-square");
    var bAlertSquare = document.getElementById("b-alert-square");
    var lAlertSquare = document.getElementById("l-alert-square");
    var outBlockSquare = document.getElementById("out-block-square");
    outBlockSquare.innerHTML = 'Пруток с размером сечения '+ dimASquare + 'x' + dimBSquare + ' мм' + ', длиной ' + lengthSquare +' мм<br>' +'из материала: '+ densitySquare.options[densitySquare.selectedIndex].text;
    massaKgSquareOut.value = massaSquareKg.toFixed(3);
    massaGSquareOut.value = massaSquareG.toFixed(3);

    if (dimASquare == '') {
        aAlertSquare.innerHTML = 'Введите значение!';
        outBlockSquare.innerHTML = '';
    }
    else {
        aAlertSquare.innerHTML = '';
    }
    if (dimBSquare == '') {
        bAlertSquare.innerHTML = 'Введите значение!';
        outBlockSquare.innerHTML = '';
    }
    else {
        bAlertSquare.innerHTML = '';
    }
    if (lengthSquare == '') {
        lAlertSquare.innerHTML = 'Введите значение!';
        outBlockSquare.innerHTML = '';
    }
    else {
        lAlertSquare.innerHTML = '';
    }

}

//очистка формы (расчет квадрата)   
document.getElementById("resetSquareBtn").addEventListener("click", newCalcSquare);
function newCalcSquare() {
    document.getElementById("dim-a-square").value = '';
    document.getElementById("dim-b-square").value = '';
    document.getElementById("length-square").value = '';
    document.getElementById("mas-kg-out-square").value = '';
    document.getElementById("mas-g-out-square").value = '';
    document.getElementById("out-block-square").innerHTML = '';
}
//END расчет квадрата

//расчет листа
document.getElementById("calcSheetBtn").addEventListener("click", sheetCalc);
function sheetCalc() {
    var dimBSheet = document.getElementById("dim-b-sheet").value;
    var dimSSheet = document.getElementById("dim-s-sheet").value;
    var lengthSheet = document.getElementById("length-sheet").value;
    var sqSheetMM = (dimBSheet*lengthSheet);
    var sqSheetM = (dimBSheet*lengthSheet)/1000000;
    var densitySheet = document.getElementById("density-sheet");
    var densitySheetVal = densitySheet.options[densitySheet.selectedIndex].value;
    var volSheet = (sqSheetMM*dimSSheet)/1000000000;
    var massaSheetKg = densitySheetVal*volSheet;
    var massaSheetG = massaSheetKg*1000;
    var massaKgSheetOut = document.getElementById("mas-kg-out-sheet");
    var massaGSheetOut = document.getElementById("mas-g-out-sheet");
    var sAlertSheet = document.getElementById("s-alert-sheet");
    var bAlertSheet = document.getElementById("b-alert-sheet");
    var lAlertSheet = document.getElementById("l-alert-sheet");
    document.getElementById("sq-mm-out-sheet").value = sqSheetMM;
    document.getElementById("sq-m-out-sheet").value = sqSheetM;
    var outBlockSheet = document.getElementById("out-block-sheet");
    outBlockSheet.innerHTML = 'Лист с размерами '+ dimBSheet + 'x' + lengthSheet + ' мм' + ', толщиной ' + dimSSheet +' мм<br>' +'из материала: '+ densitySheet.options[densitySheet.selectedIndex].text;
    massaKgSheetOut.value = massaSheetKg.toFixed(3);
    massaGSheetOut.value = massaSheetG.toFixed(3);

    if (dimSSheet == '') {
        sAlertSheet.innerHTML = 'Введите значение!';
        outBlockSheet.innerHTML = '';
    }
    else {
        sAlertSheet.innerHTML = '';
    }
    if (dimBSheet == '') {
        bAlertSheet.innerHTML = 'Введите значение!';
        outBlockSheet.innerHTML = '';
    }
    else {
        bAlertSheet.innerHTML = '';
    }
    if (lengthSheet == '') {
        lAlertSheet.innerHTML = 'Введите значение!';
        outBlockSheet.innerHTML = '';
    }
    else {
        lAlertSheet.innerHTML = '';
    }

}

//очистка формы (расчет листа)   
document.getElementById("resetSheetBtn").addEventListener("click", newCalcSheet);
function newCalcSheet() {
    document.getElementById("dim-s-sheet").value = '';
    document.getElementById("dim-b-sheet").value = '';
    document.getElementById("length-sheet").value = '';
    document.getElementById("mas-kg-out-sheet").value = '';
    document.getElementById("mas-g-out-sheet").value = '';
    document.getElementById("sq-mm-out-sheet").value = '';
    document.getElementById("sq-m-out-sheet").value = '';
    document.getElementById("out-block-sheet").innerHTML = '';
}
//END расчет листа

//расчет уголка
document.getElementById("calcCornerBtn").addEventListener("click", cornerCalc);
function cornerCalc() {
    var dimACorner = document.getElementById("dim-a-corner").value;
    var dimBCorner = document.getElementById("dim-b-corner").value;
    var dimSCorner = document.getElementById("dim-s-corner").value;
    var lengthCorner = document.getElementById("length-corner").value;
    var sqCorner = ((dimACorner*dimBCorner)-((dimACorner-dimSCorner)*(dimBCorner-dimSCorner)));
    var volCorner = (sqCorner*lengthCorner)/1000000000;
    var densityCorner = document.getElementById("density-corner");
    var densityCornerVal = densityCorner.options[densityCorner.selectedIndex].value;
    var massaCornerKg = densityCornerVal*volCorner;
    var massaCornerG = massaCornerKg*1000;
    var massaKgCornerOut = document.getElementById("mas-kg-out-corner");
    var massaGCornerOut = document.getElementById("mas-g-out-corner");
    var aAlertCorner = document.getElementById("a-alert-corner");
    var bAlertCorner = document.getElementById("b-alert-corner");
    var sAlertCorner = document.getElementById("s-alert-corner");
    var lAlertCorner = document.getElementById("l-alert-corner");
    var outBlockCorner = document.getElementById("out-block-corner");
    outBlockCorner.innerHTML = 'Уголок с размерами: A = ' + dimACorner + ' мм' +  ', B = ' + dimBCorner + ' мм, ' + 'S = ' + dimSCorner + ' мм' + ', длиной ' + lengthCorner +' мм<br>' +'из материала: '+ densityCorner.options[densityCorner.selectedIndex].text;
    massaKgCornerOut.value = massaCornerKg.toFixed(3);
    massaGCornerOut.value = massaCornerG.toFixed(3);

    if (dimACorner == '') {
        aAlertCorner.innerHTML = 'Введите значение!';
        outBlockCorner.innerHTML = '';
    }
    else {
        aAlertCorner.innerHTML = '';
    }
    if (dimBCorner == '') {
        bAlertCorner.innerHTML = 'Введите значение!';
        outBlockCorner.innerHTML = '';
    }
    else {
        bAlertCorner.innerHTML = '';
    }
    if (dimSCorner == '') {
        sAlertCorner.innerHTML = 'Введите значение!';
        outBlockCorner.innerHTML = '';
    }
    else {
        sAlertCorner.innerHTML = '';

        if (massaGCornerOut.value < 0) {
            sAlertCorner.innerHTML = 'S должно быть меньше A и B!';
            massaKgCornerOut.value = '';
            massaGCornerOut.value = '';
            outBlockCorner.innerHTML = '';
          }
          else {
            sAlertCorner.innerHTML = '';
          }
    }
    if (lengthCorner == '') {
        lAlertCorner.innerHTML = 'Введите значение!';
        outBlockCorner.innerHTML = '';
    }
    else {
        lAlertCorner.innerHTML = '';
    }

}

//очистка формы (расчет уголка)   
document.getElementById("resetCornerBtn").addEventListener("click", newCalcCorner);
function newCalcCorner() {
    document.getElementById("dim-a-corner").value = '';
    document.getElementById("dim-b-corner").value = '';
    document.getElementById("dim-s-corner").value = '';
    document.getElementById("length-corner").value = '';
    document.getElementById("mas-kg-out-corner").value = '';
    document.getElementById("mas-g-out-corner").value = '';
    document.getElementById("out-block-corner").innerHTML = '';
}
//END расчет уголка