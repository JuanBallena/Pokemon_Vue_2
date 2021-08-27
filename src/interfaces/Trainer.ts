export class Trainer {
  public user_id: number;
  public name: string;
  public country: string;
  public url_image: string;
  public stars: string;

  constructor(user_id: number, name: string, country: string, url_image: string, stars: string) {
    this.user_id = user_id
    this.name = name
    this.country = country
    this.url_image = url_image
    this.stars = stars
  }
}