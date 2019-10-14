import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { DetailsService } from '../fireserv/details.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})

export class ClientDetailsComponent implements OnInit {
  
  // public firstname;
  // public lastname;
  // public dob;
  // public email;
  // arr: any[] = [];


  constructor( public detailsService : DetailsService) {}
    
  ngOnInit() {
  }
  // register(data)
  // {
  //   this.firstname=data.firstName;
  //   this.lastname=data.lastName;
  //   this.dob=data.dob;
  //   this.email=data.email;
  //   let a = localStorage.getItem('client') || [];
  //   if(a!=null)
  //   { 
  //     this.arr.push(data);
  //     console.log(this.arr);
  //     localStorage.setItem('client',JSON.stringify(this.arr));
  //    }
  //    else{
  //    localStorage.setItem('client',JSON.stringify(this.arr));
  //    }
    
  // }
  register(data)
  {
    this.detailsService.createCustdetails(data)
    .then(
      res => {
        alert("Success");
      }
    )
  }
}

  
