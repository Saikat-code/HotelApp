import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor( private firestore: AngularFirestore) { }
  createCustdetails(data)
  {
    return this.firestore.collection('users').add({
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.inputAddress,
      email: data.email,
    });
  }
  roomEntry(dateDetails)
  {
    return this.firestore.collection('dates').add({
      firstDate: dateDetails.firstDate,
      lastDate: dateDetails.lastDate,
    });
  }
  getDates()
  {
    return this.firestore.collection('dates').valueChanges();
  }
  // dateMatch()
  // {

  // }
}
