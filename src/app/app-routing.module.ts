import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
//import { NavigationComponent } from './navigation/navigation.component';
//import { SocialComponent } from './social/social.component';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home',component:HeaderComponent},
  {path:'About',component:IntroComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'Services',component:ContentComponent },
  {path:'Testimonals',component:TestimonalComponent},
  {path:'Clients',component:ClientsComponent},
  {path:'Pricing',component:PricingComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
