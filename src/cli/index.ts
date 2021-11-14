import * as lib from "../library";

export function run(): void {
  const newAddr = lib.address.makeAddress();
  console.log(newAddr);
}

export function info(): string {
  return "Garlicoin CLI";
}
