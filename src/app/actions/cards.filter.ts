export type CardsFilterType = 
    'sets' | 
    'classes' | 
    'factions' | 
    'qualities' | 
    'races' | 
    'types';

export interface CardsFilter {
    type: CardsFilterType;
    attack: number;
    collectible: number;
    cost: number;
    durability: number;
    health: number;
    locale: string;
}