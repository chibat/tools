import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvFormatComponent } from './csv-format.component';

describe('CsvFormatComponent', () => {
  let component: CsvFormatComponent;
  let fixture: ComponentFixture<CsvFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
