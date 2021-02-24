import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {

  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-warning'
  
  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass}`;
  }

  changeValue(value: number) {

    
    if (this.progress >= 100 && value >= 0) {
      this.valueChange.emit(100)
      return this.progress = 100;
    }
    if (this.progress <= 0 && value < 0) {
      this.valueChange.emit(0)
      return this.progress = 0;
    }
    this.progress = this.progress + value;
    this.valueChange.emit( this.progress )
  }

  onChange(newValue: number){

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.valueChange.emit( this.progress );
    
  }

}
