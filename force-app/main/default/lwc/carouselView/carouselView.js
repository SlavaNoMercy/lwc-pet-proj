import { LightningElement } from 'lwc';

export default class CarouselView extends LightningElement {
    
    connectedCallback(){
        this.template.addEventListener('nextslide',this.handleNextSlide());
    }

    handleNextSlide(){
        this.template.querySelectorAll('div').forEach((element) => {
            element.classList.remove('animation');
            element.classList.add('animation');
        })
    }
}