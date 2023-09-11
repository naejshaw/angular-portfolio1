import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  styleUrls: ['./social-media-icon.component.css']
})
export class SocialMediaIconComponent implements OnInit {

  @Input()
  socialMedia:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
