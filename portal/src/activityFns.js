export function prefix(location, ...prefixes) {
  return prefixes.some(prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1);;
}
export function app1React(location) {
  return prefix(location, "reactApp");
}
export function app2Vue(location) {
  return prefix(location, "vueApp");
}
export function n1App(location) {
  return prefix(location, "a1App");
}
