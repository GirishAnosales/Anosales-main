import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Anosales';

  constructor(private router: Router){
		// const navEndEvents = router.events.pipe(
		//   filter(event => event instanceof NavigationEnd),
		// );
		// navEndEvents.subscribe((event: NavigationEnd) => {
		//   gtag('config', 'AW-11454875150', {
		//     'page-path': event.urlAfterRedirects
		//   });
		// })
	
		  const routeChange = router.events
			.pipe(
			  filter((event): event is NavigationEnd => event instanceof NavigationEnd)
			)
			.subscribe(event => {
			  gtag('config', 'G-P9EKYTG38J', {
				'page-path': event.urlAfterRedirects
			  })
			});

			const routeChange1 = router.events
			.pipe(
			  filter((event): event is NavigationEnd => event instanceof NavigationEnd)
			)
			.subscribe(event => {
			  gtag('config', 'G-ZSGRGZ8K16', {
				'page-path': event.urlAfterRedirects
			  })
			});
		
	  }

}
