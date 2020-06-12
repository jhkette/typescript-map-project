import faker from 'faker';
// we need to add type definition file

export class User {
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
}

