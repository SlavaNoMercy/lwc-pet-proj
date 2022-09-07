import { LightningElement } from 'lwc';

export default class CarouselNavigation extends LightningElement {
    prevSlide(){
        this.dispatchEvent(new CustomEvent('prev'));
    }
    nextSlide(){
        this.dispatchEvent(new CustomEvent('next'));
    }
}