import { Component, OnInit } from '@angular/core';
import { products } from '../lineas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.page.html',
  styleUrls: ['./lineas.page.scss'],
})
export class LineasPage implements OnInit {
  
  product: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
