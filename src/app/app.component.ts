import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng-lts/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng-lts/api';                  //api
// import { PrimeNGConfig } from 'primeng-lts/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    // this.primengConfig.ripple = true;
  }
}
