
function check(){
    var first_pass = document.getElementById('one').value;
console.log(first_pass)

    var second_pass = document.getElementById('two').value;
console.log(second_pass)
    if(first_pass === second_pass){
      location.href="https://www.youtube.com/watch?v=iYyf1e3axN4";
    }
    else{
	alert("Różne Hasła");
    };
}