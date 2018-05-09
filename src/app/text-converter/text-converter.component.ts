import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-converter',
  templateUrl: './text-converter.component.html',
  styleUrls: ['./text-converter.component.css']
})
export class TextConverterComponent implements OnInit {

  text = new FormControl();

  readonly snakeExample =
`aaa_bbb_ccc
AAA_BBB_CCC
`;

  readonly camelExample = 
`aaaBbbCcc
aaaBbbCcc
`;

  constructor() {
    this.text.setValue(this.camelExample);
  }

  ngOnInit() {
  }

  convert() {
    this.text.setValue(this.camelToSnake(this.text.value));
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
      function(s, p1, offset) {
        return '_' + s.charAt(0);
      }
    ).toLowerCase();
  }
}
