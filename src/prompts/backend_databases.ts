import * as p from "@clack/prompts";
import { cancelOperation } from "../utils/cancelOperation";
import installFramworkforTS from "../controllers/installFramworkforTS";
import installFramworkforJS from "../controllers/installFramworkforJS";

export async function selectDBforTS(projectName: string) {
  const db = await p.select({
    message: "Choose a Database.",
    options: [
      { value: "mongo", label: "MongoDB", hint: "Mongo Atlas" },
      { value: "postgres", label: "Postgres", hint: "Supabase" },
    ],
  });

  cancelOperation(db);
  installFramworkforTS(db, projectName)
}

export async function selectDBforJS(projectName: string) {
  const db = await p.select({
    message: "Choose a Database.",
    options: [
      { value: "mongo", label: "MongoDB", hint: "Mongo Atlas" },
      { value: "postgres", label: "Postgres", hint: "Supabase" },
    ],
  });
  installFramworkforJS(db, projectName)
  cancelOperation(db);
}
