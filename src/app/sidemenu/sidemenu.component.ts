import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  content: any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      response => {
        
        this.content = response.content; // Access the "content" array
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
