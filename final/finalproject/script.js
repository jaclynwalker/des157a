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
    document.querySelector('#beachcrop').addEventListener('click', function(event){
        event.preventDefault();
        beach.className = 'showing';
        //create slideshow
        const myImages = ['bella-beach-FULL.jpg', 'bella-beach-FULL2.jpg', 'bella-beach-FULL3.jpg'];
        let currentImage = 0; //starting image index 0
        const slide = document.getElementById('beach-slideshow'); 
        //slider dots
        const beachdot1 = document.querySelector('#beachdot1');
        const beachdot2 = document.querySelector('#beachdot2');
        const beachdot3 = document.querySelector('#beachdot3');
        //when next button is clicked
        document.querySelector('#beachnext').addEventListener('click', nextPhoto);
        function nextPhoto(){
            currentImage++; //add one to current image index
            changeBeachDotColor(currentImage, beachdot1, beachdot2, beachdot3);
            if (currentImage > myImages.length-1){
                currentImage = 0;
                beachdot1.style.backgroundColor='#5c3974';
                beachdot2.style.backgroundColor='#F2E1FF';
                beachdot3.style.backgroundColor = '#F2E1FF';
            }
            else if (currentImage == 0){
                beachdot1.style.backgroundColor='#5c3974';
                beachdot2.style.backgroundColor='#F2E1FF';
                beachdot3.style.backgroundColor = '#F2E1FF';
            }
            slide.src = `images/${myImages[currentImage]}`;
        }
        //function to change slider dot colors
        function changeBeachDotColor (currentImage, beachdot1, beachdot2, beachdot3){
            if (currentImage > 0){
                if (currentImage==1){ //if the slide is the first index
                    beachdot1.style.backgroundColor='#F2E1FF';
                    beachdot2.style.backgroundColor='#5c3974';
                    beachdot3.style.backgroundColor = '#F2E1FF';
                }
                else if (currentImage==2){ //the the slide is the 2 index
                    beachdot1.style.backgroundColor='#F2E1FF';
                    beachdot2.style.backgroundColor='#F2E1FF';
                    beachdot3.style.backgroundColor='#5c3974';
                }
            }
        }
        // when previous button is clicked
        document.querySelector('#beachprevious').addEventListener('click', previousPhoto);
        function previousPhoto(){
            currentImage--; //remove one from current image index
            changeBeachDotColor(currentImage, beachdot1, beachdot2, beachdot3);
            if (currentImage < 0){
                currentImage = myImages.length-1;
                beachdot1.style.backgroundColor='#F2E1FF';
                beachdot2.style.backgroundColor='#F2E1FF';
                beachdot3.style.backgroundColor='#5c3974';
            }
            if (currentImage == 0){
                beachdot1.style.backgroundColor='#5c3974';
                beachdot2.style.backgroundColor='#F2E1FF';
                beachdot3.style.backgroundColor = '#F2E1FF';
            }
            slide.src = `images/${myImages[currentImage]}`;
        }
    });
    document.querySelector('#kitchencrop').addEventListener('click', function(event){
        event.preventDefault();
        kitchen.className = 'showing';
        //create slideshow
        const myKitchenImages = ['bella-kitchen-FULL.jpeg', 'bella-kitchen-FULL2.jpeg', 'bella-kitchen-FULL3.jpeg'];
        let currentImage = 0; //starting image index 0
        const slide = document.getElementById('kitchen-slideshow'); 
        //slider dots
        const beachdot1 = document.querySelector('#kitchendot1');
        const beachdot2 = document.querySelector('#kitchendot2');
        const beachdot3 = document.querySelector('#kitchendot3');
        //when next button is clicked
        document.querySelector('#kitchennext').addEventListener('click', nextPhoto);
        function nextPhoto(){
            currentImage++; //add one to current image index
            changeKitchenDotColor(currentImage, beachdot1, beachdot2, beachdot3);
            if (currentImage > myKitchenImages.length-1){
                currentImage = 0;
                kitchendot1.style.backgroundColor='#5c3974';
                kitchendot2.style.backgroundColor='#F2E1FF';
                kitchendot3.style.backgroundColor = '#F2E1FF';
            }
            else if (currentImage == 0){
                beachdot1.style.backgroundColor='#5c3974';
                beachdot2.style.backgroundColor='#F2E1FF';
                beachdot3.style.backgroundColor = '#F2E1FF';
            }
            slide.src = `images/${myKitchenImages[currentImage]}`;
        }
        //function to change slider dot colors
        function changeKitchenDotColor (currentImage, beachdot1, beachdot2, beachdot3){
            if (currentImage > 0){
                if (currentImage==1){ //if the slide is the first index
                    kitchendot1.style.backgroundColor='#F2E1FF';
                    kitchendot2.style.backgroundColor='#5c3974';
                    kitchendot3.style.backgroundColor = '#F2E1FF';
                }
                else if (currentImage==2){ //the the slide is the 2 index
                    kitchendot1.style.backgroundColor='#F2E1FF';
                    kitchendot2.style.backgroundColor='#F2E1FF';
                    kitchendot3.style.backgroundColor='#5c3974';
                }
            }
        }
        // when previous button is clicked
        document.querySelector('#kitchenprevious').addEventListener('click', previousPhoto);
        function previousPhoto(){
            currentImage--; //remove one from current image index
            changeKitchenDotColor(currentImage, kitchendot1, kitchendot2, kitchendot3);
            if (currentImage < 0){
                currentImage = myKitchenImages.length-1;
                kitchendot1.style.backgroundColor='#F2E1FF';
                kitchendot2.style.backgroundColor='#F2E1FF';
                kitchendot3.style.backgroundColor='#5c3974';
            }
            if (currentImage == 0){
                kitchendot1.style.backgroundColor='#5c3974';
                kitchendot2.style.backgroundColor='#F2E1FF';
                kitchendot3.style.backgroundColor = '#F2E1FF';
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
