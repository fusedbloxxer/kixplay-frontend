import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // Default expiration time is 3 minutes
  static DEFAULT_EXPIRATION: number = 180_000;

  constructor() {}

  /**
   * Save an object to the local storage for
   * a determined period of time.
   */
  public setItem<T>(
    key: string,
    value: T | null | undefined,
    expiration: number = LocalStorageService.DEFAULT_EXPIRATION
  ): void {
    localStorage.setItem(
      key,
      JSON.stringify({
        expiration: new Date().getTime() + expiration,
        value,
      })
    );
  }

  /**
   * Retrive the associated value from the local storage.
   * If the cache expired it's removed and null is returned.
   */
  public getItem<T>(key: string): T | undefined | null {
    // Retrive the values from local storage
    const temp: string | null = localStorage.getItem(key);

    // Check for key existance
    if (temp === null) {
      return undefined;
    }

    // Parse the temporary object
    const obj: {
      value: T | null | undefined;
      expiration: number | null | undefined;
    } = JSON.parse(temp);

    // Check for format
    if (!obj.expiration || !obj.value) {
      return null;
    }

    // Compare expiration
    if (new Date(obj.expiration) < new Date()) {
      this.removeItem(key);
      return null;
    }

    // Return the object
    return obj.value;
  }

  /**
   * Remove an item from the local storage.
   */
  public removeItem(key: string): boolean {
    const temp = localStorage.getItem(key);

    if (temp !== null) {
      localStorage.removeItem(key);
      return true;
    }

    return false;
  }
}
