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
  		img: "",
  		name: "Lorem ipsum",
  		title: "FE Developer"
  	},
  	{
  		img: "",
  		name: "Lorem ipsum",
  		title: "Visual Designer"
  	},
  	{
  		img: "",
  		name: "Lorem ipsum",
  		title: "Visual Designer"
  	},
  	{
  		img: "",
  		name: "Lorem ipsum",
  		title: "FE Developer"
  	}
  ];

}
