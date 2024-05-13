import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css'],
})
export class CicloComponent
  implements
    OnInit,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }
  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    this.log('afterContentInit');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  ngAfterViewInit(): void {
    this.log('afterViewInit');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }
  log(log: string) {
    console.log(log);
  }
}
