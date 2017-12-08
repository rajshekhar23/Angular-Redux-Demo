import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.css']
})
export class TotalCountComponent implements OnInit {
  @Input() count: number;
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
