import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {Widget} from "./models/widget";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';
  public data:any;
  constructor(private api: ApiService) { }

  send(){
    this.api.create(new Widget('name', 'color')).subscribe(res => {
      this.data = res.body;

    });
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.api.list(new Widget("",""),null).subscribe(x=>{
      this.data = x;
    });
  }

}
