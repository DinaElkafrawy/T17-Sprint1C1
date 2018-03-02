import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class FashionService {

    constructor(private httpClient: HttpClient) { }

    createDina(name:string, price:number, component:string, seller: string) {
        return this.httpClient.post(environment.apiUrl + 'c1/createDina', {'name':name, 'price':price, 'component':component, 'seller':seller});
    }

    getDina(){
        return this.httpClient.get(environment.apiUrl + 'c1/getDina');
    }

    updateDina(id:object, name:string, price:number,component:string, seller: string) {
        return this.httpClient.patch(environment.apiUrl + 'c1/updateDina/' + id, {'name':name, 'price':price, 'component':component, 'seller':seller});
    }

    deleteDina(id:object){
        return this.httpClient.delete(environment.apiUrl+ 'c1/deleteDina/'+id);
    }
}
