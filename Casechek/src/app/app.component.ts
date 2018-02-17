import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
	moduleId: module.id,
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  	title = ' to My Completed Assignment App';

	link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=dogs'; 
	//link2 = 'https://data.cityofchicago.org/resource/cwig-ma7x.json';//
	http: Http; 
	giphies = [];

	constructor(http: Http) { 
		this.http = http; 
	}

	performSearch(searchTerm: HTMLInputElement): void { 
		var apiLink = this.link + searchTerm.value; 
		this.http.request(apiLink) 

			.subscribe((res: Response) => { 
			this.giphies = res.json().data;
               console.log(this.giphies); 
		});
	}
	checkCity(searchTerm: HTMLInputElement): void{
		var apiLink2 = this.link;
		this.http.request(apiLink2)

			.subscribe((res: Response) => {
			//this.giphies = res.json.data;
				console.log(this);
		});
	}

}
