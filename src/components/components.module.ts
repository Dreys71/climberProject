import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character';
import {IonicModule} from "ionic-angular";

@NgModule({
	declarations: [CharacterComponent],
	imports: [IonicModule],
	exports: [CharacterComponent]
})
export class ComponentsModule {}
