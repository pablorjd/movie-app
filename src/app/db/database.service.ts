import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'mymovielist';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private storage: Storage
  ) {
    this.init();
  }

  async init() {
    console.log('INIT');
    await this.storage.create();
    console.log('DONE');
  }

  getData() {
    console.log('GETDATA');
    return this.storage.get(STORAGE_KEY)  || [];
  }

  async addData(movie) {
    console.log('movie',movie);
    const storeData = await this.storage.get(STORAGE_KEY)  || [];
    storeData.push(movie);
    return this.storage.set(STORAGE_KEY,storeData);
  }

  async removeMovie(index) {
    const storeData = await this.storage.get(STORAGE_KEY) || [];
    storeData.splice(index,1);
    return this.storage.set(STORAGE_KEY,storeData);
  }


}
