(function(){
    'use strict';
    console.log('reading js');

    const warning = document.querySelector('#warning');

    // display mad libs results
    document.querySelector('#submit').addEventListener('click', function(event){
        event.preventDefault();

        const adj1 = document.querySelector('#adj1').value;
        const n1 = document.querySelector('#n1').value;
        const v1 = document.querySelector('#v1').value;
        const v2 = document.querySelector('#v2').value;
        const a1 = document.querySelector('#a1').value;
        const adj2 = document.querySelector('#adj2').value;

        if (adj1 === ''){
            warning.innerHTML = "Please enter an adjective!";
            document.querySelector('#adj1').focus();
        }
        else if (n1 === ''){
            warning.innerHTML = "Please enter a noun!";
            document.querySelector('#n1').focus();
        }
        else if (v1 === ''){
            warning.innerHTML = "Please enter a verb!";
            document.querySelector('#v1').focus();
        }
        else if (v2 === ''){
            warning.innerHTML = "Please enter another verb!";
            document.querySelector('#v2').focus();
        }
        else if (a1 === ''){
            warning.innerHTML = "Please enter an animal!";
            document.querySelector('#a1').focus();
        }
        else if (adj2 === ''){
            warning.innerHTML = "Please enter another adjective!";
            document.querySelector('#adj2').focus();
        }
        else {
        document.querySelector('#output').className = 'showing';
        document.querySelector('#input').className = 'hidden';
    
        const input1 = document.querySelector('#input1');
        input1.innerHTML = adj1.toUpperCase();

        const input2 = document.querySelector('#input2');
        input2.innerHTML = n1.toUpperCase();

        const input3 = document.querySelector('#input3');
        input3.innerHTML = v1.toUpperCase();

        const input4 = document.querySelector('#input4');
        input4.innerHTML = v2.toUpperCase();

        const input5 = document.querySelector('#input5');
        input5.innerHTML = a1.toUpperCase();

        const input6 = document.querySelector('#input6');
        input6.innerHTML = adj2.toUpperCase();
        warning.innerHTML = "";
        }
    })
    
    document.querySelector('#playAgain').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#input').className = 'showing';
        document.querySelector('#output').className = 'hidden'; 

        const form = document.querySelector('form');
        form.reset();

    })
}())