//instruction to every other class on how they can
// be an argument to addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // property can't be accessed from outside of the class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  // using or operator here - this means
  // you can only use properties that are in BOTH User and Company
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
    map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
