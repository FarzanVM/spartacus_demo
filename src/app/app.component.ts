import { Component, OnInit } from '@angular/core';
import {ProductDetailOutlets, ProductImagesComponent,ProductSummaryComponent} from '@spartacus/storefront'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'store';
  pdOutlet:any= ProductDetailOutlets;
  summary=ProductImagesComponent;

  
  ngOnInit(): void {
    console.log(this.summary)
    console.log("Outlets",this.pdOutlet)
  }
 
}
