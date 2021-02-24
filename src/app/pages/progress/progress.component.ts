import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  @Input() progressBluebar: number = 25;
  @Input()  progressOrangebar: number = 50;

  get getBluebarPercentage() {
    return `${ this.progressBluebar }%`;
  }
  get getOrangePercentage() {
    return `${ this.progressOrangebar }%`;
  }

  handleValueChange(value: number){
    console.log('object', value)
  }

}
