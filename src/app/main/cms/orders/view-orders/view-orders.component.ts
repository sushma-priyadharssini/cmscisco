import { Component, OnInit } from '@angular/core';
import {viewOrder} from "./viewOrders.interface";
import {viewOrdersData} from "./viewOrders.array";

@Component({
  selector: 'app-view-orders',
  templateUrl: 'view-orders.component.html',
  styleUrls: ['view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  ordersData : viewOrder[];
  selectedRow;

  constructor() { }

  ngOnInit() {
    this.ordersData = viewOrdersData;
    this.selectedRow ={};
  }

  clickRow(data){
    console.log(data);
    this.selectedRow = data;
    console.log(this.selectedRow.orderID);
  }


}
