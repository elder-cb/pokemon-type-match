import { Component, OnInit } from '@angular/core';
import { PokeType, TypeList } from '../model/poke-types'
import { Effectiveness } from '../model/effectiveness.enum'
import { TypeEffectiveness } from '../model/types-effectiveness'

@Component({
  selector: 'pkmtm-types-grid',
  templateUrl: './types-grid.component.html',
  styleUrls: ['./types-grid.component.scss']
})
export class TypesGridComponent implements OnInit {
  types = TypeList
  hoveredX?: number
  hoveredY?: number
  selectedX?: number
  selectedY?: number

  ngOnInit(): void {
    console.log(this.types)
  }

  getEffectiveness(source: PokeType, target: PokeType): Effectiveness {
    let result: Effectiveness = Effectiveness.Normal
    if (TypeEffectiveness.has(source)) {
      const targetEffect = TypeEffectiveness.get(source)
      if (targetEffect!.has(target)) {
        result = targetEffect!.get(target) as Effectiveness
      }
    }
    return result
  }

  isHighlightX(x: number): boolean {
    return this.isHighlighted(x, this.selectedX, this.hoveredX)
  }

  isHighlightY(y: number): boolean {
    return this.isHighlighted(y, this.selectedY, this.hoveredY)
  }

  isHighlighted(index: number, selectedIndex?: number, hoveredIndex?: number): boolean {
    if (selectedIndex !== undefined) return index === selectedIndex
    return hoveredIndex === index
  }

  onMouseEnter(x?: number, y?: number): void {
    this.hoveredX = x
    this.hoveredY = y
  }

  onMouseLeave(x?: number, y?: number): void {
    if (this.hoveredX === x) this.hoveredX = undefined
    if (this.hoveredY === y) this.hoveredY = undefined
  }

  onClick(x?: number, y?: number): void {
    if (this.selectedX === x && this.selectedY === y) {
      this.selectedX = undefined
      this.selectedY = undefined
    } else {
      if (x !== undefined) {
        if (this.selectedX === x && y === undefined)
          this.selectedX = undefined
        else
          this.selectedX = x
      }

      if (y !== undefined) {
        if (this.selectedY === y && x === undefined)
          this.selectedY = undefined
        else
          this.selectedY = y
      }
    }
  }
}
