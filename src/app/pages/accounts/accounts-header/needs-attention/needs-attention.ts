import { Component } from '@angular/core';
import { SvgIcon } from '../../../../components/svg-icon/svg-icon';
import { ArrowLink } from '../../../../components/arrow-link/arrow-link';

@Component({
  selector: 'app-needs-attention',
  imports: [SvgIcon, ArrowLink],
  templateUrl: './needs-attention.html',
  styleUrl: './needs-attention.css'
})
export class NeedsAttention {

}
