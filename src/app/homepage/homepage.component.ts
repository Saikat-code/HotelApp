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

  constructor(public detailsService : DetailsService, private router: Router) { }
  ngOnInit() {
    this.detailsService.getDates()
        .subscribe(result => {
                this.dates=result;
                console.log(this.dates);
        })
  }
  availRoom(dateDetails)
  {
    console.log(dateDetails);
    for(let date of dateDetails)
    {
    let getdate=date.payload.doc.data();
    console.log(getdate)
    if(this.dates!=getdate)
    {
    this.detailsService.roomEntry(dateDetails)
    .then(
      () => {
        alert("Welcome");
        this.router.navigate(['/login']);
        });
    }
  
    else{
      alert("Sorry")
        }
  }
  }
  
}
