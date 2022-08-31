import { LightningElement } from 'lwc';

export default class SimpleModalMock extends LightningElement {

    currentScreen = "default";

    nextScreen(){
        console.log('next screen works')
        if (this.currentScreen==="default") {
            this.currentScreen = "success";
            return;
        }
        if (this.currentScreen==="success") {
            this.currentScreen = "failure";
            return;
        }
        if (this.currentScreen==="failure") {
            this.currentScreen = "default";
            return;
        }
    }
    
    prevScreen(){
        this.nextScreen();
        this.nextScreen();
    }
}