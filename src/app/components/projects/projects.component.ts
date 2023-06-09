import { Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { projects } from 'src/environment/environment';
import { MatDialog } from '@angular/material/dialog';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = projects;
  modal = projects[0];
  modalOpened = false;
  modalOpen = false;

  url = faEarthAmerica;
  gitHub = faGithub;
  youTube = faYoutube;

  @ViewChild('info') info!: ElementRef;
  @ViewChild('sideInfo') sideInfo!: ElementRef;


  constructor(private service: ServiceService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.service.sethighLight('projects');
  }

  delayTime = 0;
  openInfo(div: HTMLElement) {
    const el = new ElementRef(div);
    const no = el.nativeElement.id;
    setTimeout(() => {
      this.modal = this.projects[Number(no) - 1];
      this.sideInfo.nativeElement.animate(
        { transform: 'translateY(0)' }, { duration: 500, delay: this.delayTime, fill: "forwards" }
      );

      if(this.delayTime===0){
        this.delayTime = 500;
        }

      setTimeout(() => { this.modalOpened = true }, 2000);
    }, 500);
  }
  openSideInfo(div: HTMLElement) {
    const el = new ElementRef(div);
    const no = el.nativeElement.id;
    setTimeout(() => {
      this.modal = this.projects[Number(no) - 1];
      this.info.nativeElement.animate(
        { transform: 'translateX(0)' }, { duration: 500, delay: this.delayTime, fill: "forwards" }
      );
        if(this.delayTime===0){
      this.delayTime = 500;
        }

      setTimeout(() => { this.modalOpen = true }, 2000);
    }, 500);
  }
  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (!this.info.nativeElement.contains(event.target) && this.modalOpened) {
      this.info.nativeElement.animate({ transform: 'translateY(100%)' }, { duration: 500, fill: "forwards" });
      this.modalOpened = false;
    }
    if (!this.sideInfo.nativeElement.contains(event.target) && this.modalOpen) {
      this.sideInfo.nativeElement.animate({ transform: 'translateX(100%)', display: 'hidden' }, { duration: 500, fill: "forwards" });
      this.modalOpen = false;
    }
  }



}
