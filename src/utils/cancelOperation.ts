import * as p from "@clack/prompts";
import color from "picocolors";

export  function cancelOperation(input: unknown | string | symbol) {
  if (p.isCancel(input)) {
    p.outro(`${color.bgRed(color.white(`Operation Cancelled 😢`))}`);
    process.exit(0);
  }
}

export function cancelOperation_onlyforProjectName() {
  p.outro(color.bgRed(color.white(` Operation Cancelled 😢`)));
  process.exit(0);
}
