import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-format',
  templateUrl: './csv-format.component.html',
  styleUrls: ['./csv-format.component.css']
})
export class CsvFormatComponent implements OnInit {

  csv = 'aaa,bbb,   ccc,';

  constructor() { }

  ngOnInit() {
  }

  format() {
    this.csv = this.csv.replace(/, */g, ', ');
  }
}
