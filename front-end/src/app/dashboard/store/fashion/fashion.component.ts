import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule} from "ng2-smart-table";
import {FashionService } from './fashion.service'

@Component({
    selector: 'app-fashion',
    template: '<ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)" (deleteConfirm)="onDeleteCall($event)" ></ng2-smart-table>',
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
        delete: {
          confirmDelete: true,
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
            component: {
                title: 'Component number'
            },
            seller: {
                title: 'Seller name'
            }
        }
    };

    data = [
        {}

        ]

    constructor(private fashionService: FashionService) {

    }

    onCreateCall(event) {
        event.confirm.resolve(event.newData);
        this.fashionService.createDina(event.newData.name, event.newData.price, event.newData.component, event.newData.seller).subscribe();
    }

    onEditCall(event) {
        event.confirm.resolve(event.newData)
        console.log(event.newData._id);
        this.fashionService.updateDina(event.newData._id, event.newData.name, event.newData.price, event.newData.component, event.newData.seller).subscribe();
    }

    onDeleteCall(event){
        event.confirm.resolve(event.data._id);
        console.log(event.data._id);
        this.fashionService.deleteDina(event.data._id).subscribe();
    }

    ngOnInit() {
        this.fashionService.getDina().subscribe(
            (res: any) => {
               // console.log(res.data)
                if(res.hasOwnProperty('data'))
                this.data = res.data;
            }
        );

    }
}

