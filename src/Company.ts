import faker from "faker";
import {Mappable} from './CustomMap';


// We import mappable to the complany class page
// this means that when errors show when we add an instance
// of class to addMarker on index.ts the error apppears here
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(){
    return `
    <div>
    <h1>Company Name ${this.companyName}</h1>
    <h3>Catchphrase ${this.catchPhrase}</h3>
    </div>`
 }
}
