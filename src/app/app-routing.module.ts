import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ServesComponent } from './serves/serves.component';
import { ToolsComponent } from './tools/tools.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {
      path:"",
      redirectTo:'home',
      pathMatch:'full'
  },
  {
    path:"home",
    component:HeroComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"resume",
    component:ResumeComponent
  },
  {
    path:"service",
    component:ServesComponent
  },
  {
    path:"protfilo",
    component:ToolsComponent
  },
  {
    path:"contact",
    component:ContactComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
