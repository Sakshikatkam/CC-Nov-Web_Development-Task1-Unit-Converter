var input = document.getElementById('input');
var output = document.getElementById('output');
var input_type = document.getElementById('input-type');
var output_type = document.getElementById('output-type');
var input_type_value,output_type_value;

input.addEventListener("keyup",myresult);
input_type.addEventListener("change",myresult);
output_type.addEventListener("change",myresult);

input_type_value = input_type.value;
output_type_value = output_type.value;



function myresult(){

    input_type_value = input_type.value;
    output_type_value = output_type.value;

    if(input_type_value == "meter" && output_type_value == "kilometer"){
        output.value = Number(input.value) * 0.001;
    }else if(input_type_value == "meter" && output_type_value == "centimeter"){
        output.value = Number(input.value) * 100;
    }else if(input_type_value == "meter" && output_type_value == "meter"){
        output.value = input.value;
    }else if(input_type_value == "meter" && output_type_value == "micrometer"){
        output.value = Number(input.value) * 1000000;
    }else if(input_type_value == "meter" && output_type_value == "nanometer"){
        output.value = Number(input.value) * 1000000000;
    }else if(input_type_value == "meter" && output_type_value == "foot"){
        output.value = Number(input.value) * 3.28084;
    }else if(input_type_value == "meter" && output_type_value == "inch"){
        output.value = Number(input.value) * 39.3701;
    }

    if(input_type_value == "kilometer" && output_type_value == "meter"){
        output.value = Number(input.value) * 1000;
    }else if(input_type_value == "kilometer" && output_type_value == "centimeter"){
        output.value = Number(input.value) * 10000;
    }else if(input_type_value == "kilometer" && output_type_value == "kilometer"){
        output.value = input.value;
    }else if(input_type_value == "kilometer" && output_type_value == "micrometer"){
        output.value = Number(input.value) * 1000000000;
    }else if(input_type_value == "kilometer" && output_type_value == "nanometer"){
        output.value = Number(input.value) * 1000000000000;
    }else if(input_type_value == "kilometer" && output_type_value == "foot"){
        output.value = Number(input.value) * 3280.84;
    }else if(input_type_value == "kilometer" && output_type_value == "inch"){
        output.value = Number(input.value) * 39370.1;
    }

    if(input_type_value == "centimeter" && output_type_value == "kilometer"){
        output.value = Number(input.value) * 0.00001;
    }else if(input_type_value == "centimeter" && output_type_value == "meter"){
        output.value = Number(input.value) * 0.01;
    }else if(input_type_value == "centimeter" && output_type_value == "centimeter"){
        output.value = input.value;
    }else if(input_type_value == "centimeter" && output_type_value == "micrometer"){
        output.value = Number(input.value) * 10000;
    }else if(input_type_value == "centimeter" && output_type_value == "nanometer"){
        output.value = Number(input.value) * 10000000;
    }else if(input_type_value == "centimeter" && output_type_value == "foot"){
        output.value = Number(input.value) * 0.0328084;
    }else if(input_type_value == "centimeter" && output_type_value == "inch"){
        output.value = Number(input.value) * 0.394;
    }

    if(input_type_value == "micrometer" && output_type_value == "meter"){
        output.value = Number(input.value) * 0.000001;
    }else if(input_type_value == "micrometer" && output_type_value == "centimeter"){
        output.value = Number(input.value) * 0.0001;
    }else if(input_type_value == "micrometer" && output_type_value == "micrometer"){
        output.value = input.value;
    }else if(input_type_value == "micrometer" && output_type_value == "kilometer"){
        output.value = Number(input.value) * 0.000000001;
    }else if(input_type_value == "micrometer" && output_type_value == "nanometer"){
        output.value = Number(input.value) * 1000;
    }else if(input_type_value == "micrometer" && output_type_value == "foot"){
        output.value = Number(input.value) * 0.0000032808;
    }else if(input_type_value == "micrometer" && output_type_value == "inch"){
        output.value = Number(input.value) * 0.0000393701;
    }

    if(input_type_value == "nanometer" && output_type_value == "kilometer"){
        output.value = Number(input.value) * 0.000000000001;
    }else if(input_type_value == "nanometer" && output_type_value == "meter"){
        output.value = Number(input.value) * 0.000000001;
    }else if(input_type_value == "nanometer" && output_type_value == "nanometer"){
        output.value = input.value;
    }else if(input_type_value == "nanometer" && output_type_value == "micrometer"){
        output.value = Number(input.value) * 0.001;
    }else if(input_type_value == "nanometer" && output_type_value == "centimeter"){
        output.value = Number(input.value) * 0.0000001;
    }else if(input_type_value == "nanometer" && output_type_value == "foot"){
        output.value = Number(input.value) * 3.28084e-9;
    }else if(input_type_value == "nanometer" && output_type_value == "inch"){
        output.value = Number(input.value) * 3.937007874E-8;
    }

    if(input_type_value == "foot" && output_type_value == "kilometer"){
        output.value = Number(input.value) * 0.000305;
    }else if(input_type_value == "foot" && output_type_value == "meter"){
        output.value = Number(input.value) * 0.305;
    }else if(input_type_value == "foot" && output_type_value == "foot"){
        output.value = input.value;
    }else if(input_type_value == "foot" && output_type_value == "micrometer"){
        output.value = Number(input.value) * 304800;
    }else if(input_type_value == "foot" && output_type_value == "nanometer"){
        output.value = Number(input.value) * 304800000;
    }else if(input_type_value == "foot" && output_type_value == "centimeter"){
        output.value = Number(input.value) * 30.48;
    }else if(input_type_value == "foot" && output_type_value == "inch"){
        output.value = Number(input.value) * 12;
    }

    if(input_type_value == "inch" && output_type_value == "kilometer"){
        output.value = Number(input.value) * 2.54e-5;
    }else if(input_type_value == "inch" && output_type_value == "meter"){
        output.value = Number(input.value) * 0.0254;
    }else if(input_type_value == "inch" && output_type_value == "inch"){
        output.value = input.value;
    }else if(input_type_value == "inch" && output_type_value == "micrometer"){
        output.value = Number(input.value) * 25400;
    }else if(input_type_value == "inch" && output_type_value == "nanometer"){
        output.value = Number(input.value) * 25400000;
    }else if(input_type_value == "inch" && output_type_value == "foot"){
        output.value = Number(input.value) * 0.0833;
    }else if(input_type_value == "inch" && output_type_value == "centimeter"){
        output.value = Number(input.value) * 2.54;
    }

    if(input_type_value == "celsius" && output_type_value == "kelvin"){
        output.value = Number(input.value) + 273.15;
        
    }else if(input_type_value == "celsius" && output_type_value == "fahrenheit"){
        output.value = Number(input.value * 9/5) + 32;
    }else if(input_type_value == "celsius" && output_type_value == "celsius"){
        output.value = input.value;
    }

    if(input_type_value == "fahrenheit" && output_type_value == "celsius"){
        output.value = Number(input.value-32) * 5/9;
       
    }else if(input_type_value == "fahrenheit" && output_type_value == "kelvin"){
        output.value = Number(input.value-32) * 5/9 + 273.15;
    }else if(input_type_value == "fahrenheit" && output_type_value == "fahrenheit"){
        output.value = input.value;
    }

    if(input_type_value == "kelvin" && output_type_value == "celsius"){
        output.value = Number(input.value) - 273.15;
       
    }else if(input_type_value == "kelvin" && output_type_value == "fahrenheit"){
        output.value = Number(input.value-273.15) * 9/5 + 32;
    }else if(input_type_value == "kelvin" && output_type_value == "kelvin"){
        output.value = input.value;
    }

    if(input_type_value == "squaremeter" && output_type_value == "squarekilometer"){
        output.value = Number(input.value) / 1e+6;
       
    }else if(input_type_value == "squaremeter" && output_type_value == "squarecentimeter"){
        output.value = Number(input.value) * 10000;
    }else if(input_type_value == "squaremeter" && output_type_value == "squaremeter"){
        output.value = input.value;
    }

    if(input_type_value == "squarecentimeter" && output_type_value == "squarekilometer"){
        output.value = Number(input.value) / 1e+10;
       
    }else if(input_type_value == "squarecentimeter" && output_type_value == "squaremeter"){
        output.value = Number(input.value) * 0.0001;
    }else if(input_type_value == "squarecentimeter" && output_type_value == "squarecentimeter"){
        output.value = input.value;
    }

    if(input_type_value == "squarekilometer" && output_type_value == "squaremeter"){
        output.value = Number(input.value) * 1e+6;
       
    }else if(input_type_value == "squarekilometer" && output_type_value == "squarecentimeter"){
        output.value = Number(input.value) * 1e+10;
    }else if(input_type_value == "squarekilometer" && output_type_value == "squarekilometer"){
        output.value = input.value;
    }



    
}

