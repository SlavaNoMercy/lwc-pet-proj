import { api, LightningElement } from 'lwc';

export default class CarouselElement extends LightningElement {

    @api
    image;

    animation(){
        this.template.querySelector('img').classList.remove(['animation']);
        this.template.querySelector('img').classList.add(['animation']);
    }
}