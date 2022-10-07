export type Bit = 0 | 1;

export interface SandC {
    S: Bit;
    C: Bit;
}

export type FourBit = `${Bit}${Bit}${Bit}${Bit}`;

export type SixTuple<T> = [T, T, T, T, T, T,];