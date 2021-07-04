import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeethaComponent } from './geetha/geetha.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
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
                 
   
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
