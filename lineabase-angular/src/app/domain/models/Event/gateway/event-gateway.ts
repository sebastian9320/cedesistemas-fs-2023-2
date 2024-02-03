import { Observable } from "rxjs";
import { Events } from "../event";

export abstract class EventGateway {
  abstract getAllEvents(category: string):Observable<Events>
  abstract getEventById(id: string):Observable<Event>
}
