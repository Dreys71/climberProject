import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TowerPage } from './tower';
import { ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    TowerPage,
  ],
  imports: [
    IonicPageModule.forChild(TowerPage),
    ComponentsModule
  ],
})
export class TowerPageModule {}
