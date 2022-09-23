import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {
 
  assignmentForm: FormGroup;
  tempForm: FormGroup;
  height: any = 0;
  editindex:any = '';
  removeindex:any = '';
  showdata:boolean=false;
  showindex:any = '';
  constructor(
    public formBuilder:FormBuilder,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.assignmentForm = this.formBuilder.group({
     finaldata: new FormArray([])
    })

    this.tempForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
     })
  }

  get f(){ 
    return this.tempForm.controls;
  }
  get a(){ 
    return this.assignmentForm.controls;
  }
  get t(){ 
    return this.a['finaldata'] as FormArray;
  }
  get finalformgroup(){ 
    return this.t.controls as FormGroup[];
  }

  onSubmit(){
if(this.tempForm.valid){
    if(this.editindex!=''){
      this.t.at(this.f['id'].value).patchValue({
        name: this.f['name'].value,
        email: this.f['email'].value,
        phone: this.f['phone'].value,
        address:this.f['address'].value
      });
      this.tempForm.reset();
    }else{
      this.t.push(this.formBuilder.group(this.tempForm.value));
      this.tempForm.reset();
    }
  } else {
    // this.toastr.error('Some Data Missing','Oops!');/=
    alert("Data Missing,Please Fill all Fields.")
  }


  }

  remove(i:any){
    if(this.editindex!='' && (this.editindex >= i)){
      alert('First update the editing data.')
    }else{
      this.t.removeAt(i);
      this.showdata = false;
      this.showindex = '';
    }
  }

  showtempdata(i:any){
    if (this.showdata && this.showindex == i){
      this.showdata = false;
      this.showindex = '';
    } else if(this.showdata && this.showindex != i) {
      this.showdata = true;
      this.showindex = i;
    } else if(!this.showdata) {
      this.showdata = true;
      this.showindex = i;
    }else {
      this.showdata = false;
      this.showindex = '';
    }
  }

  ngAfterViewChecked():void{
    setInterval(() => {
      this.height = document.documentElement.clientHeight;
    },2000);
  }
}
