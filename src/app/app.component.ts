import { Component, ViewContainerRef, ViewRef, TemplateRef, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  oldView: ViewRef;
  view: ViewRef;

  @ViewChild('tpl', { read: TemplateRef }) tpl: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(public detector: ChangeDetectorRef) { }

  open() {
    this.oldView = this.view;
    console.log('open');
    console.log(this.container.element, this.oldView);

    this.detector.detectChanges();
  }

  close() {
    this.container.insert(this.view, 0);
    this.oldView = undefined;
    this.detector.detectChanges();
  }

  ngOnInit() {
    this.view = this.container.createEmbeddedView(this.tpl);
  }
}
