
import { Injectable } from '@angular/core';
import { EventGateway } from '../../../domain/models/Event/gateway/event-gateway';
import { Observable } from 'rxjs';
import { Events } from '../../../domain/models/Event/event';
import GerericService from '../../helpers/generic.service';
@Injectable({
  providedIn: 'root'
})
export class EventService extends EventGateway{

  private _url = 'http://localhost:3000'
  constructor(private _genericService: GerericService) { super() }

  override getAllEvents(category: string): Observable<Events> {
    return this._genericService.get<Events>(this._url,'events/getAll', `idCategory=${category}`);
  }

  override getEventById(id: string): Observable<Event> {
    return this._genericService.get<Events>(this._url,`events/${id}`);
  }
}
