import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { DependeComponent } from './depende/depende.component';
import { MotherComponent } from './mother/mother.component';
import { SonComponent } from './son/son.component';
import { DemoComponent } from './demo/demo.component';
import { HostlistnerDemoComponent } from './hostlistner-demo/hostlistner-demo.component';
import { RainbowDirective } from './rainbow.directive';
import { AppHighlightDirective } from './app-highlight.directive';
import { ViewparentComponent } from './viewparent/viewparent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentproparentComponent } from './contentproparent/contentproparent.component';
import { ContentprochildComponent } from './contentprochild/contentprochild.component';
import { ContproparentComponent } from './contproparent/contproparent.component';
import { ContprochildComponent } from './contprochild/contprochild.component';
import { RxjsdemoComponent } from './rxjsdemo/rxjsdemo.component';
import { HttpinterdemoComponent } from './httpinterdemo/httpinterdemo.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicInterceptor } from './basic.interceptor';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AnotherhomeComponent } from './anotherhome/anotherhome.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ParentComponent,
    ChildComponent,
    MainComponent,
    DependeComponent,
    MotherComponent,
    SonComponent,
    DemoComponent,
    HostlistnerDemoComponent,
    RainbowDirective,
    AppHighlightDirective,
    ViewparentComponent,
    ViewchildComponent,
    ContentproparentComponent,
    ContentprochildComponent,
    ContproparentComponent,
    ContprochildComponent,
    RxjsdemoComponent,
    HttpinterdemoComponent,
    LogoutComponent,
    HomeComponent,
    AboutComponent,
    AnotherhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
