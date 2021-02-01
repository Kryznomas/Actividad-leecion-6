$(document).ready(function(){

    /* --------------------Variables--------------------------- */
    var inputOperandoa = $('#input-operandoa');
    var inputOperandob = $('#input-operandob');
    var inputOperacion = $('#input-operacion');
    var resultadoFinal = $('#res');
    var fijoIgual = $('#fijo-igual')
    var operacion;
    var reset = $('#reset');
    var suma = $('#suma');
    var resta = $('#resta');
    var multiplicacion = $('#multiplicacion');
    var division = $('#division');
    var igual = $('#igual');
    var potencia =$('#potencia');
    var raiz = $('#raiz');
    var masmenos =$('#masmenos');
    var punto = $('#punto');
    var uno = $('#uno');
    var dos = $('#dos');
    var tres = $('#tres');
    var cuatro = $('#cuatro');
    var cinco = $('#cinco');
    var seis = $('#seis');
    var siete = $('#siete');
    var ocho = $('#ocho');
    var nueve = $('#nueve');
    var cero = $('#cero');
    
    /*------------------------- Eventos -----------------------*/
    
    $(uno).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("1");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("1");
        }
        else if (inputOperacion.text() !== "") {
            inputOperandob = inputOperandob.append("1");
        }
    });
    $(dos).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("2");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("2");
        }
        else {
            inputOperandob = inputOperandob.append("2");
        }
    });
    $(tres).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("3");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("3");
        }
        else {
            inputOperandob = inputOperandob.append("3");
        }
    });
    $(cuatro).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("4");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("4");
        }
        else {
            inputOperandob = inputOperandob.append("4");
        }
    });
    $(cinco).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("5");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("5");
        }
        else {
            inputOperandob = inputOperandob.append("5");
        }
    });
    $(seis).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("6");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("6");
        }
        else {
            inputOperandob = inputOperandob.append("6");
        }
    });
    $(siete).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("7");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("7");
        }
        else {
            inputOperandob = inputOperandob.append("7");
        }
    });
    $(ocho).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("8");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("8");
        }
        else {
            inputOperandob = inputOperandob.append("8");
        }
    });
    $(nueve).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("9");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("9");
        }
        else {
            inputOperandob = inputOperandob.append("9");
        }
    });
    $(cero).click(function() {
        if (resultadoFinal.text() !== "") {
            resetear();
            inputOperandoa = inputOperandoa.append("0");
        }
        else if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append("0");
        }
        else {
            inputOperandob = inputOperandob.append("0");
        }
    });
    $(punto).click(function(){
        if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.append(".");
        }
        else {
            inputOperandob = inputOperandob.append(".");
        }
    });
    $(masmenos).click(function(){
        if (inputOperacion.text() == ""){
            inputOperandoa = inputOperandoa.prepend("-");
        }
        else {
            inputOperandob = inputOperandob.prepend("-");
        }
    });
    $(igual).click(function() {
        operandob = inputOperandob.text();
        fijoIgual = fijoIgual.text("=");
        resolver();
    });
    $(reset).click(function() {
        resetear();
    });

    /*------------------------- Operaciones --------------------------*/

    $(suma).click(function(){
        operandoa = inputOperandoa.text();
        operacion = "+";
        inputOperacion = inputOperacion.text("+");
    });
    $(resta).click(function(){
        operandoa = inputOperandoa.text();
        operacion = "-";
        inputOperacion = inputOperacion.text("-");
    });
    $(multiplicacion).click(function(){
        operandoa = inputOperandoa.text();
        operacion = "*";
        inputOperacion = inputOperacion.text("*");
    })
    $(division).click(function(){
        operandoa = inputOperandoa.html();
        operacion = "/";
        inputOperacion = inputOperacion.text("/");
    })
    $(potencia).click(function(){
        operandoa = inputOperandoa.html();
        operacion = "^";
        inputOperacion = inputOperacion.text("^");
    })
    $(raiz).click(function(){
        operandoa = inputOperandoa.html();
        operandob = inputOperandob.html();
        
        if(operandoa !== ""){
            resultadoFinal = resultadoFinal.text("Error de sintaxis.")
        }
        else {
        operacion = "√";
        inputOperacion = inputOperacion.text("√");
        }
    })

    /*----------------------------Funciones------------------------ */

    function resetear(){
        $(inputOperandoa).html("");
        $(inputOperandob).html("");
        $(inputOperacion).html("");
        $(resultadoFinal).html("");
        $(fijoIgual).html("");
        operandoa= 0;
        operandob = 0;
        operacion = "";
    }
    
    function resolver(){

        resultadoFinal = resultadoFinal.text("")
        var res = 0;
        switch(operacion){
            case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
            
            case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
            
            case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
            
            case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
            
            case "^":
            res = parseFloat(operandoa) ** parseFloat(operandob);

            case "√":
            
            res = Math.sqrt(operandob);
            
        }
        
        $(resultadoFinal).text(res);
        
        if ( resultadoFinal.text() == "NaN"){
                resultadoFinal = resultadoFinal.text("Error de cálculo.");
        }
    };
})