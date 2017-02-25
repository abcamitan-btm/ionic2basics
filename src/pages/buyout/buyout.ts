import { Component , OnInit} from '@angular/core';
import { NavParams , NavController } from 'ionic-angular';

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})

export class BuyoutPage implements OnInit {

    Product: {productname: string, quantity: number};

    constructor(private navParam: NavParams,private navCtrl: NavController){}

    ngOnInit(){
        this.Product = this.navParam.data;
    }

    onGoToBuy(){
        this.navCtrl.popToRoot();
    }
}