import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './sharedUi/nav/nav.component';
import { NotfondComponent } from './sharedUi/notfond/notfond.component';
import { AllusersComponent } from './users/allusers/allusers.component';
import { CreateuserComponent } from './users/createuser/createuser.component';
import { AllpostsComponent } from './posts/allposts/allposts.component';
import { CreatepostComponent } from './posts/createpost/createpost.component';
import { AlltasksComponent } from './tasks/alltasks/alltasks.component';
import { CreatetaskComponent } from './tasks/createtask/createtask.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';
import { UpdatepostComponent } from './posts/updatepost/updatepost.component';
import { ViewpostComponent } from './posts/viewpost/viewpost.component';
import { UpdatetaskComponent } from './tasks/updatetask/updatetask.component';
import { ViewtaskComponent } from './tasks/viewtask/viewtask.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotfondComponent,
    AllusersComponent,
    CreateuserComponent,
    AllpostsComponent,
    CreatepostComponent,
    AlltasksComponent,
    CreatetaskComponent,
    UpdateuserComponent,
    ViewuserComponent,
    UpdatepostComponent,
    ViewpostComponent,
    UpdatetaskComponent,
    ViewtaskComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
