var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function(){
    let f = this.value;
    let i = (f*9/5)+32;
    inch.value = i;
});

inch.addEventListener('input', function(){
    let i = this.value;
    let f = (i-32)*5/9;
    feet.value = f;
});