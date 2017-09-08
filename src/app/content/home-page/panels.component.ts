import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html'
})
export class PanelsComponent implements OnInit {

	public panelist;

  constructor() { }

  ngOnInit() {
  }

  panelists = [
  	{
  		img: "assets/images/240-f-67902901-yapt-0-x-pb-f-6-yy-cd-7-rus-wfs-78-nr-uv-8-wc-ev-copy-3@2x.png",
  		name: "Lorem ipsum",
  		title: "FE Developer"
  	},
  	{
  		img: "assets/images/240-f-67902901-yapt-0-x-pb-f-6-yy-cd-7-rus-wfs-78-nr-uv-8-wc-ev-copy-2.png",
  		name: "Lorem ipsum",
  		title: "Visual Designer"
  	},
  	{
  		img: "assets/images/240-f-67902901-yapt-0-x-pb-f-6-yy-cd-7-rus-wfs-78-nr-uv-8-wc-ev.png",
  		name: "Lorem ipsum",
  		title: "Visual Designer"
  	},
  	{
  		img: "assets/images/240-f-67902901-yapt-0-x-pb-f-6-yy-cd-7-rus-wfs-78-nr-uv-8-wc-ev-copy.png",
  		name: "Lorem ipsum",
  		title: "FE Developer"
  	}
  ];

}
