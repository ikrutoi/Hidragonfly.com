import { navigationHeaderMenu } from "./navigation.js";
import { newElemHTML } from "./new-element.js";
// import { navigationHeaderMenu } from "./navigation.js";

export function createHeaderNav() {
    const headerNav = document.querySelector('.header-nav');

    newElemHTML(headerNav, 'beforeend', '<ul class="header-nav-menu"></ul>'); 
    
    const headerNavMenu = document.querySelector('.header-nav-menu');
                
    newElemHTML(
        headerNavMenu, 
        'beforeend', 
        '<li class="header-nav--button header-nav--button-cardphoto" data-menu-nav="cardphoto"></li>'
    ); 

    const headerNavButtonCardphoto = document.querySelector('.header-nav--button-cardphoto');

    newElemHTML(headerNavButtonCardphoto, 'beforeend', '<span class="nav--button-logo header-nav--cardphoto--button-logo">.</span>');
    newElemHTML(headerNavButtonCardphoto, 'beforeend', '<span class="nav--button-text header-nav--cardphoto--button-text">Cardphoto</span>');

    newElemHTML(
        headerNavMenu, 
        'beforeend', 
        '<li class="header-nav--button header-nav--button-cardtext button-cardtext" data-menu-nav="cardtext"></li>'
    ); 

    const headerNavButtonCardtext = document.querySelector('.header-nav--button-cardtext');

    newElemHTML(headerNavButtonCardtext, 'beforeend', '<span class="nav--button-logo header-nav--cardtext--button-logo">.</span>');
    newElemHTML(headerNavButtonCardtext, 'beforeend', '<span class="nav--button-text header-nav--cardtext--button-text">Cardtext</span>');

    newElemHTML(
        headerNavMenu, 
        'beforeend', 
        '<li class="header-nav--button header-nav--button-envelope" data-menu-nav="envelope"></li>'
    ); 

    const headerNavButtonEnvelope = document.querySelector('.header-nav--button-envelope');

    newElemHTML(headerNavButtonEnvelope, 'beforeend', '<span class="nav--button-logo header-nav--envelope--button-logo">.</span>');
    newElemHTML(headerNavButtonEnvelope, 'beforeend', '<span class="nav--button-text header-nav--envelope--button-text">Envelope</span>');

    newElemHTML(
        headerNavMenu, 
        'beforeend', 
        '<li class="header-nav--button header-nav--button-aroma button-aroma" data-menu-nav="aroma"></li>'
    ); 

    const headerNavButtonAroma = document.querySelector('.header-nav--button-aroma');

    newElemHTML(headerNavButtonAroma, 'beforeend', '<span class="nav--button-logo header-nav--aroma--button-logo">.</span>');
    newElemHTML(headerNavButtonAroma, 'beforeend', '<span class="nav--button-text header-nav--aroma--button-text">Aroma</span>');

    newElemHTML(
        headerNavMenu, 
        'beforeend', 
        '<li class="header-nav--button header-nav--button-date button-date" data-menu-nav="date"></li>'
    ); 

    const headerNavButtonDate = document.querySelector('.header-nav--button-date');

    newElemHTML(headerNavButtonDate, 'beforeend', '<span class="nav--button-logo header-nav--date--button-logo">.</span>');
    newElemHTML(headerNavButtonDate, 'beforeend', '<span class="nav--button-text header-nav--date--button-text">Date</span>');

    newElemHTML(
        headerNavMenu, 
        'beforeend', 
        '<li class="header-nav--button header-nav--button-history" data-menu-nav="history"></li>'
    ); 

    const headerNavButtonHistory = document.querySelector('.header-nav--button-history');

    newElemHTML(headerNavButtonHistory, 'beforeend', '<span class="nav--button-logo header-nav--history--button-logo">.</span>');
    newElemHTML(headerNavButtonHistory, 'beforeend', '<span class="nav--button-text header-nav--history--button-text">History</span>');

    navigationHeaderMenu();
}