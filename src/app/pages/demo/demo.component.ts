import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { config } from './formConfig';
import { Subscription, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  public formConfig: FormGroup = config;
  public valeur: Observable<number>;
  private subscriptions: Subscription[] = [];

  constructor() {

  }

  ngOnInit() {
    const values = this.formConfig.value;
    this.valeur = combineLatest(
      this.formConfig.controls["superficie"].valueChanges,
      this.formConfig.controls["indoorQuality"].valueChanges,
      this.formConfig.controls["type"].valueChanges,
      this.formConfig.controls["noisi Street"].valueChanges,
      this.formConfig.controls["terrasse"].valueChanges,
    ).pipe(
      map(([superficie, indoorQuality, type, noisyStreet, terasse]) => {
        return superficie * 30 + indoorQuality * 10;
      }));
    this.formConfig.reset(values);
  }

  soumettre() {
    console.log(this.formConfig);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
