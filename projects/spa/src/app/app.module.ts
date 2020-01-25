import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogOverviewExampleDialogComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
