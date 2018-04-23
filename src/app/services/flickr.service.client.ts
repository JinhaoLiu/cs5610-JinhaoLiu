import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable() // needed as we're injecting Http service into this service
export class FlickrService {

  key = '9e1b1e0b370f1bd3b232741ac7cffdee';
  secret = '3c47ba6d2c50b285';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: Http) {}

  searchPhotos(searchTerm: any) {
  const url = this.urlBase
    .replace('API_KEY', this.key)
    .replace('TEXT', searchTerm);
    return this.http.get(url);
  }
}

