import { Component, forwardRef, Inject } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState, CounterActions } from "./store";
import { Globals } from "./globals.service";
import * as angularImg from "../assets/angular-logo.png";

@Component({
  selector: "app5",
  template: `
    <div style="margin-top: 100px;">
      <img [src]="angularImg" style="width: 100px;" /> <br />
      Angular 6 project
    </div>
    <br />

    <div>
      <b> Count: {{ count }}</b
      ><br /><br />
      <button (click)="increment()">本地增加</button>&nbsp;

      <button (click)="decrement()">本地减少</button>&nbsp; <br />

      <button (click)="globalIncrement()">全局增加</button>

      <button (click)="globalDecrement()">全局减少</button> <br />
    </div>

    <br />
    <a [routerLink]="['/sr1']" routerLinkActive="active">Angular route 1</a
    >&nbsp;
    <a [routerLink]="['/sr2']" routerLinkActive="active">Angular route 2</a>

    <router-outlet></router-outlet>
  `
})
export class App {
  count: number;
  angularImg: any;
  subscription;

  constructor(
    @Inject(forwardRef(() => NgRedux)) private ngRedux: NgRedux<IAppState>,
    @Inject(forwardRef(() => CounterActions)) private actions: CounterActions,
    @Inject(forwardRef(() => Globals)) private globals: Globals
  ) {
    this.subscription = ngRedux
      .select<number>("count")
      .subscribe(newCount => (this.count = newCount));
    this.angularImg = angularImg;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

  globalIncrement() {
    this.globals.globalEventDistributor.dispatch(this.actions.increment());
  }

  globalDecrement() {
    this.globals.globalEventDistributor.dispatch(this.actions.decrement());
  }
}
