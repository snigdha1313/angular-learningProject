import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  constructor(
    private _router: Router,
  ){}

  title = "angular-demo";
  greetingMessage: string;
  name: string = "Snigdha";

  handleOnGreetEvent(message: string): void {
    this.greetingMessage = message;
  }

  navigateTo(targetPath: string): void {
    this._router.navigate([targetPath])
  }
}
