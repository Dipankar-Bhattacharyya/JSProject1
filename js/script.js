const demo = document.getElementById("demo2");
const demo2 = document.getElementById("demo2");
//alert('Hello World');
//debugger;
//document.getElementById('demo2').innerHTML = '<h1>Hello</h1>';
//console.log('hi');
//console.warn('helo warning');
//console.error('Err message');
//document.getElementById("demo").innerHTML = '5' + 6;
//document.write(5+6);
/*function myPromptFunction(){
    var result = confirm("Press a button!");
    console.log(`result = ${result}`);
}*/
/*var obj = {name:"Aley", height:160};
//var obj = JSON.parse(person);
var name1 = obj.name;
var height1 = obj.height;
console.log(name1 + "'s height is " + height1 + "cm");
document.getElementById("demo").innerHTML = name1 + "'s height is " + height1 + "cm";
var r = 1;
var a = Math.PI*r**2;
demo2.innerHTML = "Area is " + a;
var dice = Math.floor((Math.random()*6) + 1);
var evenodd = dice%2 > 0 ? "odd" : "even";
let numberText;
switch(dice){
    case 1 : numberText = "one";break;
    case 2 : numberText = "two";break;
    case 3 : numberText = "three";break;
    case 4 : numberText = "four";break;
    case 5 : numberText = "five";break;
    case 6 : numberText = "six";break;
    default : numberText = "Error!";
}
demo2.innerHTML = "dice value is " + numberText + "<br>The value is " + evenodd;
var cars = ["BMW","Volvo","Saab","Ford"];
var print= "";
for(i=0;i<cars.length;i++){
    print = print + "Car #" + i + " is " + cars[i] + "<br>";
}
*/
function myPromptFunction(){
var print = "";
for(i=0;i<9;i++){
    if(i==5){
        continue;
    }
    print += `${i}  <br>`;
}
demo.innerHTML = print;
}
/*function circleAres(){
    r = 1;
    print = Math.PI*r**2
    demo2.innerHTML = print;
}
var circleAres = function(r){
    r = 1;
    print = Math.PI*r**2
    demo2.innerHTML = print;
}
function handleSubmit(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var json = {fname:fname, lname:lname};
    var var1 = JSON.stringify(json);
    console.log(var1);
    console.log(json);
}
var person = {faristName:"John", lastName:"Doe",id:5566,fullName:function(){return this.faristName + " " + this.lastName;}};
*/
circleAres =(r,s)=>{demo2.innerHTML = Math.PI*r**2+s;}
//demo2.innerHTML = area;
function mouseOverHandler(){
    document.getElementById('merlion').src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Singapore_Skyline_2019-10.jpg";
}
function mouseOutHandler(){
    document.getElementById('merlion').src="https://i.ibb.co/h709QDx/merlion.jpg";
}

function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("id1").value;
    try { 
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
    }
    catch(err) {
    message.innerHTML = "Input is " + err;
    }
}
class Rect {
    constructor(length,width){
    this.length = length;
    this.width = width;}
    area() { console.log(this.length*this.width);}
    area2() {return (this.length*this.width)}
};
class Sq extends Rect {
    constructor(length) {
    super(length,length)
    } }
class Cube extends Sq{
    constructor(height){
        super(height);
        this.height = height;
    }
    volume(){return (this.length*this.width*this.height)}
}
function myRectArea(){
var l = Number (document.getElementById("id1").value);
var w = Number (document.getElementById("id2").value);
var r1 = new Rect(l,w);
var s1 = new Sq(l);
var c1 = new Cube(l);
r1.area();
document.getElementById("p01").innerHTML = r1.area2();
document.getElementById("p02").innerHTML = s1.area2();
document.getElementById("p03").innerHTML = c1.volume();
}
