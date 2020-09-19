import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingType, SampleRatingModule } from 'sample-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SampleRatingModule
    // .forRoot({
    //   ratingMessage: {
    //     [RatingType.POOR]: 'Fail',
    //     [RatingType.AVERAGE]: 'Average Result',
    //     [RatingType.GOOD]: 'Good Result',
    //     [RatingType.AMAZING]: 'Amazing Result',
    //   },
    //   ratingIcons: {
    //     filled: 'fa fa-thumbs-up',
    //     empty: 'fa fa-thumbs-o-up'
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
