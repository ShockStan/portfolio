import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private highLight = new BehaviorSubject<string>('ARVINDH');
  highLight$ = this.highLight.asObservable();

  sethighLight(value: string) {
    this.highLight.next(value);
  }

  downloadResume() {
    const url = '../../assets/resume/Resume-Arvindh.pdf';
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Resume-Arvindh.pdf');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
