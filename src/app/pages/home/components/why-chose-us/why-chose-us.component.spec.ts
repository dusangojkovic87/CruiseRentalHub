import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoseUsComponent } from './why-chose-us.component';

describe('WhyChoseUsComponent', () => {
  let component: WhyChoseUsComponent;
  let fixture: ComponentFixture<WhyChoseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChoseUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyChoseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
