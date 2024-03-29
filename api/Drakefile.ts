import { desc, run, sh, task } from "https://deno.land/x/drake@v1.5.0/mod.ts";

desc("Help");
task("help", [], function () {
  const tasks = [
    ["start        ", "Run API"],
    ["denon        ", "Run API via denon for development"],
    ["test         ", "Run tests"],
    ["cache        ", "Cache and lock dependencies"],
    ["bundle         ", "Run bundle"],
  ];
  console.log(`\n\n\n\n`);
  console.log(`Task          \t  Description`);
  console.log(`============= \t  ===========`);
  for (const task of tasks) {
    console.log(`${task[0]} \t  ${task[1]}`);
  }
  console.log(`\n\n\n\n`);
});

desc("Run API");
task("start", [], async function () {
  await sh(
    "deno run --allow-env --allow-net --allow-read --unstable --import-map=import_map.json src/mod.ts",
  );
});

desc("Run API via denon for development");
task("denon", [], async function () {
  await sh(
    "denon run --allow-env --allow-net --allow-read --unstable --import-map=import_map.json src/mod.ts",
  );
});

desc("Runt API Tests");
task("test", [], async function () {
  // await sh(
  //   "deno test --allow-none --allow-net --allow-env --allow-read --allow-write --import-map=import_map.json --unstable",
  // );
  await sh(
    "echo tests",
  );
});

desc("Cache and lock dependencies");
task("cache", [], async function () {
  await sh(
    "deno cache --lock=lock.json --lock-write --unstable --import-map=import_map.json src/mod.ts",
  );
});

desc("Cache reload and lock dependencies");
task("cache-reload", [], async function () {
  await sh(
    "deno cache --reload --lock=lock.json --lock-write --unstable --import-map=import_map.json src/mod.ts",
  );
});

desc("Bundle ");
task("bundle", [], async function () {
  await sh(
    "mkdir -p bundle && deno bundle --unstable --import-map=import_map.json src/mod.ts bundle/token-auth-server.bundle.js",
  );
});

desc("Install denon for development");
task("denon-install", [], async function () {
  await sh("deno install -Af --unstable https://deno.land/x/denon/denon.ts");
});

run();
