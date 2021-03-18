import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";
  email: string;
  imageUrl: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), //turn string to number using parseFloat()
      lng: parseFloat(faker.address.longitude()),
    };
    this.email = faker.internet.email();
    this.imageUrl = faker.image.imageUrl(200, 200);
  }
  markerContent(): string {
    return `
    <h2>User Name: ${this.name}</h2>
    <h3>User Email: ${this.email}</h3>
    <img src=${this.imageUrl} alt="imageUrl"/>
    `;
  }
}
