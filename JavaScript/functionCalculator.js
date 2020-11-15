/**
 * (5 kyu)
 * Date: 4/8/20
 * Objective: more of a useless but fun problem, make a calculator out a nested functions, for example one(plus(five(plus(two)))) returns 8
 */

function zero(x) {if(x){return Math.floor(eval("0"+x))} else {return "0";}}
function one(x) {if(x){return Math.floor(eval("1"+x))} else {return '1';}}
function two(x) {if(x){return Math.floor(eval("2"+x))} else {return '2';}}
function three(x) {if(x){return Math.floor(eval("3"+x))} else {return '3';}}
function four(x) {if(x){return Math.floor(eval("4"+x))} else {return '4'}}
function five(x) {if(x){return Math.floor(eval("5"+x))} else {return '5';}}
function six(x) {if(x){return Math.floor(eval("6"+x))} else {return '6';}}
function seven(x) {if(x){return Math.floor(eval("7"+x))} else {return '7';}}
function eight(x) {if(x){return Math.floor(eval("8"+x))} else {return '8';}}
function nine(x) {if(x){return Math.floor(eval("9"+x))} else {return '9';}}

function plus(x) {return "+"+x;}
function minus(x) {return "-"+x;}
function times(x) {return "*"+x;}
function dividedBy(x) {return "/"+x;}