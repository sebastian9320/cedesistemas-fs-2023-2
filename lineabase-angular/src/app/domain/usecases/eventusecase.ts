import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { EventGateway } from "../models/Event/gateway/event-gateway";
import { Event as EventModel, Events } from "../models/Event/event";

@Injectable({
  providedIn: 'root'
})
export class Eventusecase {
  constructor(private _eventGateway: EventGateway){}

  getAllEvents(category: string): EventModel[] {
    let eventsWithLastUpdate: EventModel[] = []
    this._eventGateway.getAllEvents(category)
      .subscribe((data: any) => {
        if(data){
          data.events.forEach((event: EventModel) => {
            let currentDate = new Date()
            let updatedAt = new Date(event.updatedAt)
            let dateDifferenceMilliseconds = currentDate.getTime() - updatedAt.getTime()
            event.lastUpdated = Math.floor(dateDifferenceMilliseconds / (1000 * 60))
            eventsWithLastUpdate.push(event)
          });
        }
      })
    return eventsWithLastUpdate
  }

  getEventById(id: string): Observable<Event> {
    return this._eventGateway.getEventById(id);
  }
}
