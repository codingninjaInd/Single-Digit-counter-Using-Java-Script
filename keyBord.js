 var keyone = document.getElementById('keyone');



 keyone.addEventListener('keypress',function(event)
 {

    //we will take keyone value;
    //that will teurn value of pressed key;

   
});


var buttion = document.getElementsByTagName("button")[0];

//this statement is stat the counter

buttion.addEventListener('click',startCounter);



var interval;
var current = document.querySelector('.current');

var next = document.querySelector('.next');

function startCounter()
{
    initialStage();
   
   
     interval = setInterval(animate,1000);
}


function initialStage()
{
    current.innerHTML = 0;

    next.innerHTML = 1;
}





function animate()
{
    if(parseInt(next.innerText) > parseInt(keyone.value))
    {
        alert('counter is stopped');
        
        clearInterval(interval);

        return;
    }
   next.classList.add('animate');

   setTimeout(function(){

    current.innerHTML = next.innerHTML;

    next.innerHTML = parseInt(next.innerHTML)+1;

    next.classList.remove('animate');
   },500);
}






