import { LightningElement } from 'lwc';

export default class SimpleModalMock extends LightningElement {

    currentScreen = "default";
    hideModal = true;

    openScreen(){
        this.hideScreen = false;
    }

    closeScreen(){
        this.hideScreen = true;
    }

    switchScreen(event){
        this.currentScreen = event.currentTarget.dataset.id;
        console.log('current screen: '+this.currentScreen);
    }
    
}