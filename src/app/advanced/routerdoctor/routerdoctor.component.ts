import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routerdoctor',
  templateUrl: './routerdoctor.component.html',
  styleUrls: ['./routerdoctor.component.css'],
})
export class RouterdoctorComponent implements OnInit {
  id!: string;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  saveDoctor() {
    this.router.navigate(['doctor', '12']);
  }
}
