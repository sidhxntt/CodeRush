import { spawn } from "child_process";
import * as p from "@clack/prompts";
import color from "picocolors";

export async function installFramworkforVite(option: string, projectName: string) {
  let command = "";
  let message = "";

  if (option === "raw") {
    command = `npm create vite@latest`;
  } else {
    const branch = "vite-template";
    const repoURL = "https://github.com/sidhxntt/CodeRush.git";
    command = `git clone --single-branch --branch ${branch} ${repoURL} ${projectName} > /dev/null 2>&1`;
    message = "Installing ViteJS template...";
  }

  if (option === "raw") {
    // For raw installation, directly spawn the command without spinner
    const child = spawn(command, {
      stdio: "inherit",
      shell: true,
    });

    child.on("error", (err) => {
      p.log.error(color.red(`Error: ${err.message}`));
    });

  } else {
    // For template installation, use spinner
    const s = p.spinner();
    s.start(message);

    const child = spawn(command, {
      stdio: "ignore",
      shell: true,
    });

    child.on("error", (err) => {
      s.stop(color.red("Error during installation."));
      p.log.error(color.red(`Error: ${err.message}`));
    });

  }
}