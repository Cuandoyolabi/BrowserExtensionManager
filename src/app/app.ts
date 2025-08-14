import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./home-page/components/home-page/home-page.component";
import { MainLayaoutComponent } from "./home-page/components/mainLayaout/mainLayaout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent, MainLayaoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'BrowserExtensionManager';
}
