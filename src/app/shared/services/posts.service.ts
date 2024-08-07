import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postUrl : string = `${environment.baseUrl}/posts`
  constructor(
    private _http : HttpClient
  ) { }

  fetchAllPosts(){
    return this._http.get<any>(this.postUrl)
  }
}
