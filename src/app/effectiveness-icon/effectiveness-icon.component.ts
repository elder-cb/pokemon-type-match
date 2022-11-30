import { Component, Input } from '@angular/core';
import { Effectiveness } from '../model/effectiveness.enum'

@Component({
  selector: 'pkmtm-effectiveness-icon',
  templateUrl: './effectiveness-icon.component.html',
  styleUrls: ['./effectiveness-icon.component.scss']
})
export class EffectivenessIconComponent {
  @Input() effectiveness?: Effectiveness
  readonly Immune = Effectiveness.Immune
  readonly Weak = Effectiveness.Weak
  readonly SuperEffective = Effectiveness.SuperEffective
}
