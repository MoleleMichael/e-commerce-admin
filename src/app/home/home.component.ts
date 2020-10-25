import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Productimage: string;
  Productname: string;
  position: number;
  quantity: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Productimage: "https://www.powerplanetonline.com/cdnassets/raton_gaming_logitech_g102_prodigy_usb_negro_01_l.jpg", Productname: "Mouse" ,quantity: 14},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   displayedColumns: string[] = ['position', 'Productimage', 'Productname', 'quantity'];
  dataSource = ELEMENT_DATA;
}