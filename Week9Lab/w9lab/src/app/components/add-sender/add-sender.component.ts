import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-add-sender',
  templateUrl: './add-sender.component.html',
  styleUrls: ['./add-sender.component.css']
})
export class AddSenderComponent implements OnInit {
  name="";

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
  }
  onSaveSender() {
    let obj = { "name": this.name};
    this.dbService.addSender(obj).subscribe(result => {
      this.router.navigate(["/listsender"])

    });
  }

}
