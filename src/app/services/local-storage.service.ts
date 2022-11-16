import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // JSON "set" example
  async setObject(nombre: string, data: any, parse = false) {

    await Preferences.set({
      key: nombre,
      value: parse == true ? JSON.stringify(data) : data
    });
  }

  // JSON "get" example
  async getObject(key: string, parse = false) {
    const ret = await Preferences.get({ key: key });
    const user = parse == true ? JSON.parse(ret.value) : ret.value;
    return user
  }
}
