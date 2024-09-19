import { Component } from '@angular/core';
import {User} from "../Shared/Modules/user";
import {NgForOf} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgForOf, NgForOf, StudentDetailComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
//Placeholder for the table
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: User[] =
    [
      {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
      {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
    ];
  // catch the onclick event form html
  selectedStudent?: User;
  //function to display the student
  selectStudent(student: User): void {
    this.selectedStudent = student;
  }

}
