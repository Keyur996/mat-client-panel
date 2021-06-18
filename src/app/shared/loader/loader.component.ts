import { LoaderService } from './service/loader.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  @Input()
  public message: string | undefined;

  public isLoading: Subject<boolean> = this.loaderService.isAppLoading;

  /**
   *Creates an instance of AppLoaderComponent.
   * @param {LoaderService} loaderService
   * @memberof AppLoaderComponent
   */
  public constructor(private loaderService: LoaderService) {}
}
