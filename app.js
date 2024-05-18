const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList  = isOpen 
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'
}

const sLink = document.querySelector(".s_link")

sLink.addEventListener ("click", () => {
  if (sLink.style.display === "none" || sLink.style.display === "") {
    sLink.style.display = "block";
} else {
  //sLink.style.display = "none";
}
})


const root = document.documentElement;

const setDropdownProps = (button, list, deg, ht, opacity) => {
    //button.querySelector('.dropdown-arrow').style.transform = `rotate(${deg}deg)`;
    button.querySelector('.angle').style.transform = `rotate(${deg}deg)`;
    list.style.maxHeight = ht;
    list.querySelectorAll('.dropdown-list-item').forEach(item => {
        item.style.opacity = opacity;
    });
};

document.querySelectorAll('.dropdown-button').forEach(button => {
    const list = button.nextElementSibling;
    
    const listWrapperSizes = 3.5; // margins, paddings & borders (3.5rem)

    button.addEventListener('mouseenter', () => {
        const dropdownOpenHeight = `${100 * list.children[0].children.length + listWrapperSizes}rem`;
        setDropdownProps(button, list, 180, dropdownOpenHeight, 1);
    });

    button.addEventListener('mouseleave', () => {
        setDropdownProps(button, list, 0, '0', 0);
    });

    list.addEventListener('mouseenter', () => {
        const dropdownOpenHeight = `${100 * list.children[0].children.length + listWrapperSizes}rem`;
        setDropdownProps(button, list, 180, dropdownOpenHeight, 1);
    });

    list.addEventListener('mouseleave', () => {
        setDropdownProps(button, list, 0, '0', 0);
    });
});
//sroll behavior start



//sroll behavour end

/*const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  backToTopBtn.style.display = "block";
} else {
  backToTopBtn.style.display = "none";
}
});

backToTopBtn.addEventListener("click", () => {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}); */


//const angleOne = document.getElementById("angle-one")
//var dropdownMenu = document.getElementById('dropdownMenu');

  // Add click event listener to the image
 // angleOne.onclick = function() {
    // Toggle the display property
   // if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
     //   dropdownMenu.style.display = "block";
    //} else {
     //   dropdownMenu.style.display = "none";
   // }
//};

// Get all elements with the class name 'angle'
var angleImages = document.querySelectorAll('.angle');

// Add click event listeners to each image
angleImages.forEach(function(image) {
    image.addEventListener('click', function() {
        // Get the corresponding dropdown menu for this image
        var dropdownMenu = this.parentElement.querySelector('.dropdown');

        // Toggle the display property of the dropdown menu
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
            dropdownMenu.style.display = "block";
            // Add rotation class
            image.classList.add('rotate180');
        } else {
            dropdownMenu.style.display = "none";
            // Remove rotation class
            image.classList.remove('rotate180');
        }
    });
});

/*var angleImages = document.querySelectorAll('.angle');
const angleElem = document.getElementById("expand_less")
 // Get the dropdown menu
 var dropdownMenu = document.getElementById('dropdownMenu');

  // Add click event listener to the expand less image
  angleElem.addEventListener('click', function() {
    // Hide the dropdown menu
    dropdownMenu.style.display = "none";

    // Show the expand more image
    //angleImages.style.display = "block";
});*/

