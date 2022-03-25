import { Component , ViewChild} from '@angular/core';
import{products} from '../lineas';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  products=products;
  constructor() {}

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

    }, 1500);
  }


}
