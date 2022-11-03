import { describe, expect, test } from "@jest/globals";
import { isHelloWorld } from "../hello_world";
describe("Test for helloWorld function", () => {
    test("\"Hello World\" is successful", () => {
        expect(isHelloWorld("Hello World")).toBe(true);
    });
    test("Other strings than \"Hello World\" are returned as false", () => {
        expect(isHelloWorld("Hello Worlds")).toBe(false);
        expect(isHelloWorld("HelloWorld")).toBe(false);
        expect(isHelloWorld("Hello Worldss")).toBe(false);
        expect(isHelloWorld("Cute")).toBe(false);
    });
});