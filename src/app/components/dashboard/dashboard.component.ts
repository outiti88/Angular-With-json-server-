import { Component, OnInit, OnChanges,AfterViewInit, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild(ChartsComponent) charts ;
  constructor(private taskService: TaskService ) { }

  region1 : string = 'Casablanca-Settat' ;
  region2 : string = 'Tanger-Tétouan-Al Hoceima';

  regions : any ; 
  maroc = {
    Cases : 0,
    Deaths : 0,
    Recoveries : 0
};
  ngOnChanges(){
    this.maroc = this.charts.maroc;
    this.regions= this.charts.regions;
}

  ngOnInit(): void {
  }

 

  ngAfterViewInit(){
      this.maroc = this.charts.maroc;
      this.regions= this.charts.regions;
  }


 

}//fin classe
