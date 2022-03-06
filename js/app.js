/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section")

const NavBarList= document.querySelector('#navbar__list');

const docFrag=document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// First Step is to  build the navigation Bar
sections.forEach((bar) => {
    list = document.createElement("li");
    list.innerHTML = `<li>
    <a href= "#${bar.id}" data-nav="${bar.dataset.nav}" class="menu__link">${bar.dataset.nav}</a>
    </li>`

    // smooth scrolling 
    list.addEventListener ("click", (e)=>{
        e.preventDefault();
        bar.scrollIntoView({behavior: "smooth"});
    })
    docFrag.appendChild(list);
})
    NavBarList.appendChild(docFrag);

// Active link while scrolling 

        window.addEventListener("scroll"  , () => {
            for (section of sections) {
                console.log(section)
            if(section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 350) {
            
        
            section.classList.add("your-active-class");

                const Links = document.querySelectorAll("a");

                let  activeSection = section.getAttribute("data-nav");

                for (link of Links){

                    if (link.dataset.nav == activeSection){

                        link.classList.add("active-link");

                    }else{

                        link.classList.remove("active-link");
                    }
                
            }
        } else {

                section.classList.remove("your-active-class");
            }
            
        }
    }
        );
        
