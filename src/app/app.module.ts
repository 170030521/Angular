import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeethaComponent } from './geetha/geetha.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { ProductComponent } from './product/product.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesPipe } from './pipes.pipe';
import { MypipesPipe } from './mypipes.pipe';

import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { HttpClientModule } from '@angular/common/http';



import { NgcolorDirective } from './directive/ngcolor.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Java1Component } from './java1/java1.component';
import { Web1Component } from './web1/web1.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { OopsComponent } from './oops/oops.component';
import { SpringComponent } from './spring/spring.component';
import { MultithreadingComponent } from './multithreading/multithreading.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { AngularComponent } from './angular/angular.component';




@NgModule({
  declarations: [
    AppComponent,
    GeethaComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StructDirectivesComponent,
    CalculatorComponent,
    
    ProductComponent,
         PipesComponent,
         PipesPipe,
         MypipesPipe,
        
         SearchPipe,
                  SortPipe,
                  NgcolorDirective,
                  ParentComponent,
                  ChildComponent,
                  Calculator1Component,
                  FirstComponent,
                  SecondComponent,
                  WebComponent,
                  JavaComponent,
                  routingComponents,
                  Sibling1Component,
                  Sibling2Component,
                  Java1Component,
                  Web1Component,
                  ReactFormsComponent,
                  OopsComponent,
                  SpringComponent,
                  MultithreadingComponent,
                  HtmlComponent,
                  CssComponent,
                  AngularComponent,
                 

                 
   
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,TechRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
