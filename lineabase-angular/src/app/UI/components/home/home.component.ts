import { Component, OnInit } from '@angular/core';
import { Event, Events } from '../../../domain/models/Event/event';
import { Eventusecase } from '../../../domain/usecases/eventusecase';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [NgIf, NgFor, RouterModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  constructor(private _eventUseCase: Eventusecase) { }

  ngOnInit(): void {
    this.getAllEvents('1');
    console.log(this.events)
  }

  getAllEvents(category: string): void{
    this.events = this._eventUseCase.getAllEvents(category)
  }
}
