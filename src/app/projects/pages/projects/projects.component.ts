import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  menu :boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  add() {
    this.router.navigate(['add'])
  }
  edit() {
    this.router.navigate(['edit'])
  }

}
