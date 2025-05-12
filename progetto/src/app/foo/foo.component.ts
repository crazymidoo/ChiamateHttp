import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Foo } from '../model/foo.model';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  fooData! : Foo[];
  data!: Object;
  loading: boolean = false;
  o!: Observable<Object>; // oggetto che attende i dati - o porta la pizza
  o2!: Observable<Object>;
  oFoo! : Observable<Foo[]>;

  constructor(public http: HttpClient) { } //passare oggetto httpclient

  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1'); // chiamata get http
    this.o.subscribe(this.getData);
  }
  getData = (d: Object) => {
    this.data = new Object(d); // piatto data - pizza d
    this.loading = false;
  }


  makePost(): void {
    this.loading = true;
    let datiDaInviare = JSON.stringify({
      body: 'bar',
      title: 'foo',
      userId: 1
    });
    this.o2 = this.http.post('https://jsonplaceholder.typicode.com/posts', datiDaInviare);
    this.o2.subscribe(this.rispostaPost);
  }

  rispostaPost = (data : any) => {
    this.data = data;
    this.loading = false;
  }

  makeTypedRequest() : void
  {
    //oFoo : Observable<Foo[]>; Observable di tipo Foo[] è stao dichiarato tra gli attributi della classe 
    this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
    this.oFoo.subscribe(data => {this.fooData = data;});
  }

}