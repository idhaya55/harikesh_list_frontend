import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListDashboardComponent } from './list-dashboard/list-dashboard.component';
import { ListComponent } from './list/list.component';
import { ListService } from './service/app.service';

@NgModule({
  declarations: [
    AppComponent,
    ListDashboardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
