import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import { socialMedia } from 'src/environment/environment';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reachout',
  templateUrl: './reachout.component.html',
  styleUrls: ['./reachout.component.scss']
})
export class ReachoutComponent  implements OnInit {


  constructor(private service: ServiceService){ }

  ngOnInit(): void {
    this.service.sethighLight('reach');
  }

  bird = faEarlybirds;

  download = faCircleDown;

  socialMedia = socialMedia;  

  downloadResume(div: HTMLElement){
    this.service.downloadResume();
    if(div.classList.contains('animate-bounce')){
      div.classList.remove('animate-bounce');
    }
  }

}
