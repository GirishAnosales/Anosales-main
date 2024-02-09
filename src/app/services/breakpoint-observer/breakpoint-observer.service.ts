import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  isXSmall(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.XSmall)
      .pipe(map(result => result.matches));
  }

  isSmall(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Small)
      .pipe(map(result => result.matches));
  }

  isMedium(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Medium)
      .pipe(map(result => result.matches));
  }

  isLarge(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.Large)
      .pipe(map(result => result.matches));
  }
  
  isXLarge(): Observable<boolean> {
    return this.breakpointObserver.observe(Breakpoints.XLarge)
      .pipe(map(result => result.matches));
  }
}