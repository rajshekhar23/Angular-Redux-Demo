import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TotalCountComponent } from 'app/total-count/total-count.component';
import { SharedTableComponent } from 'app/sharedtable/sharedtable.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TotalCountComponent, SharedTableComponent],
  exports: [CommonModule, RouterModule, TotalCountComponent, SharedTableComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
