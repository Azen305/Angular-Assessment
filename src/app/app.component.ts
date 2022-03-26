import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment3';
  public movies:any=[];
  public titleList:any=[];
  public ratingList:any=[];
  public categoryList:any=[];
  public searchedData:any=[];
  public userInput:any='';
  public selectedGenre:any='';
  public selectedRating:any='';

  constructor(private apiService: ApiServiceService){
  }
  ngOnInit(): void {
    this.movies=this.apiService.datalist();
    console.log(this.movies);
  }
  onKey(input:any){
    this.userInput=input.value;
    if (this.userInput.length>=1){
      this.searchedData =this.movies.filter((item:any)=>{
        if(item.title.toLowerCase().includes(this.userInput.toLowerCase())){
          return item
        }
      });
    }
  }
  userClick(titleName:any,input:any){
    console.log(titleName.value);
    input.value=titleName.value;
  }
  onChangeGenre(genre:any){
    console.log(genre.value);
    this.selectedGenre=genre.value;
    if(this.selectedGenre=="Any genre"){
      this.searchedData=this.movies;
      return (this.searchedData) 
    }
    else{
      this.searchedData =this.movies.filter((item:any)=>{
        if(this.selectedGenre==item.category){
          return (item);
        }
      });
      console.log(this.searchedData);
    }
  }
  clickRating(n:any){
    console.log(n);
    this.searchedData =this.movies.filter((item:any)=>{
      if(item.rating>=(n) && item.rating<(n+1)){
        return (item);
      }
    });
  }
  clickAnyRating()
  {
    this.searchedData =this.movies;
  }
}
