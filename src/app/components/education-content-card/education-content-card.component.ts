import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education-content-card',
  templateUrl: './education-content-card.component.html',
  styleUrls: ['./education-content-card.component.css']
})
export class EducationContentCardComponent implements OnInit {

  @Input()
  cardDate:string = ""
  @Input()
  localInfo:string = ""
  @Input()
  roleInfo:string = ""
  @Input()
  contentInfo:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
