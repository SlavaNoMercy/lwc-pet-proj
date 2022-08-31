import { LightningElement } from 'lwc';

export default class FinishScreenNavbar extends LightningElement {
    next(){
        this.dispatchEvent(new CustomEvent('nextpage'));
    }
    prev(){
        this.dispatchEvent(new CustomEvent('prevpage'));
    }
}