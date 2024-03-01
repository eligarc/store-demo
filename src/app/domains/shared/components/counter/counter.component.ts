
import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // BEFORE RENDER
    this.duration = 12;
    console.log('contructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // BEFORE AND DURING RENDER / MOUNTED
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSometing();
    }
  }

  ngOnInit() {
    // AFTER RENDER
    // UNA VEZ
    // ASYNC, THEN, SUBS

    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);

    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update(stateprev => stateprev + 1);
    }, 1000)
  }

  ngAfterViewInit() {
    // AFTER RENDER
    // CHILD WAS RENDER
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSometing() {
    console.log('Change duration');
  }
}
