import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-converter',
  templateUrl: './text-converter.component.html',
  styleUrls: ['./text-converter.component.css']
})
export class TextConverterComponent implements OnInit {

  text = new FormControl(
`aaa_bbb_ccc
AAA_BBB_CCC
`
  );

  constructor() { }

  ngOnInit() {
  }

  convert() {
    this.text.setValue(this.snakeToCamel(this.text.value));
  }

  private snakeToCamel(text: string){
    return text.toLowerCase().replace(/_./g,
      function(s) {
        return s.charAt(1).toUpperCase();
      }
    );
  }

  private camelToSnake(text: string){
    return text.replace(/([A-Z])/g,
      function(s) {
        return '_' + s.charAt(0).toLowerCase();
      }
    );
  }
}
