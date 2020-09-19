import { ModuleWithProviders, NgModule } from '@angular/core';
import { RatingConfig, SampleRatingComponent } from './sample-rating.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SampleRatingComponent],
  imports: [
    CommonModule
  ],
  exports: [SampleRatingComponent]
})
export class SampleRatingModule {
  static forRoot(config: RatingConfig | null) : ModuleWithProviders<SampleRatingModule> {
    return {
      ngModule: SampleRatingModule,
      providers: [
        {provide: RatingConfig, useValue : config}
      ] 
    }
  }  
}
