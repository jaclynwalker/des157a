(function(){
    'use strict';
    console.log('reading js');

    // display mad libs results
    document.querySelector('#submit').addEventListener('click', function(event){
        // event.preventDefault();
        document.querySelector('#output').className = 'showing';
        document.querySelector('#input').className = 'hidden';
    })
}())