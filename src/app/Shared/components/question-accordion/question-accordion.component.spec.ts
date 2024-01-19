import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAccordionComponent } from './question-accordion.component';

describe('QuestionAccordionComponent', () => {
  let component: QuestionAccordionComponent;
  let fixture: ComponentFixture<QuestionAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
