import { projects } from './js/data/data.js';

const elApp = document.querySelector('#app'),
    $listItem = elApp.querySelector(".project_list"),
    $galleryImages = elApp.querySelector(".gallery_images"),
    $projectGallery = elApp.querySelector(".project-gallery"),
    $nav = elApp.querySelector("#nav"),
    $appBkg = elApp.querySelector(".app-bkg"),
    $projectImage = $projectGallery.querySelector(".project_image"),
    $projectFilters = $projectGallery.querySelector(".project-filters"),
    $images = $projectImage.querySelectorAll("img");


const tl = new TimelineLite();

// Function that take project color and themed the app
const colorized = (elements = [], color) => {
    elements.map(el => el.style.setProperty("--colorize", color))
}

// Utiliti Fn
const decimals = (number) => {
    if (number < 10) {
        return number = `0${number}`
    }
    return number
}

// Function to bind data 
const bindingFn = () => {
    return new Promise(resolve => {
        // Create Elements
        const listTemplate = (title, description, number, color = blue) => {
            return `<a href="#" class="list-item" alt=${description} data-color=${color}><div class="text-wrapper"><span>${title}</span><span data-clone>${title}</span></div><span class="item-index">${decimals(number)}</span></a>`
        };
        const imgTemplate = (description, src, id) => {
            return `<img src="./assets/images/${src}" alt="${description}" class="images_item" data-index="${id}">`
        };
        // Binding Elements
        $listItem.innerHTML = projects.map(({ id, projectTitle, projectDescription, color }) => listTemplate(projectTitle, projectDescription, id, color)).join(''); //
        $galleryImages.innerHTML = projects.map(({ id, projectDescription, image }) => imgTemplate(projectDescription, image, id)).join('');
        $listItem.firstElementChild.dataset.active = "";
        $galleryImages.firstElementChild.classList.add('active')


        colorized([elApp], $listItem.firstElementChild.dataset.color);

        return resolve
    })
}


// Initial Animation
const animateIntro = () => {
    const $imageActive = $galleryImages.querySelector("img.active");
    delete elApp.dataset.status;

    tl.from($projectGallery, { duration: 1.5, y: "100%" })
        .fromTo($projectGallery, { clipPath: "inset(100% 0 0 0)" }, { duration: 2.5, ease: "power3.out", clipPath: "inset(0% 0 0 0)" }, "-=1")
        .fromTo($appBkg, { clipPath: "inset(100% 0 0 0)" }, { duration: 1.5, ease: "power3.out", clipPath: "inset(0% 0 0 0)" }, "-=2.5")
        .from($imageActive, { duration: 1, scale: 1.5 }, "-=2.1")
        .from([$nav, $projectFilters], { duration: 1, ease: "power3.out", y: "100", opacity: 0 }, "-=1.6")

}

// Image Load
let imgLoad = imagesLoaded( $images );

// Click on project item
const clickProject = () => {
    console.info("working clickProject")
}

// Init Funciton 
const init = () => {
    animateIntro()
    clickProject();
}

// When images are load start Intro.
bindingFn().then(imgLoad.on('done', init()));
