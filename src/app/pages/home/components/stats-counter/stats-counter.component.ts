import { Component } from '@angular/core';

@Component({
	selector: 'app-stats-counter',
	templateUrl: './stats-counter.component.html',
	styleUrls: ['./stats-counter.component.scss']
})
export class StatsCounterComponent {
	counts: any;
	stats: number[] = [0, 0, 0, 0];
	targetValues: number[] = [300, 250, 280, 265];

	ngOnInit() {
		this.startCounters();
	}

	startCounters() {
		this.counts = setInterval(() => this.updateCounters(), 5);
	}

	updateCounters() {
		let allCountersReachedTarget = true;

		for (let i = 0; i < this.stats.length; i++) {
			if (this.stats[i] < this.targetValues[i]) {
				this.stats[i]++;
				allCountersReachedTarget = false;
			}

			let count = document.getElementById(`counter${i + 1}`);
			if (count !== null) {
				count.innerHTML = `+${this.stats[i]}`; // Add "+" sign before the counter value
			}
		}

		if (allCountersReachedTarget) {
			clearInterval(this.counts);
		}
	}
}
