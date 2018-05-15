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
}
