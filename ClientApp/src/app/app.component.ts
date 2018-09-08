import { Component } from '@angular/core';
import {SampleDataClient} from './app.generated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // register the SampleDataClient with dependency injection.
  providers: [SampleDataClient],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
