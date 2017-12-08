import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sharedtable',
  templateUrl: './sharedtable.component.html',
  styleUrls: ['./sharedtable.component.css']
})
export class SharedTableComponent implements OnInit {
  @Input() tableData: any[];
  @Output() toggleEventEmmitter: EventEmitter<String> = new EventEmitter<String>();
  @Output() removeEventEmmitter: EventEmitter<String> = new EventEmitter<String>();
  keys: string[];
  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.tableData[0]);
  }

  toggleStatus(event, id) {
    this.toggleEventEmmitter.emit(id);
  }

  remove_student(event, id) {
    this.removeEventEmmitter.emit(id);
  }
}
