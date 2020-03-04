
var submit = document.querySelector('.Submit');
var guessField = document.querySelector('.guessField');
// var image = 
var userAnswer = '';
var orientation = 'horizontal';
var arrPics = [];
guessField.focus();//focus mouse on field


function getResults(userAnswer,orientation){ //makes an array of pics
    if(userAnswer === '')
    {
        var randomNumber = Math.floor(Math.random() * 4);
        var arrayWords = ["red roses", "cars", "houses", "sports"];
        userAnswer = arrayWords[randomNumber];
    }
    console.log(userAnswer);

    var API_KEY = '15460194-7fca6d7f40e9138a4cbc95b1d';
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(userAnswer)+"&"+"orientation="+orientation;
    $.getJSON(URL, function(data){
        console.log(data);
    if (parseInt(data.totalHits) > 0){
        var number = 0;
        $.each(data.hits, function(i, hit){ 
            number++
            $("#img"+ i+"").attr("src" , hit.previewURL); 
            if(number === 4)
            {
                return false;
            }    
        });
    }
    else
        console.log('No hits');
    });

    

}


function submitChoice(){
    userAnswer = '' + guessField.value + '';
    orientation = $("#dropDown").val();
    if(orientation === "horizontal")
    {
        getResults(userAnswer,orientation);
        
    }
    else
    {
        getResults(userAnswer,orientation);
    }
}



getResults(userAnswer,orientation); //runs when user has not entered any input

submit.addEventListener('click', submitChoice);