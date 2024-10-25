import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatChipEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit, OnChanges {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() applyColor!: boolean;
  
  @Input() chipValues: any[] = [];
  @Output() chipValueChange = new EventEmitter<any[]>();
  formGroup: FormGroup = new FormGroup({
    chipArray: new FormArray<any>([])
  });
  inputValue: string = '';

  get chipArray(): FormArray<any> {
    const array = this.formGroup.get('chipArray') as any;
    if (array) {
      return array;
    } else {
      return new FormArray<any>([])
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(changes).includes('chipValues')) {
      this.chipValues = (this.chipValues || [])?.map(value => ({
        color: this.generateColor(), value
      }));
    }
  }

  ngOnInit(): void {
  }

  setInputValue(event: any) {
    this.inputValue = event?.target?.value || '';
  }

  addChip() {
    
    if (this.inputValue.trim()) {
      this.chipArray.push(new FormControl({color: this.generateColor(), value: this.inputValue.trim()}))
      this.inputValue = '';
    }
  }

  removeKeyword(keyword: any) {
    const index = (this.chipArray?.getRawValue() || [])?.findIndex((x) => x.value === keyword.value);
    if (index !== -1) {
      this.chipArray.removeAt(index);
    }
  }

  saveChips() {
    this.chipValues = JSON.parse(JSON.stringify(this.chipArray?.value || []));
    this.chipValueChange.emit(this.chipValues.map(x => x.value));
    // this.formGroup.reset();
    this.chipArray.clear();
    this.inputValue = ''
  }

  generateColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color + '40';
  }
}
