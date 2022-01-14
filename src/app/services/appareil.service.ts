import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AppareilService{

    appareilsSubject = new Subject<any[]>();

    private appareils: any[] = [];
    
    // private appareils= [
    //     {
    //       id: 1,  
    //       name: 'Machine à laver',
    //       status: 'éteint'
    //     },
    //     {
    //       id: 2,  
    //       name: 'Frigo',
    //       status: 'allumé'
    //     },
    //     {
    //       id: 3,  
    //       name: 'Ordinateur',
    //       status: 'éteint'
    //     }

    // ]
        
   

    constructor(private httpClient: HttpClient){}

    saveAppareilsToServer(){
        this.httpClient
        .put('https://appareils-electriques-b7897-default-rtdb.firebaseio.com/appareils.json',
                this.appareils)
        .subscribe(
            () => {
                console.log('Enregistrement terminé !');
            },
            (error) =>{
                console.log('Erreur ! :' +error);
            }
        );        
    }

    getAppareilsFromServer(){
        this.httpClient
            .get<any[]>('https://appareils-electriques-b7897-default-rtdb.firebaseio.com/appareils.json')
            .subscribe(
                (response) =>{
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                (error) => {
                    console.log('Erreur ! : ' +error);
                    
                }
 
            );
    }

    emitAppareilSubject(){
        this.appareilsSubject.next(this.appareils.slice());
    }

    // switchOnAll(){
    //     for(let appareil of this.appareils){
    //         appareil.status = 'allumé';
    //     }
    //     this.emitAppareilSubject();
    // }

    // switchOffAll(){
    //     for(let apperil of this.appareils){
    //         apperil.status = 'éteint';
    //         this.emitAppareilSubject();
    //     }
       
    // }

    // switchOnOne(i : number){
    //     this.appareils[i].status = 'allumé';
    //     this.emitAppareilSubject();
    // }

    // switchOffOne(i: number){
    //     this.appareils[i].status = 'eteint';
    //     this.emitAppareilSubject();
    // }

    // getAppareilById(id: number){
    //     const appareil = this.appareils.find(
    //         (s) => {
    //             return s.id ===id;
    //         }
    //     );
    //     return appareil;
    // }

    addAppareil(name: string, status:string){
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id +1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
}