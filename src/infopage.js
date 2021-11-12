import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api currentrestaurant;

  get displayInfo(){
    if(!this.currentrestaurant) return false;

    return Object.keys(this.currentrestaurant).length;
  }
}