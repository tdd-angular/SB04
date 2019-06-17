import { Component, OnChanges, ChangeDetectorRef, Input, ViewEncapsulation, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-third',
  template: `<div>Third Component  <ng-container #container></ng-container></div>`,
  styleUrls: ['./third.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ThirdComponent implements OnChanges {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input() view: any;

  constructor(public detector: ChangeDetectorRef) { }

  ngOnChanges(changes: any) {
    this.load();
  }

  public load() {
    if (this.view) {
      this.container.insert(this.view, 0);
    }
  }
}
