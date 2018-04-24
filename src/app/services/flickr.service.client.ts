import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FlickrService {

  key = 'fc38f740eca2dee8babd800c49eb559c';
  secret = '7562619adfaa4284';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }
}

