import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api restaurant;
  @api restaurantindex;

  // Event to parent to dispatch that we selected a restaurant
  handleSelection(){
    console.log('handling selection', this.restaurantindex);

    const selectedEvent = new CustomEvent("selectedrestaurant", {
      detail: this.restaurantindex
    });

    // Dispatches the event.
    this.dispatchEvent(selectedEvent);
  }

  // Inject background image
  get backgroundStyle() {
        return `background-image:url(${this.restaurant.backgroundImageURL})`;
    }
}
