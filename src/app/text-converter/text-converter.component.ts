import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-converter',
  templateUrl: './text-converter.component.html',
  styleUrls: ['./text-converter.component.css']
})
export class TextConverterComponent implements OnInit {

  actionControl = new FormControl(0);
  text = new FormControl();

  actions = [
    {
      id: 0, 
      name: 'snake to camel',
      convert: (text: string) => 
        text.toLowerCase().replace(/_./g,
          (s) => s.charAt(1).toUpperCase()
	),
      example:
`aaa_bbb_ccc
AAA_BBB_CCC
`
    },
    {
      id: 1,
      name: 'camel to snake',
      convert: (text: string) => 
        text.replace(/([A-Z])/g,
          (s, p1, offset) => '_' + s.charAt(0)
        ).toLowerCase(),
      example:
`aaaBbbCcc
aaaBbbCcc
`
    },
    {
      id: 2,
      name: 'csv format',
      convert: this.formatCsv,
      example:
`header1,header2,   header3
1,2,    3
11,22,    33
1234567, 1, 2
12345678, 1, 2`
    }
  ];

  constructor() {
    const action = this.actions[0];
    this.actionControl.setValue(action.id);
    this.text.setValue(action.example);
  }

  ngOnInit() {
  }

  changeAction() {
    this.text.setValue(this.actions[this.actionControl.value].example);
  }

  convert() {
    this.text.setValue(this.actions[this.actionControl.value].convert(this.text.value));
  }

  private formatCsv(text: string) {
    const lines = text.split(/\r\n|\r|\n/);
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
    return formatted;
  }
}
