import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  gender =['Male', 'Female', 'Other']

  model = new Character(0, 'Type a name', this.gender[0], 1);

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

  newCharacter() {
    this.model = new Character(0, '', '', 0);
  }

}
