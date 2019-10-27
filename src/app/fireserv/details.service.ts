import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import {Dates} from './dates';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  dates: any;
  value :any;
  beds : any;
  constructor( private firestore: AngularFirestore, private router: Router) { }
  createCustdetails(data)
  {
    return this.firestore.collection('users').add({
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.inputAddress,
      email: data.email,
    });
  }
  // roomEntry(dateDetails)
  // {
  //   return this.firestore.collection('dates').add({
  //     firstdate: dateDetails.firstDate,
  //     lastdate: dateDetails.lastDate,
  //   });
  // }
  // getDates()
  // {
  //   return this.firestore.collection('dates').valueChanges();
  // }
  checkRoom(diffDays, firstdate)
  {
     for(var i=0; i<diffDays; i++)
     {
       let save = this.firestore.collection('dates',ref => ref.where('date', '==', firstdate)
      .where('roomAvail', '==', true)).valueChanges()
      .subscribe( value => {
      this.value = value;
      console.log(this.value);
      
       if(this.value[0]!=null)
       {  
          alert("Room booked");
          return false;
        }
       else{
         alert("Romm Available");
         let decrement = firebase.firestore.FieldValue.increment(-1);
         this.dates=this.firestore.collection('dates',ref => ref.where('date', '==', firstdate))
        .valueChanges()
        .subscribe(beds => {
          console.log(beds);
        
          this.dates.update({singleBed:decrement});
        })
      }
    })
     
      var d=new Date(firstdate);
      var d2=d.getTime();
      var d1 = d2 + (1000 * 60 * 60 * 24);
      firstdate = new Date(d2);
  }

  // checkRoom(dateDetails)
  // {
  //     let save = this.firestore.collection('dates',ref => ref.where('firstdate', '==', dateDetails.firstDate))
  //    .valueChanges()
  //    .subscribe( value => {
  //      console.log(value);
  //   });
  //   if(this.value == dateDetails.firstDate )
  //   {
  //     console.log("Room booked");
  //   }

    // let ldate= this.firestore.collection('dates',ref => ref.where('lastDate','>',dateDetails.lastDate)).valueChanges();
    
  }

  }