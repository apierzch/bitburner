import { NS } from 'bitburner';

export async function main(ns: NS) {
  ns.tprint("Hacking n00dles");
  await ns.hack("n00dles");
  await ns.weaken("n00dles");
  await ns.grow("n00dles");
  await ns.weaken("n00dles");
  ns.tprint("Hacking n00dles done");
}
