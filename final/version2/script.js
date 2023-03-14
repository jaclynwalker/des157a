(function(){
    'use strict'
    console.log('reading js')

    alert('Welcome! \n 1) View all 5 overlays. \n 2) Find 3 photo locations. \n 3) View 2 slideshows.');

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
        const backyardtag = document.querySelector('#backyardtag');
        const backyardtagtext = document.querySelector('#backyardtagtext');
        //when purple tag is hovered over
        backyardtag.addEventListener('mouseover', function(event){
            backyardtagtext.className = "showing";
        })
        backyardtag.addEventListener('mouseout', function(event){
            backyardtagtext.className = "hidden";
        })
    });
    document.querySelector('#beachcrop').addEventListener('click', function(event){
        event.preventDefault();
        beach.className = 'showing';
        //create slideshow
        const myImages = ['bella-beach-FULL.jpg', 'bella-beach-FULL2.jpg', 'bella-beach-FULL3.jpg'];
        let currentImage = 0; //starting image index 0
        const slide = document.getElementById('beach-slideshow'); 
        //when next button is clicked
        document.querySelector('#beachnext').addEventListener('click', nextPhoto);
        function nextPhoto(){
            currentImage++; //add one to current image index
            if (currentImage > myImages.length-1){
                currentImage = 0;
            }
            slide.src = `images/${myImages[currentImage]}`;
        }
        // when previous button is clicked
        document.querySelector('#beachprevious').addEventListener('click', previousPhoto);
        function previousPhoto(){
            currentImage--; //remove one from current image index
            if (currentImage < 0){
                currentImage = myImages.length-1;
            }
            slide.src = `images/${myImages[currentImage]}`;
        }
        
    });
    document.querySelector('#beanbagcrop').addEventListener('click', function(event){
        event.preventDefault();
        beanbag.className = 'showing';
        const beanbagtag = document.querySelector('#beanbagtag');
        const beanbagtagtext = document.querySelector('#beanbagtagtext');
        //when purple tag is hovered over
        beanbagtag.addEventListener('mouseover', function(event){
            beanbagtagtext.className = "showing";
        })
        beanbagtag.addEventListener('mouseout', function(event){
            beanbagtagtext.className = "hidden";
        })
    });
    document.querySelector('#kitchencrop').addEventListener('click', function(event){
        event.preventDefault();
        kitchen.className = 'showing';
        //create slideshow
        const myKitchenImages = ['bella-kitchen-FULL.jpeg', 'bella-kitchen-FULL2.jpeg', 'bella-kitchen-FULL3.jpeg'];
        let currentImage = 0; //starting image index 0
        const slide = document.getElementById('kitchen-slideshow'); 
        //when next button is clicked
        document.querySelector('#kitchennext').addEventListener('click', nextPhoto);
        function nextPhoto(){
            currentImage++; //add one to current image index
            if (currentImage > myKitchenImages.length-1){
                currentImage = 0;
            }
            slide.src = `images/${myKitchenImages[currentImage]}`;
        }
        // when previous button is clicked
        document.querySelector('#kitchenprevious').addEventListener('click', previousPhoto);
        function previousPhoto(){
            currentImage--; //remove one from current image index
            if (currentImage < 0){
                currentImage = myKitchenImages.length-1;
            }
            slide.src = `images/${myKitchenImages[currentImage]}`;
        }
    });
    document.querySelector('#walkcrop').addEventListener('click', function(event){
        event.preventDefault();
        walk.className = 'showing';
        const walktag = document.querySelector('#walktag');
        const walktagtext = document.querySelector('#walktagtext');
        //when purple tag is hovered over
        walktag.addEventListener('mouseover', function(event){
            walktagtext.className = "showing";
        })
        walktag.addEventListener('mouseout', function(event){
            walktagtext.className = "hidden";
        })
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
