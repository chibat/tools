import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextConverterComponent } from './text-converter.component';

describe('TextConverterComponent', () => {
  let component: TextConverterComponent;
  let fixture: ComponentFixture<TextConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
