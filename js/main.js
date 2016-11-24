var number_array = ['', '']; var number_index = 0; //var jordan
var temp_num = '';
var operator = '';
var decimalAdded = false;
var first_number = true;
var number_string = '';
var answer = 0;
var display = null;

$(document).ready(function(){
    display = $("#inputdisplay");
});

function input_digit(typed_number) {
    number_array[number_index] = number_array[number_index] + typed_number;
    display.val(number_array[number_index]);
    number_string += typed_number;
    display.val(number_string);
    console.log("number_array : ", number_array);
}

function calculate_multiple(){
    number_string += " " + operator + " ";
    display.val(number_string);
    if(first_number){
        first_number = false;
    }else{
        calculate();
        number_array[0] = answer;
        number_array[1] = '';
    }
}

//operators
function add_numbers() {
    number_index = 1;
    operator = '+';
    decimalAdded= false;
    console.log("add pressed");
    calculate_multiple();
}

function subtract_numbers() {
	number_index = 1;
	operator = '-';
    decimalAdded= false;
    console.log("subtract pressed");
    calculate_multiple();
}

function multiply_numbers() {
	number_index = 1;
	operator = '*';
    decimalAdded= false;
    console.log("multiply pressed");
    calculate_multiple();
}

function divide_numbers() {
	number_index = 1;
	operator = '/';
    decimalAdded = false;
    console.log("divison pressed");
    calculate_multiple();
}

function pow_operator() {
    number_index = 1;
    operator = '^';
    console.log("pow pressed");
    calculate_multiple();
}

function allclear_pressed() {
    number_array = ['', ''];
    number_index = 0; //var jordan
    temp_num = '';
    operator = '';
    answer = 0;
    number_string = '';
    first_number = true;
    decimalAdded = false;
    $('#inputdisplay').val('');
    console.log("AC pressed");
}

function clear_pressed() {
    number_array[1] = 0;
    decimalAdded = false;
    $('#inputdisplay').val(number_array[0]);
    console.log("clear pressed");
}

function dot() {
    if (!decimalAdded)
    {
        number_string = number_array[number_index] + '.';
        number_array[number_index] += '.';
        decimalAdded = true;
        display.val(number_string);
        console.log("decimal pressed");
}
}

function get_total(){
    calculate();
    number_string += " = " + answer;
    display.val(number_string);

}

//taking the number and operator
function calculate() {

    var result = null;
    switch(operator) {
        case '+':
            result = parseFloat(number_array[0]) + parseFloat(number_array[1]);
            break;
     	case '-':
            result = parseFloat(number_array[0]) - parseFloat(number_array[1]);
            break;
        case '*':
            result = parseFloat(number_array[0]) * parseFloat(number_array[1]);
            break;
        case '/':
            result = parseFloat(number_array[0]) / parseFloat(number_array[1]);  
            break;
        case '^':
            result = parseFloat(Math.pow(number_array[0], number_array[1]));
            break; 
        default:
        //alert("error");   
    }
    answer = result;
}
