import { Component, OnInit } from '@angular/core';
import { EMPTY, observable, Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareils: any[''];
  appareilSubscription? : Subscription;
  lastUpdate = new Date();
  //lastUpdate = new Promise((resolve, rejects) =>{
    //   const date = new Date();
    //   setTimeout(
    //     () => {
    //       resolve(date);
    //     }, 2000
    //   );
    // });

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
        (appareils: any[]) => {
          this.appareils = appareils;
        }
    );
    this.appareilService.emitAppareilSubject();
  }

  onSave(){
    this.appareilService.saveAppareilsToServer();
  }

  onFetch(){
    this.appareilService.getAppareilsFromServer();
  }

  // onAllumer() {
  //   this.appareilService.switchOnAll();
  //   //console.log('On allume tout !');
  // }

  // onEteindre(){
  //   if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')){
  //     this.appareilService.switchOffAll();
  //   }else{
  //     alert('Operation impossible');
  //   }
    
  // }


  ngOnDestroy(){
    this.appareilSubscription?.unsubscribe();
  }

}
