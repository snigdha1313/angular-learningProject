import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-demo";
  greetingMessage: string;
  name: string = "Snigdha";

  handleOnGreetEvent(message: string): void {
    this.greetingMessage = message;
  }
}
