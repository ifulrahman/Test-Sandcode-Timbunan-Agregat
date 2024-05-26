function calculate() {
    // Get input values
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const input4 = parseFloat(document.getElementById('input4').value);
    const input6 = parseFloat(document.getElementById('input6').value);
    const input8 = parseFloat(document.getElementById('input8').value);
    const input9 = parseFloat(document.getElementById('input9').value);
    const input13 = parseFloat(document.getElementById('input13').value);
    const input15 = parseFloat(document.getElementById('input15').value);
    const input17 = parseFloat(document.getElementById('input17').value);
    const inputA = parseFloat(document.getElementById('inputA').value);
    const inputB = parseFloat(document.getElementById('inputB').value);
    const inputD = parseFloat(document.getElementById('inputD').value);
    const inputF2 = parseFloat(document.getElementById('inputF2').value);

    // Calculate values
    const input3 = input1 - input2;
    const input5 = input3 - input4;
    const input7 = input5 / input6;
    const input10 = input8 - input9;
    const input11 = input10 / input7;
    const input12 = input11 / ((100 + inputF2) / 100);
    const input14 = (input13 / input10) * 100;
    const input16 = (input12 / input15) * 100;
    const inputC = inputA - inputB;
    const inputE = inputB - inputD;
    const inputF1 = (inputC / inputE) * 100;

    // Set calculated values
    document.getElementById('input3').value = input3.toFixed(2);
    document.getElementById('input5').value = input5.toFixed(2);
    document.getElementById('input7').value = input7.toFixed(2);
    document.getElementById('input10').value = input10.toFixed(2);
    document.getElementById('input11').value = input11.toFixed(2);
    document.getElementById('input12').value = input12.toFixed(2);
    document.getElementById('input14').value = input14.toFixed(2);
    document.getElementById('input16').value = input16.toFixed(2);
    document.getElementById('inputC').value = inputC.toFixed(2);
    document.getElementById('inputE').value = inputE.toFixed(2);
    document.getElementById('inputF1').value = inputF1.toFixed(2);
}
