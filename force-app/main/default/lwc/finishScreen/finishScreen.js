import { LightningElement, track } from 'lwc';
import successScreen from './templates/suceessFinishScreen.html';
import failureScreen from './templates/failureFinishScreen.html';
import defaultScreen from './templates/defaultFinishScreen.html';

export default class FinishScreen extends LightningElement {
   
    pageRef = 0;
    hideScreen = true;

    @track
    screenState = {
        0 : defaultScreen,
        1 : failureScreen,
        2 : successScreen
    }

    connectedCallback(){
        this.template.addEventListener('switchScreen',this.switchScreen());
        this.template.addEventListener('openScreen',this.openScreen());
    }

    render(){
        return this.screenState[this.pageRef]
    }

    switchScreen(){
        if(this.pageRef===2){
            this.pageRef = 0;
        }
        else {
            this.pageRef += 1;
        }
    }

    openScreen(){
        this.hideScreen = false;
    }

    closeScreen(){
        this.hideScreen = true;
    }
}