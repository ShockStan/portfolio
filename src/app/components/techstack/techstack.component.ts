import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { faJava, faSquareJs, faDocker, faHtml5, faPython, faCss3, faNode } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss']
})
export class TechstackComponent implements OnInit {

  constructor(private service: ServiceService){ }
  ngOnInit(): void {
    this.service.sethighLight('tech');
  }

  

}
