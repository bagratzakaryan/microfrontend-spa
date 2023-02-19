import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() reactValue = '';
  inputValue = '';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onKey(event: any): void {
    this.inputValue = event.target.value;
    this.document.dispatchEvent(
      new CustomEvent('angular-input-event', { detail: event.target.value })
    );
  }
}
