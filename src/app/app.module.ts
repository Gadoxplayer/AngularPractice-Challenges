import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Loading } from './loading/loading.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { InputUsernameComponent } from './input-username/input-username.component';
import { FormsModule } from '@angular/forms';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameControlProfComponent } from './game-control-prof/game-control-prof.component';
import { OddProfComponent } from './odd-prof/odd-prof.component';
import { EvenProfComponent } from './even-prof/even-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    Loading,
    InputUsernameComponent,
    DisplayDetailsComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameControlProfComponent,
    OddProfComponent,
    EvenProfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
