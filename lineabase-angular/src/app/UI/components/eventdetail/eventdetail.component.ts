import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { Eventusecase } from '../../../domain/usecases/eventusecase';
import { Event as EventModel} from '../../../domain/models/Event/event';

@Component({
  selector: 'app-eventdetail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './eventdetail.component.html',
  styleUrl: './eventdetail.component.css'
})
export class EventdetailComponent implements OnInit{
  event!: EventModel;
  constructor(
    private _eventUseCase: Eventusecase,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getEventDetail();
  }

  getEventDetail(): void {
    let eventId = '';
    this.route.paramMap.subscribe((params: ParamMap) => {
      eventId = params.get('id') ?? ''
    })
    if(eventId !== ''){
      this._eventUseCase.getEventById(eventId).subscribe((data: any) => {
        if(data){
          this.event = data;
        }
      })
    }else{
      this.router.navigate(['/home'])
    }
  }
}
