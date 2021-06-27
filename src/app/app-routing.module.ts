import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MydataComponent } from './mydata/mydata.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [{path:"appointment",component:AppointmentComponent},{
  path:"service",component:MainComponent,
},
{path:"adminData",component:AdminComponent},
{path:"mydata",component:MydataComponent},
{path:'',component:HomeComponent},
{path:"contact",component:ContactComponent},
{path:'feedback',component:FeedbackComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
