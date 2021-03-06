import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {EchartsPage} from "../echarts/echarts";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    t: number = 5;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        let intervalId = window.setInterval(() => {
            this.t--;
            if (this.t == 0) {
                window.clearInterval(intervalId);
                this.navCtrl.push(EchartsPage);
            }
            console.log('hello' + this.t);
        }, 1000)

    }


}
