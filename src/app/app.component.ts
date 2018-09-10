import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'mdbootstrap-starter';

  models: DummyModel[];
  cols: any[] = [];
  refreshing: boolean;

  constructor() {
    this.refreshing = false;
    this.models = [];
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'category', header: 'Category' },
      { field: 'dummy', header: 'Dummy' }
    ];

    const model = new DummyModel();
    model.id = 1;
    model.category = 'a';
    model.dummy = 'b';
    this.models = [...this.models, model];
  }
}

class DummyModel {
  id: number;
  category: string;
  dummy: string;
}
