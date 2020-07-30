import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { GreetComponent } from "./greet/greet.component";
import { HighlightDirective } from "./highlight.directive";

const routes: Routes = [
  {
    path: "customer-list",
    loadChildren: () =>
      import("./customer-list/customer-list.module").then(
        (m) => m.CustomerListModule
      ),
  },
  {
    path: "customer-details",
    loadChildren: () =>
      import("./customer-details/customer-details.module").then(
        (m) => m.CustomerDetailsModule
      ),
  },
  { path: "", redirectTo: "customer-list", pathMatch: "full" },
  { path: "*", redirectTo: "customer-list", pathMatch: "full" },
];
@NgModule({
  declarations: [AppComponent, GreetComponent, HighlightDirective],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
