import { Component, OnInit } from '@angular/core';
import { FormData } from 'src/app/interface/form-data';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  myData: FormData[] = [];
  storageData!: any;

  ngOnInit(): void {
    this.storageData = window.localStorage.getItem('array');
    if (this.storageData) {
      this.myData = JSON.parse(this.storageData);
    }
  }

  collectData(data: FormData) {
    this.myData.push(data);
    window.localStorage.setItem('array', JSON.stringify(this.myData));
  }

  deleteData(n: number) {
    this.myData.splice(n, 1);
    window.localStorage.setItem('array', JSON.stringify(this.myData));
  }

  deleteAll() {
    window.localStorage.clear();
    this.storageData = window.localStorage.getItem('array');
    if (this.storageData == null) {
      this.myData = [];
    }
  }
}
