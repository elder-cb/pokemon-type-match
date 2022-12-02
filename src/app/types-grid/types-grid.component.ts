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
  selectedX: boolean[] = []
  selectedY: boolean[] = []

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

  isHighlighted(index: number, selectedIndexes: boolean[], hoveredIndex?: number): boolean {
    if (selectedIndexes[index] !== undefined) return selectedIndexes[index]
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
    if (x !== undefined && y !== undefined &&
      this.selectedX[x] && this.selectedY[y]) {
      this.selectedX[x] = false
      this.selectedY[y] = false
    } else {
      if (x !== undefined) {
        this.selectedX[x] = !(this.selectedX[x] && y === undefined)
      }

      if (y !== undefined) {
        this.selectedY[y] = !(this.selectedY[y] && x === undefined)
      }
    }
  }
}
