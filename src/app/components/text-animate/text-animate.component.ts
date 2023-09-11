import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-animate',
  templateUrl: './text-animate.component.html',
  styleUrls: ['./text-animate.component.css']
})
export class TextAnimateComponent implements OnInit {

  @Input()
  textContent:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
