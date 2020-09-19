import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RatingType } from 'sample-rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  customRatingColors = {
    [RatingType.POOR]: 'pink',
    [RatingType.AVERAGE]: 'yellow',
    [RatingType.GOOD]: 'red',
    [RatingType.AMAZING]: 'purple',
  }

  customIcons = {
    filled: 'fa fa-heart',
    empty: 'fa fa-heart-o'
  }

  rating = 0;

  ratingControl = new FormControl({ value: 3, disabled: true }, [Validators.required]);

  onRatingChange(rating: number) {
    console.log('Updated Rating : ', rating);
  }

}
