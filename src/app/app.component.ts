import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { slider } from './components/animation';
import { RouterOutlet, Router } from '@angular/router';
import { faLaptop, faUser, faAddressCard, faMobileScreen, faLaptopCode, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from './services/service.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]
})

export class AppComponent implements OnInit {
  title = 'Arvindh KM - Portfolio';

  dark = false;

  @ViewChild('cursor', { static: true }) cursor!: ElementRef;
  @ViewChild('outline', { static: true }) outline!: ElementRef;

  top: any;
  left: any;
  expand = false;

  @HostListener('document:click', ['$event'])
  onClick($event: any) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = ($event.pageY) + "px";
    this.left = ($event.pageX) + "px";

    this.cursor.nativeElement.style.top = this.top;
    this.cursor.nativeElement.style.left = this.left;

    this.outline.nativeElement.animate({
      left: this.left, top: this.top
    }, { duration: 500, fill: "forwards" });
  }


  toggleTheme() {
    const darkMode = document.getElementById('body');
    if (!darkMode?.classList.contains('dark')) {
      darkMode?.classList.add('dark');
      this.dark = true;
    }
    else {
      darkMode?.classList.remove('dark');
      this.dark = false;
    }
  }

  getSystemTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.getElementById('body')?.classList.add('dark');
      this.dark = true;
    }
  }

  techIcon = faLaptop;
  profileIcon = faUser;
  aboutIcon = faAddressCard;
  reachIcon = faMobileScreen;
  projectsIcon = faLaptopCode;
  educationIcon = faBookOpen;

  location: any;

  constructor(private router: Router, private elementRef: ElementRef, private service: ServiceService, private mediaMatcher: MediaMatcher, private ngxLoader: NgxUiLoaderService) {
  }
  ngOnInit(): void {
    this.ngxLoader.start();
    this.getSystemTheme();
  }

  page: any;


  ngAfterContentChecked(): void {
    this.service.highLight$.subscribe(value => {
      this.page = value;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
