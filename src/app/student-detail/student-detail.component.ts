import { Component, Input } from '@angular/core';
import {User} from "../Shared/Modules/user"

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {
  //Input decorator mark a property as input
  // receive data from parent
@Input() student?: User;
}
