import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
})
export class AppComponent {
    constructor(){
		 console.log("Hauptkomponente initialisiert!");
	};
}