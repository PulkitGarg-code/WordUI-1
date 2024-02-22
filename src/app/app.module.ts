import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PuzzleSolverService } from './shared/services/puzzle-solver.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TopNavComponent } from './top-nav/top-nav.component';
import {
  HomeComponent,
  InputComponent,
  ResultComponent,
  TranslationsComponent,
} from './Home';
import { PuzzleSharedService } from './shared/services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    ResultComponent,
    TranslationsComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [PuzzleSolverService, PuzzleSharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
