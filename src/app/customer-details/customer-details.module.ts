import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomrDetailsComponent } from "./customr-details.component";

const routes: Routes = [{ path: '', component: CustomrDetailsComponent }];

@NgModule({
  declarations: [CustomrDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CustomerDetailsModule {}
