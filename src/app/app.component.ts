import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { questions } from './questions';
import { Validators } from '@angular/forms';

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
  isAnswerCorrect = false;
  isAnswerIncorrect = false;
  isAllCorrect = false;

  explanationUrl = 'https://github.com/lydiahallie/javascript-questions';

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        1: ['', Validators.required],
        2: ['', Validators.required],
        3: ['', Validators.required],
        4: ['', Validators.required],
      },
      { validators: this.isAllCorrectValidator }
    );

    this.form.valueChanges.subscribe((formValue) => {
      this.isAnswerCorrect = false;
      this.isAnswerIncorrect = false;
    });
  }

  onCheck(id: string) {
    // check the answer
    const control = this.form.get(id);
    const value = control.value;
    const question = questions.find((q) => q.id === id);

    if (value === question.correctAnswer) {
      this.isAnswerCorrect = true;
      this.isAnswerIncorrect = false;
      this.showConfetti = true;
      setTimeout(() => {
        this.showConfetti = false;
      }, 2000);
    } else {
      this.isAnswerCorrect = false;
      this.isAnswerIncorrect = true;
    }
  }

  onSubmit() {
    this.showConfetti = true;
    this.isAllCorrect = true;
  }

  private isAllCorrectValidator(form: FormGroup): ValidationErrors | null {
    const controls = Object.entries(form.controls);
    const isAllCorrect = controls.every(([id, control]) => {
      const question = questions.find((q) => q.id === id);
      const isCorrect = question.correctAnswer === control.value;
      return isCorrect;
    });

    return isAllCorrect
      ? null
      : {
          isAllCorrect: {
            value: 'Not all questions are answered correctly',
          },
        };
  }
}
