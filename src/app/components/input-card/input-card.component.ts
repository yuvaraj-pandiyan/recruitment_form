import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() chipValues: string[] = [];
  @Output() chipValueChange = new EventEmitter<string[]>();
  formControl = new FormControl([]);
  inputValue!: string;
  
  ngOnInit(): void {

  }

  addChip(value: MatChipInputEvent) {
    const existingValue: any = this.formControl.value || [];
    const newValue: never[] = existingValue.concat([value.value.trim()]);
    this.formControl.setValue(newValue);
    this.inputValue = '';
  }

  removeKeyword(keyword: MatChipEvent) {
    const existingValue = this.formControl.value || [];
    this.formControl.setValue(existingValue.filter(x => x !== keyword));
  }

  saveChips() {
    this.chipValues = (this.formControl.value || []) as string[];
    this.formControl.setValue([]);
    this.chipValueChange.emit(this.chipValues);
  }
}
