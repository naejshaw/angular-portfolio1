import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  @Input()
  socialMedia1:string = ""
  @Input()
  socialMedia2:string = ""
  @Input()
  socialMedia3:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
