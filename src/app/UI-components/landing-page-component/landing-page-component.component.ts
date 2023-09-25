import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css']
})
export class LandingPageComponentComponent {
  constructor(private renderer: Renderer2) { }

  
 
}
