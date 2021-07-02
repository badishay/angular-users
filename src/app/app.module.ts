import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { usersComponent } from './components/users/users.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { userDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here
import {MatTooltipModule} from '@angular/material/tooltip';
// import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    usersComponent,
    userDetailsComponent,
    UserFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
