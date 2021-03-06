import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  // public isCompLoading = new Subject<boolean>();
  public isAppLoading = new Subject<boolean>();

  constructor() {}

  /**
   * @function showBlockLoader
   * @description emit to show app loader
   */
  public showBlockLoader() {
    this.isAppLoading.next(true);
  }
  /**
   * @function hideBlockLoader
   * @description emit to hide app loader
   */
  public hideBlockLoader() {
    this.isAppLoading.next(false);
  }
}
