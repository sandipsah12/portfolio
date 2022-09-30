import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public form!: FormGroup;

  constructor(public formBuilder: FormBuilder, public http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: [''],
    });
  }

  public handleFormSubmit() {
    const { email, name, message } = this.form.value;

    if (!name.length || !email.length) {
      this.form.controls['name'].markAsTouched();
      this.form.controls['email'].markAsTouched();
      return;
    }

    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', name)
      .append('email', email)
      .append('message', message);

    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .subscribe({
        next: () => {
          console.log('Form successfully submitted');
          this.form.reset();
        },
        error: (error) => {
          console.log(error);
          this.form.reset();
        },
      });
  }
}
