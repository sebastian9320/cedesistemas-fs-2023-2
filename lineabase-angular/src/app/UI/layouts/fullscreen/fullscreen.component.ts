import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fullscreen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css']
})
export class FullscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
