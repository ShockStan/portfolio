import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  implements OnInit {

  constructor(private service: ServiceService){ }
  ngOnInit(): void {
    this.service.sethighLight('profile');
  }
  typewrite = ['Full_Stack_Developer','MEAN Stack Developer','Angular_Developer','Java_Developer','NodeJS_Developer'];
 
  
 }
