import { Component, EventEmitter, forwardRef, Input, OnInit, Optional, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum RatingType {
  POOR, AVERAGE, GOOD, AMAZING
}

export class RatingConfig {
  colors?: {
    [key: number]: string
  };
  ratingMessage?: {
    [key: number]: string
  };
  ratingIcons?: {
    filled: string;
    empty: string;
  }
}

@Component({
  selector: 'nd-sample-rating',
  template: `
    <div class="rating" [ngClass]="{'disabled': disabled}">
      <div class="rating-icons">
      <i *ngFor="let r of range;" [style.fontSize]="size" [style.color]="colors[ratingType]" 
      [ngClass]="(r <= rating) ? ratingIcons.filled : ratingIcons.empty" aria-hidden="true" 
      (click)="updateRating(r)"
      ></i>
      </div>
      <div class="rating-message" *ngIf="!hideRatingMessage && rating">
        {{ratingMessages[ratingType]}} !!!
      </div>
    </div>
  `,
  styles: [
    `
      .rating.disabled i{
        opacity: 0.5;
        pointer-events: none;
      }

      i{
        transition: all 200ms;
        margin: 5px;
      }

      .rating-message{
        font-size: 20px;
      }

      i:hover{
        transform: scale(1.2, 1.2)
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SampleRatingComponent), multi: true
    }
  ]
})
export class SampleRatingComponent implements OnInit, ControlValueAccessor {

  @Input() ratingIcons = {
    filled: 'fa fa-star',
    empty: 'fa fa-star-o',
  }

  @Input() size = '30px';

  @Input() colors = {
    [RatingType.POOR]: 'red',
    [RatingType.AVERAGE]: 'orange',
    [RatingType.GOOD]: 'greenyellow',
    [RatingType.AMAZING]: 'green',
  };

  @Input() ratingMessages = {
    [RatingType.POOR]: 'Poor',
    [RatingType.AVERAGE]: 'Average',
    [RatingType.GOOD]: 'Good',
    [RatingType.AMAZING]: 'Amazing'
  }

  @Input() hideRatingMessage = false;

  @Input() maxRating = 5;

  @Input() rating: number;

  @Input() disabled: boolean;

  @Output() ratingChanged = new EventEmitter<number>();

  ratingType: RatingType;

  range: number[];

  onChange = (data: any) => { };
  onTouched = () => { }

  constructor(@Optional() globalConfig: RatingConfig) {
    if (globalConfig?.ratingMessage) {
      this.ratingMessages = globalConfig.ratingMessage as any;
    }
    if (globalConfig?.ratingIcons) {
      this.ratingIcons = globalConfig.ratingIcons;
    }
  }

  writeValue(value: number): void {
    this.updateRating(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    this.updateRange();
    this.calculateRatingType();
  }

  updateRange() {
    this.range = Array(this.maxRating).fill(0).map((a, index) => index + 1);
  }

  updateRating(i: number) {
    this.rating = i;
    this.calculateRatingType();
    this.onChange(this.rating);
    this.onTouched();
    this.ratingChanged.emit(this.rating);
  }

  calculateRatingType() {
    if (!this.rating) {
      this.ratingType = undefined;
      return;
    }

    let percentage = this.rating * 100 / this.maxRating;
    if (percentage <= 25) {
      this.ratingType = RatingType.POOR;
    } else if (percentage <= 60) {
      this.ratingType = RatingType.AVERAGE;
    } else if (percentage <= 80) {
      this.ratingType = RatingType.GOOD
    } else {
      this.ratingType = RatingType.AMAZING
    }
  }

}
