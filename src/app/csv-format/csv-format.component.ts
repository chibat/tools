import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-csv-format',
  templateUrl: './csv-format.component.html',
  styleUrls: ['./csv-format.component.css']
})
export class CsvFormatComponent implements OnInit {

  csv = new FormControl(
`header1,header2,   header3
1,2,    3
11,22,    33
1234567, 1, 2
12345678, 1, 2`
  );

  constructor() { }

  ngOnInit() {
  }

  format() {
    const lines = this.csv.value.split(/\r\n|\r|\n/);
    let formatted = '';
    const headerIndexes = [];
    for (let rowIndex = 0; rowIndex < lines.length; rowIndex++) {
      if (rowIndex == 0) {
        const line = lines[rowIndex].replace(/, */g, ', ').trim();
        for (let fromIndex = 0; ; fromIndex++) {
          fromIndex = line.indexOf(', ', fromIndex);
          if (fromIndex === -1) {
            break;
          }
          headerIndexes.push(fromIndex);
        }
        formatted += line;
      } else {
        formatted += "\n";
        let line = '';
        const columns = lines[rowIndex].split(',');
        for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
          line += columns[columnIndex].trim();
          if (columnIndex != columns.length - 1) {
            line += ', '
          }
          if (headerIndexes.length > columnIndex) {
            const spaceSize = headerIndexes[columnIndex] - line.length + 2;
            for (let i = 0; i < spaceSize; i++) {
              line += ' ';
            }
	  }
        }
        formatted += line.trim();
      }
    }
    this.csv.setValue(formatted);
  }
}
