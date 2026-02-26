#!/usr/bin/env node
import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cliDir = path.resolve(__dirname, "..");
const repoRoot = path.resolve(cliDir, "..", "..");
const demoDir = path.join(repoRoot, "playgrounds", "next16-cli-demo");

const run = (command, cwd) => {
  console.log(`\n$ ${command}`);
  execSync(command, { cwd, stdio: "inherit" });
};

const assertExists = (relativePath, message) => {
  const fullPath = path.join(demoDir, relativePath);
  if (!existsSync(fullPath)) {
    console.error(`\nValidation failed: ${message}`);
    console.error(`Missing: ${fullPath}`);
    process.exit(1);
  }
};

if (!existsSync(demoDir)) {
  console.error(`Demo app not found at: ${demoDir}`);
  console.error(
    'Create it first with: npx create-next-app@16.1.6 "playgrounds/next16-cli-demo" --ts --app --use-npm --yes --import-alias "@/*"',
  );
  process.exit(1);
}

// Remove stale local @zalify-ui/cli copy left over from the old file:tgz dependency
// so bun install uses the root workspace symlink instead
const staleCliInstall = path.join(demoDir, "node_modules", "@zalify-ui", "cli");
if (existsSync(staleCliInstall)) {
  rmSync(staleCliInstall, { recursive: true, force: true });
  console.log(
    "Removed stale local @zalify-ui/cli install from demo node_modules",
  );
}

run("bun install", repoRoot);
run("bun run build", cliDir);
run("npx panda init --force --jsx-framework react --postcss", demoDir);
run("npx zalify-ui init --default", demoDir);
assertExists(
  "components.json",
  "`zalify-ui init --default` did not generate components.json",
);
run("npx zalify-ui add button", demoDir);
assertExists(
  "src/components/ui/button.tsx",
  "`zalify-ui add button` did not generate button component",
);
run("npx zalify-ui add card", demoDir);
assertExists(
  "src/components/ui/card.tsx",
  "`zalify-ui add card` did not generate card component",
);
run("npx panda codegen --clean", demoDir);
assertExists(
  "styled-system/recipes/index.mjs",
  "`panda codegen --clean` did not generate styled-system recipes index",
);

console.log("\nLocal CLI demo flow completed successfully.");
