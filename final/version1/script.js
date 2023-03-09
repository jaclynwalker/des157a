(function(){
    'use strict'
    console.log('reading js')

    // create a variable for each overlay
    const backyard = document.querySelector('#backyard');
    const beach = document.querySelector('#beach');
    const beanbag = document.querySelector('#beanbag');
    const kitchen = document.querySelector('#kitchen');
    const walk = document.querySelector('#walk');
    // add each overlay into an array
    const overlays = [backyard, beach, beanbag, kitchen, walk];

    // overlay pops up when each cropped image is clicked
    document.querySelector('#backyardcrop').addEventListener('click', function(event){
        event.preventDefault();
        backyard.className = 'showing';
    });
    document.querySelector('#beachcrop').addEventListener('click', function(event){
        event.preventDefault();
        beach.className = 'showing';
        //create slideshow
        const myImages = ['bella-beach-FULL.jpg', 'bella-beach-FULL2.jpg', 'bella-beach-FULL3.jpg'];
        let currentImage = 0;
        const slide = document.getElementById('beach-slideshow');

        document.getElementById('next').addEventListener('click', nextPhoto);
        function nextPhoto(){
            console.log('clicked next');
            currentImage++;
            if (currentImage > myImages.length-1){
                currentImage = 0;
            }
            slide.src = `images/${myImages[currentImage]}`;
        }
        document.getElementById('previous').addEventListener('click', previousPhoto);
        function previousPhoto(){
            currentImage--;

            if (currentImage < 0){
                currentImage = myImages.length-1;
            }
            slide.src = `images/${myImages[currentImage]}`;
        }
        
    });
    document.querySelector('#beanbagcrop').addEventListener('click', function(event){
        event.preventDefault();
        beanbag.className = 'showing';
    });
    document.querySelector('#kitchencrop').addEventListener('click', function(event){
        event.preventDefault();
        kitchen.className = 'showing';
    });
    document.querySelector('#walkcrop').addEventListener('click', function(event){
        event.preventDefault();
        walk.className = 'showing';
    });

    // create a variable for all close buttons
    const bttns = document.querySelectorAll('button');
    // for each of the multiple close buttons
    for (const eachButton of bttns){
        eachButton.addEventListener('click', function(event){ //when a button is clicked
            event.preventDefault();
            for (const eachOverlay of overlays){ //check every overlay
                if (eachOverlay.classList.contains('showing')){ //if the overlay has the classname showing
                    eachOverlay.className = 'hidden'; //change to hidden
                }
            }
        })
    }
}())
