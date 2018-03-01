import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule} from "ng2-smart-table";
import {FashionService } from './fashion.service'

@Component({
    selector: 'app-fashion',
    template: '<ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)"></ng2-smart-table>',
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
        columns: {
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
        event.confirm.resolve(event.newData);
        this.fashionService.createProduct(event.newData.name, event.newData.price).subscribe();
    }

    onEditCall(event) {
        event.confirm.resolve(event.newData);
        this.fashionService.updateProduct(event.newData.name, event.newData.price).subscribe();
    }

    ngOnInit() {
        this.fashionService.getProducts().subscribe(
            (res: Response) => {
                console.log(res.data)
                this.data = res.data;
            }
        );

    }
}

