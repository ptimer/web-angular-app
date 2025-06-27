import { Component } from '@angular/core';
import { Breadcrumbs } from "../../../components/breadcrumbs/breadcrumbs";
import { NeedsAttention } from "./needs-attention/needs-attention";

@Component({
  selector: 'app-accounts-header',
  imports: [Breadcrumbs, NeedsAttention],
  templateUrl: './accounts-header.html',
  styleUrl: './accounts-header.css'
})
export class AccountsHeader {
}