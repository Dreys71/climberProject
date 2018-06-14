import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterFormPage } from './character-form';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    CharacterFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterFormPage),
    PipesModule
  ],
})
export class CharacterFormPageModule {}
