import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule} from "ng2-smart-table";
import {FashionService } from './fashion.service'

@Component({
    selector: 'app-fashion',
    template: '<ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)" (deleteConfirm)=onDeleteCall($event) ></ng2-smart-table>',
    providers: [FashionService]
})
export class FashionComponent implements OnInit {

    settings = {
        add: {  
            confirmCreate: true,
        },
        edit: {
            confirmSave: true,
        },
        delete:{
            confirmDelete: true,
          },
        columns: {
            _id:{
                title: 'id',
                show:false
            },
            name: {
                title: 'Product Name'
            },
            price: {
                title: 'Price'
            },
            createdAt: {
                title: 'Created At'
            },
            updatedAt: {
                title: 'Updated At'
            },
            sellername: {
                title: 'Seller name'
            }
        }
    };

    data = [
        {
            // name: "Dina Hisham",
            // price: "10",
            // createdAt: "2/2/2018",
            // updatedAt: "2/4/2018",
            // sellername: "dodo"

        }]

    constructor(private fashionService: FashionService) {

    }

    onCreateCall(event) {
        var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
        console.log(ca);
        if (ca[1]==" null"){
            setTimeout(function() { alert("YOU MUST LOGIN TO CREATE PRODUCT"); }, 5);
        }else{
            event.confirm.resolve(event.newData);
        this.fashionService.createProduct(event.newData.name, event.newData.price , event.newData.sellername).subscribe();
        }
        //event.confirm.resolve(event.newData);
        //this.fashionService.createProduct(event.newData.name, event.newData.price , event.newData.sellername).subscribe();
    }

    onEditCall(event){
        var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   if(ca[1]==" null"){
    setTimeout(function() { alert("YOU MUST LOGIN TO EDIT PRODUCT"); }, 5);

   }
   else{
    event.confirm.resolve(event.newData);
    this.fashionService.updateProduct(event.newData._id, event.newData.name, event.newData.price).subscribe();

   }
        
   }
    onDeleteCall(event){
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        if(ca[1]==" null"){
         setTimeout(function() { alert("YOU MUST LOGIN TO DELETE PRODUCT"); }, 5);
        }
        else{
            event.confirm.resolve(event.data._id);
        console.log(event.data._id);
        this.fashionService.deleteProduct(event.data._id).subscribe();

        }
        
      }


    ngOnInit() {
        

        
        this.fashionService.getProducts().subscribe(
            (res : any) => {
                console.log(res.data);
              //  console.log(res.data)
                this.data = res.data;
            }
        );

    }
}

