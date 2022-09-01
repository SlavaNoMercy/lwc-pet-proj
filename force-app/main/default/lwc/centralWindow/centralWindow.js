import { LightningElement } from 'lwc';
import TEST_IMAGES from '@salesforce/resourceUrl/LadaCenterHome';

export default class CentralWindow extends LightningElement {

    testStruct = [
        TEST_IMAGES + '/ladaHomePage.jpg',
        TEST_IMAGES + '/ladaGranta.jpg',
        TEST_IMAGES + '/ladaNiva.jpg',
        TEST_IMAGES + '/ladaVesta.jpg',
        TEST_IMAGES + '/ladaXRAY.jpg',
        TEST_IMAGES + '/ladaNiva.jpg'
    ]

    currentIndex = 0;

    get currentSlot(){
        return this.testStruct[this.currentIndex];
    }
    
    get prevSlot(){
        if(this.currentIndex===0){
            return this.testStruct[this.testStruct.length-1];
        }
        else{
            return this.testStruct[this.currentIndex-1];
        }
    }

    get nextSlot(){
        if(this.currentIndex===this.testStruct.length-1){
            return this.testStruct[0];
        }
        else{
            return this.testStruct[this.currentIndex+1];
        }
    }

    delayF(){
        this.currentIndex += 1;
        if(this.currentIndex===this.testStruct.length-1){
            this.currentIndex = 0;
        }
        setTimeout(() => this.delayF(),8000);
    }
}