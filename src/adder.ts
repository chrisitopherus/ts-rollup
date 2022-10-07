import { HalfAdder } from "./halfAdder";
import { Bit, FourBit, SixTuple } from "./types/general";

export class _4BitAdder {
    private output: null | string = null;

    private halfAdderStorage: SixTuple<HalfAdder> = new Array(6).fill(undefined, 0, 6).map(() => new HalfAdder()) as SixTuple<HalfAdder>;
    public constructor() {
        // empty constructor
    }

    public input(A: FourBit, B: FourBit) {
        // 
        console.log(this.halfAdderStorage);
        console.log(this.halfAdderStorage[0].signal(+A[3] as Bit, +B[3] as Bit));
    }
}