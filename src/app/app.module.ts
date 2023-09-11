import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SocialMediaIconComponent } from './components/social-media-icon/social-media-icon.component';
import { TextAnimateComponent } from './components/text-animate/text-animate.component';
import { EducationContentCardComponent } from './components/education-content-card/education-content-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    ButtonComponent,
    FooterComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    SectionTitleComponent,
    SocialMediaComponent,
    SocialMediaIconComponent,
    TextAnimateComponent,
    EducationContentCardComponent,
    ProgressBarComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
