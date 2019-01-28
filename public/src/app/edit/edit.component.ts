import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editingObject: any;
  err_bool = false;
  edit_duplicate = false;
  showall:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    //this will just avoid error (make sure it is first before the function for getting things);
    this.editingObject = { title: "", url: "", reviews: [] }
    this.showall = [];
    this.a_getAllObjects();
    this.getSpecificObject();
    
  }
  getSpecificObject() {
    let observable = this._httpService.getPrimary(this._route.snapshot.params.id);
    observable.subscribe(data => {
      this.editingObject = data['data'];
    })
  }
  a_getAllObjects() {
    var observable = this._httpService.getPrimaries();
    observable.subscribe(data => {
      console.log(data);
      this.showall = data['data'];
      console.log('this.showall: ', this.showall);
      console.log('this.showall.length: ', this.showall.length);
    });
  }
  checkingDuplicate() {
    for (var i = 0; i < this.showall.length; i++) {
      if (this.showall[i]._id != this.editingObject._id && this.showall[i].title === this.editingObject.title) {
        this.edit_duplicate = true;
        console.log('this.editingObject.title: ', this.editingObject.title);
      }
    }
  }
  onSubmit() {
    this.checkingDuplicate();
    if (this.editingObject.title.length < 3 || this.editingObject.url.length < 3 || this.edit_duplicate == true) {
      this.err_bool = true;
    }
    else {
      //when editing double check if the right fields are being updated on the controller.
      let observable = this._httpService.editPrimary(this._route.snapshot.params.id, this.editingObject);
      observable.subscribe(data => {
        console.log(data);
        this._router.navigate(['/movies']);
        // this.editingObject = data['data'];
      });
    }
  }
}
