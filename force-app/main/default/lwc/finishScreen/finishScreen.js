import { api, LightningElement } from 'lwc';
import success from './templates/successFinishScreen.html';
import failure from './templates/failureFinishScreen.html';
import def from './templates/defaultFinishScreen.html';

export default class FinishScreen extends LightningElement {
   
    @api
    pageRef;

    render(){
        console.log('rendering...');
        if (this.pageRef=='success') {
            return success;
        }
        if (this.pageRef=='failure') {
            return failure;
        }
        return def;
    }
}