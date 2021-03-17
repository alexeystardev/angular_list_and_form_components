import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotosService } from '../services/photos-service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

 constructor(public http: HttpClient,private myService:PhotosService) { 
   
  }

  photos=[]

  // https://jsonplaceholder.typicode.com/photos/1

  async ngOnInit(): Promise<void> {
        
    
      // this.myService.getPhoto(this.gotResultFromServer)
      this.myService.getPhoto().then((val)=>{
        console.log(val)
      })

      // this.getPhotos([1,5,10,20,30,44])

  }

  gotResultFromServer(val){
    console.log(val)
  }
//items in array will be string string[]
//items in array will be string number[]

  getPhotos(ids:number[]){
    ids.forEach(id => {
      this.getPhoto(id)
    });
    
   
  }

  getPhoto(id:number){

       this.http
       .get('https://jsonplaceholder.typicode.com/photos/'+id)
       .subscribe(data => {
          this.photos.push(data)
       });
       }
  
	cardsPics = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200'];
	//   img="https://picsum.photos/200"
	// ngOnInit(): void {
	// 	// this.getPhotos([1,5,10,14]);
	
	// }
	
}
