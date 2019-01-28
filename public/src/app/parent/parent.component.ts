import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() delete_enable = false;
  @Output() delete_disable = new EventEmitter();
  start_bool = false;
  listOfObjects:any;
  selectedObject:any;
  shownObject:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getObjects();
  }
  getObjects(){
    let observable = this._httpService.getPrimaries();
    observable.subscribe(data => {
      // this.listOfObjects = data['data']

      this.listOfObjects = data['data'].sort(this._httpService.dynamicSort("title"));
    });
  }
  // getShownObject() {
  //   let observable = this._httpService.getPrimary(this._route.snapshot.params.id);
  //   observable.subscribe(data => {
  //     this.shownObject = data['data']
  //     //reviews is an array
  //     var sum = 0;
  //     for (var i = 0; i < this.shownObject.reviews.length; i++) {
  //       sum += this.shownObject.reviews[i].rating;
  //     }
  //     this.shownObject.average = sum / this.shownObject.reviews.length;
  //     // this.shownObject.reviews = this.shownObject.reviews.sort(this._httpService.dynamicSort("-rating"));
  //   })
  // }

  onShow(x){
    this._router.navigate(['/movies/',x._id]);
  }
  onEdit(x){
    this._router.navigate(['/movies/edit',x._id]);
  }
  onReview(x){
    this._router.navigate(['/movies/'+x._id+'/reviews']);
  }
  movieDelete(x){
    let observable = this._httpService.deletePrimary(x._id);
    observable.subscribe(data => {
      this.getObjects();
      this.selectedObject = null;
    });
  }
  onSelectForChild(){
    // this.selectedObject = x;
    this.start_bool = true;
    // this.getObjects();
  }
  ReceivedChildMessage(event){
    if(event == true){
      this.start_bool = false;
      this.getObjects();
      
      // this.selectedObject = null;
      //you can also run other functions to refresh the parent's lists and whatever
    }
  }
}
