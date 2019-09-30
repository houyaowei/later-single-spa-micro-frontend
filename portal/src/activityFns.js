export function prefix(location, ...prefixes) {
  let res = prefixes.some(prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1);
  console.log("res:", res);
  return res;
}
export function app1React(location) {
  console.log("reactApp");
  return prefix(location, "reactApp");
}
export function app2Vue(location) {
  console.log("vueApp");
  return prefix(location, "vueApp");
}
export function n1App(location) {
  console.log("a1App");
  return prefix(location, "a1App");
}
