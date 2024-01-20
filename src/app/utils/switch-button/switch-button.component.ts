import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-switch-button',
  standalone: true,
  imports: [],
  templateUrl: './switch-button.component.html',
  styleUrl: './switch-button.component.scss',
})
export class SwitchButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('switchContainer') switchContainer!: ElementRef;
  @ViewChild('switch') switch!: ElementRef;
  isOn: boolean = false;
  @Input() onStateBgColor: string = '#088f8f';
  @Input() offStateBgColor = 'grey';
  @Output() buttonStateEvent = new EventEmitter<boolean>(this.isOn);

  private switchContainerNativeElement!: HTMLElement | null;
  private switchNativeElement!: HTMLInputElement | null;

  ngOnInit(): void {
    this.buttonStateEvent.emit(this.isOn);
  }

  toggleButton() {
    if (
      this.switchContainerNativeElement &&
      this.switchContainerNativeElement
    ) {
      this.isOn = !this.isOn;

      if (this.isOn) {
        this.switchContainerNativeElement.style.justifyContent = 'flex-end';
        this.switchContainerNativeElement.style.backgroundColor =
          this.onStateBgColor;
        this.buttonStateEvent.emit(this.isOn);
      } else {
        this.switchContainerNativeElement.style.justifyContent = 'flex-start';
        this.switchContainerNativeElement.style.backgroundColor =
          this.offStateBgColor;
        this.buttonStateEvent.emit(this.isOn);
      }
    }
  }

  ngAfterViewInit(): void {
    this.switchContainerNativeElement = this.switchContainer.nativeElement;
    this.switchNativeElement = this.switchContainer.nativeElement;
    this.defaultBgColorInit();
  }

  defaultBgColorInit() {
    if (this.switchContainerNativeElement) {
      if (this.isOn) {
        this.switchContainerNativeElement.style.backgroundColor =
          this.onStateBgColor;
      } else {
        this.switchContainerNativeElement.style.backgroundColor =
          this.offStateBgColor;
      }
    }
  }
}
