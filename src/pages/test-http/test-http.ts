import { Component } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'test-http',
  templateUrl: 'test-http.html'
})
export class TestHttp{

  public posts: any;

  constructor(private http: Http){
    // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(
    //   data => {
    //   this.posts = data.data.children;
    // });

    // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10')
    //   .subscribe((res) => {
    //     this.posts = res.json().data.children;
    //   });
    //
    //
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // this.http.post('http://www.devonhello.com/chihu/share',{'len':1},{headers: headers})
    //   .map(res => res.json())
    //   .subscribe(
    //   data => {
    //     // this.posts = data.data.children;
    //   }
    // );


    this.sendHttp().subscribe((data) => {
      this.posts = data.data.children;
    }, (error) => {
      console.log("error: " + error.toString());
      })
  }

  //可以把这些请求写在provider里面,避免代码重复
  sendHttp(){
    return this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json());
  }
}
