import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImagePanelComponent } from './main-image-panel.component';

describe('MainImagePanelComponent', () => {
  let component: MainImagePanelComponent;
  let fixture: ComponentFixture<MainImagePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainImagePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainImagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
