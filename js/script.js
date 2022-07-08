var form = document.getElementById('form');
var form__subtitle = document.getElementById('form__subtitle');
var formBar = document.getElementById('form__bar');
function myAlgh(){
    var checkRadio = document.querySelector('input[name="radio1"]:checked');
    var checkRadio2 = document.querySelector('input[name="radio2"]:checked');
    var e = document.getElementById("select").value;
    if(e == "Новостройка"){
        form.classList.remove('active');
        var time = directionField.value;
        if(checkRadio.value == "Евроремонт"){
            time = time*1.2;
        }else if(checkRadio.value == "Дизайнерский"){
            time = time*1.5;
        }else{
            time = time*0.6;
        }
        form__subtitle.innerHTML = Math.round(time);
        bar = time;
        bar = bar/327 * 100;
        formBar.style.width = bar + "%";
    }else{
        form.classList.add('active');
        var time = directionField.value;
        if(checkRadio2.value == "Косметический"){
            time = time*0.3;
        }else if(checkRadio2.value == "Капитальный"){
            time = time*1;
        }else{
            time = time*1.2;
        }
        form__subtitle.innerHTML = Math.round(time);
        bar = time;
        bar = bar/327 * 100;
        formBar.style.width = bar + "%";
    }
}
const slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [60],
    connect: [true,false],
    padding: [0,0],
    step: 1,
    range: {
        'min': [30],
        'max': [330]
    },
});
var directionField = document.getElementById('range-value');
slider.noUiSlider.on('update', function (values, handle) {
    directionField.value = parseFloat(values[handle]);
    myAlgh();
});
directionField.addEventListener('change', function () {
    slider.noUiSlider.set([directionField.value]);
});
form.addEventListener('change', function () {
    myAlgh();
});

var help = document.getElementsByClassName("help");
for (var i = 0; i <= 6; i++) {
    help[i].addEventListener('mouseenter', function () {
        this.classList.add('active');
    });  
    help[i].addEventListener('mouseleave', function () {
        this.classList.remove('active');
    });       
}
