import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  fecha = new Date();
  dia = this.fecha.getDay();
  year = this.fecha.getFullYear();

  hoy = `${this.dia}/Enero/${this.year}`;

  constructor() { }

  ngOnInit() {}

}
