// 1>
// Optional with undefined check
function greet(name?: string): string {
  const uppername = name ? name?.toUpperCase() : "Guest";
  return `Hello ${uppername}`;
}

console.log(greet("Omm"));
console.log(greet()); // this return undefined!

// 2>
// Default with the undefined check in the parameter
function greetPersonDefault(name: string = "Default"): string {
  return `Hello ${name.toUpperCase()}`;
}
console.log(greetPersonDefault("Synthe"));
console.log(greetPersonDefault());

// 3>
function connect(host: string, port?: number, secure?: boolean) {
  const p = port ?? 80;
  const s = secure ?? false;

  return `Connected to ${host} PORT:${port} secure:${secure}`;
}

console.log(connect("localhost", 3000, true));
