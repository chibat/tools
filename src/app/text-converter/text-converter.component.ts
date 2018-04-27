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
  }
}
