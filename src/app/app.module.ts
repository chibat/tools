import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule, MatDialogModule, MatTooltipModule, MatMenuModule, MatRadioModule, MatSelectModule, MatButtonModule,
  MatInputModule, MatSnackBarModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatProgressBarModule,
  MatOptionModule, MatFormFieldModule, MatTableModule, MAT_SELECT_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CsvFormatComponent } from './csv-format/csv-format.component';
import { TopComponent } from './top/top.component';
import { TextConverterComponent } from './text-converter/text-converter.component';


@NgModule({
  declarations: [
    AppComponent,
    CsvFormatComponent,
    TopComponent,
    TextConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatOptionModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
