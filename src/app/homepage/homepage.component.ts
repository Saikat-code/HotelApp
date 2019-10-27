import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../fireserv/details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  dates:Array<any>;
  rooms : any;
  firstdate :any;
  lastdate: any;
  diffDays: any;

  constructor(public detailsService : DetailsService, private router: Router) { }
  ngOnInit() {
    // this.detailsService.getDates()
    //     .subscribe(result => {
    //             this.dates=result;
    //             console.log(this.dates);
    //     })
  }
  getCustDates(dateDetails)
  {
      this.firstdate = dateDetails.firstDate;
      this.lastdate = dateDetails.lastDate;
      var d1= new Date(this.firstdate);
      var d2= new Date(this.lastdate);
      var diff = Math.abs(d2.getTime()-d1.getTime());
      this.diffDays = Math.ceil(diff/(1000*3600*24));
      console.log(this.diffDays);
      this.detailsService.checkRoom(this.diffDays, this.firstdate);
  }

  bookRoom()
  {
    
  }
}
  
