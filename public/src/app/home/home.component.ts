import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReview: any;
  shownObject: any;
  err_bool: boolean = false;
  selectedObject:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    // this.getShownObject();
    this.newReview = { rating: 5, name: "",comment: "" }
    this.shownObject = { title: "", reviews: [] }
    // this.err_bool= false;
    this.getShownObject();
  }
  getShownObject() {
    let observable = this._httpService.getPrimary(this._route.snapshot.params.id);
    observable.subscribe(data => {
      this.shownObject = data['data']
      //reviews is an array
      var sum = 0;
      for (var i = 0; i < this.shownObject.reviews.length; i++) {
        sum += this.shownObject.reviews[i].rating;
      }
      this.shownObject.average = sum / this.shownObject.reviews.length;
      this.shownObject.reviews = this.shownObject.reviews.sort(this._httpService.dynamicSort("-rating"));
    })
  }
  onSubmit() {
    if (this.newReview.comment.length < 3 || this.newReview.comment.length < 3) {
      this.err_bool = true;
      // this.getShownObject();
    }
    else {
      this.err_bool = false;

      let observable = this._httpService.addSecondary(this._route.snapshot.params.id, this.newReview);
      observable.subscribe(data => {
        this.getShownObject();
        this.newReview = { rating: 5, name: "", comment: "" };
        this._router.navigate(['/movies/'+ this.shownObject['_id']]);
      });
    }
  }
  movieDelete() {
    let observable = this._httpService.deletePrimary(this.shownObject._id);
    observable.subscribe(data => {
      // this.getObjects();
      // this.getShownObject()
      this.selectedObject = null;
      this._router.navigate(['/movies']);
    });
  }
  onDelete(reviewObject) {
    for (var i = 0; i < this.shownObject.reviews.length; i++) {
      if (reviewObject._id === this.shownObject.reviews[i]._id) {
        var temp = this.shownObject.reviews[i];
        this.shownObject.reviews[i] = this.shownObject.reviews[this.shownObject.reviews.length - 1];
        this.shownObject.reviews[this.shownObject.reviews.length - 1] = temp;
        this.shownObject.reviews.pop();
      }
    }
    let observable = this._httpService.deleteSecondary(this.shownObject._id, this.shownObject);
    observable.subscribe(data => {
      console.log("Successfully deleted the review!!!", data);
      this.getShownObject();

    });
  }
}

