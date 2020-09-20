import { projects } from './data.js';
import { colorized } from '../animations.js';
import { elApp } from '../app.js';
// const {id , projectTitle, projectDescription, image} = projects;
/*
export const bindingFn = async () => {
    const listItem = document.querySelector(".project_list");
    const galleryImages = document.querySelector(".gallery_images");

    // Utiliti Fn
    const decimals = (number) => {
        if (number < 10) {
            return number = `0${number}`
        }
        return number
    }


    // Create Elements
    const listTemplate = (title, description, number, color = blue) => {
        return `<a href="#" class="list-item" alt=${description} data-color=${color}><div class="text-wrapper"><span>${title}</span><span data-clone>${title}</span></div><span class="item-index">${decimals(number)}</span></a>`
    };

    const imgTemplate = (description, src, id) => {
        return `<img src="./images/${src}" alt="${description}" class="images_item" data-index="${id}">`
    };

    // Binding Elements

    listItem.innerHTML = projects.map(({id , projectTitle, projectDescription, color}) => listTemplate(projectTitle, projectDescription, id, color)).join(''); //
    galleryImages.innerHTML = projects.map(({ id, projectDescription, image }) => imgTemplate(projectDescription, image, id)).join('');
    listItem.firstElementChild.dataset.active = "";

    return Promise.resolve;
    
}*/
export const bindingFn = () => {
    const listItem = document.querySelector(".project_list");
    const galleryImages = document.querySelector(".gallery_images");

    // Utiliti Fn
    const decimals = (number) => {
        if (number < 10) {
            return number = `0${number}`
        }
        return number
    }


    // Create Elements
    const listTemplate = (title, description, number, color = blue) => {
        return `<a href="#" class="list-item" alt=${description} data-color=${color}><div class="text-wrapper"><span>${title}</span><span data-clone>${title}</span></div><span class="item-index">${decimals(number)}</span></a>`
    };

    const imgTemplate = (description, src, id) => {
        return `<img src="./images/${src}" alt="${description}" class="images_item" data-index="${id}">`
    };

    // Binding Elements

    listItem.innerHTML = projects.map(({id , projectTitle, projectDescription, color}) => listTemplate(projectTitle, projectDescription, id, color)).join(''); //
    galleryImages.innerHTML = projects.map(({ id, projectDescription, image }) => imgTemplate(projectDescription, image, id)).join('');
    listItem.firstElementChild.dataset.active = "";


    colorized([elApp], listItem.firstElementChild.dataset.color);
}