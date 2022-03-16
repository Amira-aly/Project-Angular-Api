import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllpostsComponent } from './posts/allposts/allposts.component';
import { CreatepostComponent } from './posts/createpost/createpost.component';
import { UpdatepostComponent } from './posts/updatepost/updatepost.component';
import { ViewpostComponent } from './posts/viewpost/viewpost.component';
import { NotfondComponent } from './sharedUi/notfond/notfond.component';
import { AlltasksComponent } from './tasks/alltasks/alltasks.component';
import { CreatetaskComponent } from './tasks/createtask/createtask.component';
import { UpdatetaskComponent } from './tasks/updatetask/updatetask.component';
import { ViewtaskComponent } from './tasks/viewtask/viewtask.component';
import { AllusersComponent } from './users/allusers/allusers.component';
import { CreateuserComponent } from './users/createuser/createuser.component';
import { UpdateuserComponent } from './users/updateuser/updateuser.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';

const routes: Routes = [
  {path: "dashboard", component:DashboardComponent},
  {path: "", component:DashboardComponent},
  {path: "all_posts", component:AllpostsComponent},
  {path: "create_post", component:CreatepostComponent},
  {path: "update_post/:id", component:UpdatepostComponent},
  {path: "view_post/:id", component:ViewpostComponent},
  {path: "all_tasks", component:AlltasksComponent},
  {path: "create_task", component:CreatetaskComponent},
  {path: "update_task/:id", component:UpdatetaskComponent},
  {path: "view_task/:id", component:ViewtaskComponent},
  {path: "all_users", component:AllusersComponent},
  {path: "create_user", component:CreateuserComponent},
  {path: "update_user/:id", component:UpdateuserComponent},
  {path: "view_user/:id", component:ViewuserComponent},
  {path: "**", component:NotfondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
