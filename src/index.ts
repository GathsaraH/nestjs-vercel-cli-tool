#!/usr/bin/env node

import { Command } from "commander";
import { execSync } from "child_process";
import * as fs from "fs";
import { join } from "path";

const program = new Command();

function createProject(projectName: string) {
  console.log(`Creating a new Nest js Project : ${projectName}`);

  // Run the Nest js CLI to create a new project
  execSync(`npx create-nest-app ${projectName} --package-manager=npm`, {
    stdio: "inherit",
  });

  // Copy the vercel.json file to the new project
  fs.copyFileSync(
    join(__dirname, "vercel.json"),
    // require.resolve("./vercel.json"),
    join(process.cwd(), projectName, "vercel.json")
  );
  fs.chmodSync(
    join(process.cwd(), projectName, "dist", "index.js"),
    "755"
  );
  // Add the 'index' script to the new project's package.json
  const packageJsonPath = join(process.cwd(), projectName, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  packageJson.scripts.index = "node dist/main";
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

program
  .version("1..1")
  .command("nest-new <project-name>")
  .description("Create a new Nest js project configured for Vercel deployment")
  .action(createProject);

program.parse(process.argv);
