import { Effectiveness } from "./effectiveness.enum";
import { PokeType } from "./poke-types";

export const TypeEffectiveness: ReadonlyMap<PokeType, ReadonlyMap<PokeType, Effectiveness>> =
  new Map<PokeType, ReadonlyMap<PokeType, Effectiveness>>([
    [PokeType.Normal, new Map([
      [PokeType.Rock, Effectiveness.Weak],
      [PokeType.Steel, Effectiveness.Weak],
      [PokeType.Ghost, Effectiveness.Immune]
    ])],
    [PokeType.Fire, new Map([
      [PokeType.Fire, Effectiveness.Weak],
      [PokeType.Water, Effectiveness.Weak],
      [PokeType.Grass, Effectiveness.SuperEffective],
      [PokeType.Ice, Effectiveness.SuperEffective],
      [PokeType.Bug, Effectiveness.SuperEffective],
      [PokeType.Rock, Effectiveness.Weak],
      [PokeType.Dragon, Effectiveness.Weak],
      [PokeType.Steel, Effectiveness.SuperEffective]
    ])],
    [PokeType.Water, new Map([
      [PokeType.Fire, Effectiveness.SuperEffective],
      [PokeType.Water, Effectiveness.Weak],
      [PokeType.Grass, Effectiveness.Weak],
      [PokeType.Ground, Effectiveness.SuperEffective],
      [PokeType.Rock, Effectiveness.SuperEffective],
      [PokeType.Dragon, Effectiveness.Weak]
    ])],
    [PokeType.Electric, new Map([
      [PokeType.Water, Effectiveness.SuperEffective],
      [PokeType.Electric, Effectiveness.Weak],
      [PokeType.Grass, Effectiveness.Weak],
      [PokeType.Ground, Effectiveness.Immune],
      [PokeType.Flying, Effectiveness.SuperEffective],
      [PokeType.Dragon, Effectiveness.Weak]
    ])],
    [PokeType.Grass, new Map([
      [PokeType.Fire, Effectiveness.Weak],
      [PokeType.Water, Effectiveness.SuperEffective],
      [PokeType.Grass, Effectiveness.Weak],
      [PokeType.Poison, Effectiveness.Weak],
      [PokeType.Ground, Effectiveness.SuperEffective],
      [PokeType.Flying, Effectiveness.Weak],
      [PokeType.Bug, Effectiveness.Weak],
      [PokeType.Rock, Effectiveness.SuperEffective],
      [PokeType.Dragon, Effectiveness.Weak],
      [PokeType.Steel, Effectiveness.Weak]
    ])],
    [PokeType.Ice, new Map([
      [PokeType.Fire, Effectiveness.Weak],
      [PokeType.Water, Effectiveness.Weak],
      [PokeType.Grass, Effectiveness.SuperEffective],
      [PokeType.Ice, Effectiveness.Weak],
      [PokeType.Ground, Effectiveness.SuperEffective],
      [PokeType.Flying, Effectiveness.SuperEffective],
      [PokeType.Dragon, Effectiveness.SuperEffective],
      [PokeType.Steel, Effectiveness.Weak]
    ])],
    [PokeType.Fighting, new Map([
      [PokeType.Normal, Effectiveness.SuperEffective],
      [PokeType.Ice, Effectiveness.SuperEffective],
      [PokeType.Poison, Effectiveness.Weak],
      [PokeType.Flying, Effectiveness.Weak],
      [PokeType.Psychic, Effectiveness.Weak],
      [PokeType.Bug, Effectiveness.Weak],
      [PokeType.Rock, Effectiveness.SuperEffective],
      [PokeType.Ghost, Effectiveness.Immune],
      [PokeType.Dark, Effectiveness.SuperEffective],
      [PokeType.Steel, Effectiveness.SuperEffective],
      [PokeType.Fairy, Effectiveness.Weak]
    ])],
    [PokeType.Poison, new Map([
      [PokeType.Grass, Effectiveness.SuperEffective],
      [PokeType.Poison, Effectiveness.Weak],
      [PokeType.Ground, Effectiveness.Weak],
      [PokeType.Rock, Effectiveness.Weak],
      [PokeType.Ghost, Effectiveness.Weak],
      [PokeType.Steel, Effectiveness.Immune],
      [PokeType.Fairy, Effectiveness.SuperEffective]
    ])],
    [PokeType.Ground, new Map([
      [PokeType.Fire, Effectiveness.SuperEffective],
      [PokeType.Electric, Effectiveness.SuperEffective],
      [PokeType.Grass, Effectiveness.Weak],
      [PokeType.Poison, Effectiveness.SuperEffective],
      [PokeType.Flying, Effectiveness.Immune],
      [PokeType.Bug, Effectiveness.Weak],
      [PokeType.Rock, Effectiveness.SuperEffective],
      [PokeType.Steel, Effectiveness.SuperEffective]
    ])],
    [PokeType.Flying, new Map([
      [PokeType.Electric, Effectiveness.Weak],
      [PokeType.Grass, Effectiveness.SuperEffective],
      [PokeType.Fighting, Effectiveness.SuperEffective],
      [PokeType.Bug, Effectiveness.SuperEffective],
      [PokeType.Rock, Effectiveness.Weak],
      [PokeType.Steel, Effectiveness.Weak]
    ])],
    [PokeType.Psychic, new Map([
      [PokeType.Fighting, Effectiveness.SuperEffective],
      [PokeType.Poison, Effectiveness.SuperEffective],
      [PokeType.Psychic, Effectiveness.Weak],
      [PokeType.Dark, Effectiveness.Immune],
      [PokeType.Steel, Effectiveness.Weak]
    ])],
    [PokeType.Bug, new Map([
      [PokeType.Fire, Effectiveness.Weak],
      [PokeType.Grass, Effectiveness.SuperEffective],
      [PokeType.Fighting, Effectiveness.Weak],
      [PokeType.Poison, Effectiveness.Weak],
      [PokeType.Flying, Effectiveness.Weak],
      [PokeType.Psychic, Effectiveness.SuperEffective],
      [PokeType.Ghost, Effectiveness.Weak],
      [PokeType.Dark, Effectiveness.SuperEffective],
      [PokeType.Steel, Effectiveness.Weak],
      [PokeType.Fairy, Effectiveness.Weak]
    ])],
    [PokeType.Rock, new Map([
      [PokeType.Fire, Effectiveness.SuperEffective],
      [PokeType.Ice, Effectiveness.SuperEffective],
      [PokeType.Fighting, Effectiveness.Weak],
      [PokeType.Ground, Effectiveness.Weak],
      [PokeType.Flying, Effectiveness.SuperEffective],
      [PokeType.Bug, Effectiveness.SuperEffective],
      [PokeType.Steel, Effectiveness.Weak]
    ])],
    [PokeType.Ghost, new Map([
      [PokeType.Normal, Effectiveness.Immune],
      [PokeType.Psychic, Effectiveness.SuperEffective],
      [PokeType.Ghost, Effectiveness.SuperEffective],
      [PokeType.Dark, Effectiveness.Weak]
    ])],
    [PokeType.Dragon, new Map([
      [PokeType.Dragon, Effectiveness.SuperEffective],
      [PokeType.Steel, Effectiveness.Weak],
      [PokeType.Fairy, Effectiveness.Immune]
    ])],
    [PokeType.Dark, new Map([
      [PokeType.Fighting, Effectiveness.Weak],
      [PokeType.Psychic, Effectiveness.SuperEffective],
      [PokeType.Ghost, Effectiveness.SuperEffective],
      [PokeType.Dark, Effectiveness.Weak],
      [PokeType.Fairy, Effectiveness.Weak]
    ])],
    [PokeType.Steel, new Map([
      [PokeType.Fire, Effectiveness.Weak],
      [PokeType.Water, Effectiveness.Weak],
      [PokeType.Electric, Effectiveness.Weak],
      [PokeType.Ice, Effectiveness.SuperEffective],
      [PokeType.Rock, Effectiveness.SuperEffective],
      [PokeType.Steel, Effectiveness.Weak],
      [PokeType.Fairy, Effectiveness.SuperEffective]
    ])],
    [PokeType.Fairy, new Map([
      [PokeType.Fire, Effectiveness.Weak],
      [PokeType.Fighting, Effectiveness.SuperEffective],
      [PokeType.Poison, Effectiveness.Weak],
      [PokeType.Dragon, Effectiveness.SuperEffective],
      [PokeType.Dark, Effectiveness.SuperEffective],
      [PokeType.Steel, Effectiveness.Weak]
    ])]
  ])
