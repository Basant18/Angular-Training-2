import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  names: any;
  ngOnInit(): void {
    console.log(this.route.snapshot);
    this.names = this.route.snapshot.data.preloadData.map((li:any) => li.author);
  }

}
