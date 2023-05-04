#!/usr/bin/env node

import { Command } from 'commander';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();

function createProject(projectName: string) {
  console.log(`Creating a new Nest js Project : ${projectName}`);

  // Run the Nest js CLI to create a new project
  execSync(`npx create-nest-app ${projectName} --package-manager=npm`, {
    stdio: 'inherit',
  });

  // Copy the vercel.json file to the new project
  fs.copyFileSync(
    path.join(__dirname, 'vercel.json'),
    path.join(process.cwd(), projectName, 'vercel.json')
  );

  // Add the 'index' script to the new project's package.json
  const packageJsonPath = path.join(process.cwd(), projectName, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.scripts.index = 'node dist/main';
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

program
  .version('0.0.1')
  .command('create ver')
  .description('Create a new Nest js project configured for Vercel deployment')
  .action(createProject);

program.parse(process.argv);
