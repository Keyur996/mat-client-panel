import { LoaderService } from './shared/loader/service/loader.service';
import {
  Component,
  HostListener,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  show: boolean = false;
  opened = false;
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(
    private _loading: LoaderService,
    private _ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // console.log('App init');
    this._loading.isAppLoading.subscribe((show: boolean) => {
      this.show = show;
      // console.log('show loader', show);
      this._ref.detectChanges();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  isBiggerScreen() {
    // console.log(window);
    const width: number =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}
