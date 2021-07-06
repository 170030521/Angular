import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Java1Component } from '../java1/java1.component';
import { Web1Component } from '../web1/web1.component';
import { OopsComponent } from '../oops/oops.component';
import { SpringComponent } from '../spring/spring.component';
import { MultithreadingComponent } from '../multithreading/multithreading.component';
import { WebComponent } from '../web/web.component';
import { HtmlComponent } from '../html/html.component';
import { CssComponent } from '../css/css.component';
import { AngularComponent } from '../angular/angular.component';

const routes:Routes = [
  {path:'java', component:Java1Component,

  children:[

    {path:'oops', component:OopsComponent},

    {path:'spring', component:SpringComponent },

    {path:'multithreading', component:MultithreadingComponent },

  ] },

  {path:'web', component:Web1Component,

children:[

  {path:'html', component:HtmlComponent },

  {path:'css', component:CssComponent },

  {path:'angular', component:AngularComponent },

] },
  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [Web1Component,Java1Component]
