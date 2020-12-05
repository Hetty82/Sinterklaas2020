import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { questions } from './questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sinterklaas2020';
  form: FormGroup;
  questions = questions;

  showConfetti = false;
  answerIsCorrect = false;
  answerIsInCorrect = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      1: ['', Validators.required],
    });

    this.form.valueChanges.subscribe((formValue) => {
      this.answerIsCorrect = false;
      this.answerIsInCorrect = false;
    });
  }

  onCheck(id: string) {
    // check the answer
    const control = this.form.get(id);
    const value = control.value;
    const question = questions.find((q) => q.id === id);

    if (value === question.correctAnswer) {
      this.answerIsCorrect = true;
      this.answerIsInCorrect = false;
      this.showConfetti = true;
      setTimeout(() => {
        this.showConfetti = false;
      }, 2000);
    } else {
      this.answerIsCorrect = false;
      this.answerIsInCorrect = true;
    }
  }

  onSubmit() {
    console.log('form submitted');
  }
}
