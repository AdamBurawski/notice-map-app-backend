import { AdEntity } from "../types";
import { ValidationError } from "../utlis/errors";

interface NewAdEntity extends Omit<AdEntity, "id"> {
  id?: string;
}
export class AdRecord implements AdEntity {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public url: string;
  public lat: number;
  public lon: number;

  constructor(obj: NewAdEntity) {
    if (!obj.name || obj.name.length > 100) {
      throw new ValidationError(
        "Nazwa ogłoszenia nie może być pusta, ani przekraczać 100 znaków"
      );
    }
    if (obj.description.length > 1000) {
      throw new ValidationError(
        "Treść ogłoszenia nie może przekraczać 1000 znaków"
      );
    }
    if (obj.price < 0 || obj.price > 9999999) {
      throw new ValidationError(
        "Cena nie może być mniejsza niż 0 lub wieksza niż 9 999 999"
      );
    }
    if (!obj.url || obj.url.length > 100) {
      throw new ValidationError(
        "Adres ogłoszenia nie może być pusty, ani przekraczać 100 znaków"
      );
    }
    if (typeof obj.lat !== "number" || typeof obj.lon !== "number") {
      throw new ValidationError("NIe można zlokalizować ogłoszenia");
    }
    this.name = obj.name;
    this.description = obj.description;
    this.price = obj.price;
    this.url = obj.url;
    this.lat = obj.lat;
    this.lon = obj.lon;
  }
}
