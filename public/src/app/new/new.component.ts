import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  newObject: any;
  newReview: any;
  showall: any;
  errorBoolean = false;
  errorMessage = "";
  duplicate = false;
  delete_disable = false;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newObject = { title: "", reviews: [] }
    this.newReview = { rating: 5, name:"", comment: "" }
    this.showall = [];
    this.getAllObjects();

  }
  getAllObjects() {
    var observable = this._httpService.getPrimaries();
    observable.subscribe(data => {
      console.log(data);
      this.showall = data['data'];
      console.log('this.showall: ', this.showall);
      console.log('this.showall.length: ', this.showall.length);
      console.log('this.showall[0].title: ', this.showall[0].title);
    });
  }
  checkingDuplicate() {
    for (var i = 0; i < this.showall.length; i++) {
      if (this.showall[i].title === this.newObject.title) {
        this.duplicate = true;
        console.log('this.newObject.title: ', this.newObject.title);
      }
    }
  }
  onSubmit() {
    this.checkingDuplicate();
    if (this.newObject.title.length < 3 || this.newObject.url.length < 3 || this.newReview.comment.length < 3 || this.duplicate === true) {
      this.errorBoolean = true;
    }
    else {
      //this will create the object with an initial review
      this.newObject.reviews.push(this.newReview);
      let observable = this._httpService.addNew(this.newObject);
      observable.subscribe(data => {
        console.log(data);
        if (data['errorMsg']) {
          this.errorMessage = data['errorMsg']
        } else {
          // setTimeout(function(){this.delete_disable = true}, 5000);
          this._router.navigate(['/parent']);
        }
      })
    }

  }
  // //sample of regular observable with routing after data comes back (no validation)
  // onSubmit() {
  //   let observable = this._httpService.addNew(this.newObject);
  //   observable.subscribe(data => {
  //     console.log(data);
  //     this._router.navigate(['/products'])
  //   })
  // }
  // // front-end validation (you can add more fields to check with else if)
  // onSubmit() {
  //   if (this.newObject.title.length < 3) {
  //     this.errorBoolean = true;
  //   } else {
  //     //this will create the object with an initial review
  //     this.newObject.reviews.push(this.newReview);
  //     let observable = this._httpService.addNew(this.newObject);
  //     observable.subscribe(data => {
  //       console.log(data);
  //       this._router.navigate(['/products'])
  //     })
  //   }
  // }
  // //sample of detecting errorMsg on mainController and setting errorMessage variable here to be that message for front-end rendering;
  // onSubmit() {
  //     //this will create the object with an initial review
  //     this.newObject.reviews.push(this.newReview);
  //     let observable = this._httpService.addNew(this.newObject);
  //     observable.subscribe(data => {
  //       console.log(data);
  //       if (data['errorMsg']) {
  //         this.errorMessage = data['errorMsg']
  //       } else {
  //         this._router.navigate(['/products'])
  //       }
  //     })
  //   }

  // }
}
