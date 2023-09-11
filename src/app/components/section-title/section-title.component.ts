import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit {

  @Input()
  sectionTitleH2:string = ""
  @Input()
  sectionTitleSpan:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
