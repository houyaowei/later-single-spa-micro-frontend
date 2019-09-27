import { Inject, NgModule, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgReduxModule, NgRedux } from "@angular-redux/store";
import { APP_BASE_HREF } from "@angular/common";
import { App } from "./app.component";
import { Subroute1 } from "./subroute1.component";
import { Subroute2 } from "./subroute2.component";
import { IAppState, CounterActions } from "./store";
import { Globals } from "./globals.service";

const appRoutes: Routes = [
  {
    path: "sr1",
    component: Subroute1
  },
  {
    path: "sr2",
    component: Subroute2
  }
];
// enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    }),
    NgReduxModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    },
    CounterActions,
    Globals
  ],
  declarations: [App, Subroute1, Subroute2],
  bootstrap: [App]
})
export class MainModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private globals: Globals,
    @Inject("localStoreRef") private localStoreRef: any,
    @Inject("globalEventDispatcherRef") private globalEventDispatcherRef: any
  ) {
    this.ngRedux.provideStore(localStoreRef);
    this.globals.globalEventDistributor = globalEventDispatcherRef;
  }
}
