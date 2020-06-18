import faker from 'faker';
// we need to add type definition file

import {Mappable} from './CustomMap';


// We import mappable to the complany class page
// this means that when errors show when we add an instance
// of class to addMarker on index.ts the error apppears here
// this can be useful with classes as errors will show on this page
export class User implements Mappable{
    // declare types
    name: string;
    location: {
        lat: number,
        lng: number;
    }

    constructor(){
        this.name = faker.name.firstName()
        this.location ={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(){
        return `User Name ${this.name}`
    }
}

