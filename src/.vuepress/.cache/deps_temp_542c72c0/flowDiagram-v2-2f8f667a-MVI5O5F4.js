import {
  flowRendererV2,
  flowStyles
} from "./chunk-A7LRNU5M.js";
import {
  flowDb,
  parser$1
} from "./chunk-6LPUASLG.js";
import "./chunk-USILHYHK.js";
import "./chunk-AAS6BE3Q.js";
import "./chunk-DDUGNBU4.js";
import "./chunk-NX7QPZN7.js";
import {
  __toESM,
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-EM34VQPA.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/flowDiagram-v2-2f8f667a.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-2f8f667a-MVI5O5F4.js.map
