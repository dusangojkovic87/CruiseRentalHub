import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FrequentQuestion } from '../../../models/FrequentQuestion';

@Component({
  selector: 'app-question-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-accordion.component.html',
  styleUrl: './question-accordion.component.scss',
})
export class QuestionAccordionComponent {
  isAnswerVisible: boolean = false;
  @Input() question!: FrequentQuestion;

  toggleAnswer() {
    this.isAnswerVisible = !this.isAnswerVisible;
    console.log(this.isAnswerVisible);
  }
}
