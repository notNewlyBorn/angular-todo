import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private goals = new BehaviorSubject<any>([])
  goal = this.goals.asObservable()

  constructor() { }

// accessible from different components
  changeGoal(goal) {
    this.goals.next(goal)
  }
}
