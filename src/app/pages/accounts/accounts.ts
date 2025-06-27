import { Component } from '@angular/core';
import { AccountsHeader } from "./accounts-header/accounts-header";
import { PerfomanceMetrics } from "./perfomance-metrics/perfomance-metrics";
import { Policies } from "./policies/policies";
import { AccountStatus } from "./account-status/account-status";
import { ComplianceDocumentation } from "./compliance-documentation/compliance-documentation";
import { AccountDetails } from "./account-details/account-details";
import { Communication } from "./communication/communication";
import { PoliciesTable } from "./policies-table/policies-table";

@Component({
  selector: 'app-accounts',
  imports: [AccountsHeader, PerfomanceMetrics, Policies, AccountStatus, ComplianceDocumentation, AccountDetails, Communication, PoliciesTable],
  templateUrl: './accounts.html',
})
export class Accounts {

}
