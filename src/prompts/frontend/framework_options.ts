import * as p from "@clack/prompts";
import { cancelOperation } from "../../utils/cancelOperation";
import { installFramworkforVite } from "../../controllers/frontend/installFramworkforVite";


export async function select_vite_option(projectName: string) {
  const vite = await p.select({
    message: "Choose any one.",
    options: [
      { value: "raw", label: "ViteJS without template" },
      { value: "template", label: "ViteJS with template" },
    ],
  });

  cancelOperation(vite);
  installFramworkforVite(vite as string, projectName);
}

export async function select_next_option(projectName: string) {
  const next = await p.select({
    message: "Choose a Database.",
    options: [
      { value: "raw", label: "NextJS without template" },
      { value: "template", label: "NextJS with template" },
    ],
  });

  cancelOperation(next);
//   installFramworkforNext(next, projectName);
}
