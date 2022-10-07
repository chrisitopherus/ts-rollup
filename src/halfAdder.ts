import { Bit, SandC } from "./types/general";

/**
 * Typical HalfAdder.
 * @class
 */
export class HalfAdder {
    private C: Bit = 0;
    private S: Bit = 0;
    public constructor() {
        // empty constructor
    }

    public signal(A: Bit, B: Bit) {
        this.sum(A, B);

        return this.createSandC();
    }

    private createSandC(): SandC {
        return {
            S: this.S,
            C: this.C
        };
    }

    private sum(A: Bit, B: Bit) {
        // XOR
        this.S = (A ^ B) as Bit;
        // AND
        this.C = (A & B) as Bit;
    }

}