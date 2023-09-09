import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
  baseUrl = environment.apiUrl;
  validationErrors: string[] = [];

  constructor(private https: HttpClient) { }

  get404Error() {
    this.https.get(this.baseUrl + "Product/42")
      .subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      })
  }

  get500Error() {
    this.https.get(this.baseUrl + "Buggy/servererror")
      .subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      })
  }
  get400Error() {
    this.https.get(this.baseUrl + "Buggy/badrequest")
      .subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      })
  }

  get400ValidationError() {
    this.https.get(this.baseUrl + "Product/lel")
      .subscribe({
        next: response => console.log(response),
        error: error => {
          console.log(error);
          this.validationErrors = error.errors;
        }
      })
  }

}
