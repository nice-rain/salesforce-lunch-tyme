import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api currentrestaurant = {};

    // Event to parent to dispatch that we selected a restaurant
  handleBack(){
    console.log('handling back');

    const selectedEvent = new CustomEvent("backclicked");

    // Dispatches the event.
    this.dispatchEvent(selectedEvent);
  }
}