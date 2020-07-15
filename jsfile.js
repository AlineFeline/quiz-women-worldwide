
// intialize values
var correct;
var totalquestions = 10;
var answered;

function changecolor() {
    document.getElementById('marchLabel').style.color = "#77ff65";
    document.getElementById('curacaoLabel').style.color = "#77ff65";
    document.getElementById('julianaLabel').style.color = "#77ff65";
    document.getElementById('20Label').style.color = "#77ff65";
    document.getElementById('27Label').style.color = "#77ff65";
    document.getElementById('figureskatingLabel').style.color = "#77ff65";
    document.getElementById('japanLabel').style.color = "#77ff65";
    document.getElementById('angolaLabel').style.color = "#77ff65";
    document.getElementById('1893Label').style.color = "#77ff65";
    document.getElementById('6Label').style.color = "#77ff65";
}

function calculate() {
    if (answered == totalquestions) {
        if (correct >= (totalquestions / 2)) {
            //If the condition is true, do this
            document.getElementById('result').innerHTML = "You pass!";

        } else {
            //Otherwise do this.
            document.getElementById('result').innerHTML = "You fail!";
            
        }
    }   
}

function showData() {
    answered = 0;
    correct = 0;

    // check question number 1
    if (document.getElementById('march').checked == true) {
        gData = document.getElementById('march').value;
        correct++;
    }
    // seeing if user answered question number 1
    if (
        document.getElementById('march').checked == true ||
        document.getElementById('april').checked == true ||
        document.getElementById('january').checked == true ||
        document.getElementById('may').checked == true
    ) {
        answered++;
    }

    // check question number 2
    
    if (document.getElementById('curacao').checked == true) {
        aData = document.getElementById('curacao').value;
        correct++;
    }
    
    // seeing if user answered question number 2
    if (
        document.getElementById('ukraine').checked == true ||
        document.getElementById('curacao').checked == true ||
        document.getElementById('china').checked == true ||
        document.getElementById('soudan').checked == true
    ) {
        answered++;
    }

    // check question number 3
    
    if (document.getElementById('juliana').checked == true) {
        correct++;
    }

    // seeing if user answered question number 3
    if (
        document.getElementById('mayim').checked == true ||
        document.getElementById('rachel').checked == true ||
        document.getElementById('ashley').checked == true ||
        document.getElementById('juliana').checked == true
    ) {
        answered++;
    }
    // check question number 4
    
    if (document.getElementById('20').checked == true) {
        correct++;
    }

    // seeing if user answered question number 4
    if (
        document.getElementById('20').checked == true ||
        document.getElementById('35').checked == true ||
        document.getElementById('15').checked == true ||
        document.getElementById('40').checked == true
    ) {
        answered++;
    }

    // check question number 5
    
    if (document.getElementById('27').checked == true) {
        correct++;
    }

    // seeing if user answered question number 5
    if (
        document.getElementById('78').checked == true ||
        document.getElementById('27').checked == true ||
        document.getElementById('54').checked == true ||
        document.getElementById('122').checked == true
    ) {
        answered++;
    }

    // check question number 6
    
    if (document.getElementById('figureskating').checked == true) {
        correct++;
    }

    // seeing if user answered question number 6
    if (
        document.getElementById('swimming').checked == true ||
        document.getElementById('figureskating').checked == true ||
        document.getElementById('skiing').checked == true ||
        document.getElementById('hockey').checked == true
    ) {
        answered++;
    }

    // check question number 7
    
    if (document.getElementById('japan').checked == true) {
        correct++;
    }

    // seeing if user answered question number 7
    if (
        document.getElementById('grece').checked == true ||
        document.getElementById('nepal').checked == true ||
        document.getElementById('congo').checked == true ||
        document.getElementById('japan').checked == true
    ) {
        answered++;
    }

    // check question number 8
    
    if (document.getElementById('angola').checked == true) {
        correct++;
    }

    // seeing if user answered question number 8
    if (
        document.getElementById('angola').checked == true ||
        document.getElementById('germany').checked == true ||
        document.getElementById('israel').checked == true ||
        document.getElementById('usa').checked == true
    ) {
        answered++;
    }

    // check question number 9
    
    if (document.getElementById('1893').checked == true) {
        correct++;
    }

    // seeing if user answered question number 9
    if (
        document.getElementById('1723').checked == true ||
        document.getElementById('1910').checked == true ||
        document.getElementById('1893').checked == true ||
        document.getElementById('1659').checked == true
    ) {
        answered++;
    }

    // check question number 10
    
    if (document.getElementById('6').checked == true) {
        correct++;
    }

    // seeing if user answered question number 10
    if (
        document.getElementById('18').checked == true ||
        document.getElementById('6').checked == true ||
        document.getElementById('53').checked == true ||
        document.getElementById('134').checked == true
    ) {
        answered++;
    }
    // calculate quiz result
    if (answered == totalquestions) {
        text = correct + " out of " + totalquestions;
        changecolor();
        document.getElementById('freeze').disabled = true;
    } else {
        text = "answer all the questions";
    }  
    document.getElementById('location').innerHTML = text;
  
}
