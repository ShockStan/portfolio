import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { about } from 'src/environment/environment';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private service: ServiceService){ 
    
  }
  ngOnInit(): void {
    this.service.sethighLight('about');
  }
  about = about;
  pdf = faFilePdf;
  download = faCircleDown;

  downloadResume(){
    this.service.downloadResume();
  }


}
