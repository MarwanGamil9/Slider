// Get Slider Items
var sliderImage = Array.from(document.querySelectorAll('.silder-container img'));

// Get Number of Slides
var slidesCount = sliderImage.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Next and Previous Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Next and Previous Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = pervSlide;

// Create The Main UL Element
var paginationElements = document.createElement('ul');

// Set ID on Created UL Element
paginationElements.setAttribute('id' , 'pagination-ul');

// Create list Items Based on List Count
for (var i = 1 ; i <= slidesCount ; i++ ){

    // Creat LI
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index' , i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to The Main list
    paginationElements.appendChild(paginationItem); 
}

// Add The Created UL Element to The Page
document.getElementById('indecators').appendChild(paginationElements);


// Get The New Created UL
var paginationCreatedUL = document.getElementById('pagination-ul');

// Get Pagination Items
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for(var i = 0 ; i < paginationsBullets.length ; i++){
  
    paginationsBullets[i].onclick = function(){

        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

// Trigger The Checker Fumction
theChecker();

// Next Slide Function
function nextSlide(){
    
    if(nextButton.classList.contains('disabled')){

        // Do Nothing
        return false;

    }else{

        currentSlide++;
        theChecker();
    }
}

// Previous Slide Function
function pervSlide(){
    
    if(prevButton.classList.contains('disabled')){

        // Do Noting
        return false;

    }else{

        currentSlide--;
        theChecker();
    }
}

// Create Checker Function
function theChecker (){

    // Set The Slide Number
    slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class on Current Slide
    sliderImage[currentSlide - 1].classList.add('active');

    // Set Current Class on Current Pagination Item
    paginationCreatedUL.children[currentSlide - 1].classList.add('active');

    // Check if The Current Slide is First
    if(currentSlide == 1){

        // Add Disabled Class to Previous button
        prevButton.classList.add('disabled');

    }else{

        // Remove Disabled Class From Previous button
        prevButton.classList.remove('disabled');
    }

     // Check if The Current Slide is Last
     if(currentSlide == slidesCount){

        // Add Disabled Class to Next button
        nextButton.classList.add('disabled');

    }else{

        // Remove Disabled Class From Next button
        nextButton.classList.remove('disabled');
    }
}

// Remove all Active clas from Images and Pagination Bullets
function removeAllActive (){

    // Loop Through The Images
    sliderImage.forEach( function (img) {
  
        img.classList.remove('active');
    });

    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (bullet){

        bullet.classList.remove('active');
    });
} 
