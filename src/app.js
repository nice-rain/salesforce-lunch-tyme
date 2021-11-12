import { LightningElement, api, track } from "lwc";


export default class App extends LightningElement {

  // Negative index to deselect them
  currentRestaurantIndex = -1;

  // State Decorator
  restaurantRes = [];

   // Don't show info by default
  currentRestaurant;

  // Async Function
  async getRestaurants() {
      const url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
      try{
      let res = await fetch(url);
      res = await res.json();
      console.log(res);
      this.restaurantRes = res.restaurants;
      }
      catch(e){
        console.log(e.message);
      }
  }
 
  // Event listener for our child buttons
  handleRestaurantSelected(event){
    this.currentRestaurant = this.restaurantRes[event.detail];
  }

  handleBackClicked(event){
    this.currentRestaurant = {};

    console.log('current is', this.currentRestaurant);
  }

  // Mounted
  connectedCallback() {
    console.log('making api call');
    this.getRestaurants();
  }

  // Returns our fetched restaurants
  get restaurants(){
    return this.restaurantRes;
  }

  get infoStyle(){
    if(!this.currentRestaurant) return 'transform:scaleX(0);';

    return Object.keys(this.currentRestaurant).length ? 'transform:scaleX(1);' : 'transform:scaleX(0);';
  }

}
