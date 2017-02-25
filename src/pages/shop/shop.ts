import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(private navCtrl: NavController) {}

  onGoToBuyout(Product: {productname: string, quantity: number}){
    this.navCtrl.push(BuyoutPage, Product);
  }
}
