import { NS } from 'bitburner';

export async function main(ns: NS) {
  ns.tprint("Hacking n00dles");
  await ns.hack("n000dles");
  await ns.weaken("n000dles");
  await ns.grow("n000dles");
  await ns.weaken("n000dles");
  ns.tprint("Hacking n00dles done");
}
