export function isHelloWorld(str: string): str is "Hello World" {
    if (str === "Hello World") return true;
    return false;
}