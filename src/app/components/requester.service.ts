import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  public listOfFormDetails: any[] = []
  public currentStepper = new Subject<any>()
  public formValidator = new Subject<any>()
  public isCardMarkAsTouched = new BehaviorSubject<boolean>(false);
  public proposedFormValidator = new Subject<any>();
  public radioValidation = new Subject<any>();
  public isFromEdit = new BehaviorSubject<boolean>(false);
  isNewWorkFlow = new BehaviorSubject<boolean>(false);
  myWokFlowArray = new BehaviorSubject<any>([]);
  private nextClickedSource = new Subject<void>();
  mtId = new Subject<any>();
  nextClicked$ = this.nextClickedSource.asObservable();
  public isRadioTouched = new Subject<boolean>()

  constructor() { }

  triggerNext() {
    this.nextClickedSource.next();
  }

 
  
}
