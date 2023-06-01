import { Analytics } from "./analytics";
import { Base } from "./base";
import { applyMixins } from "./utils";

class AnalyticsTracker extends Base {}

interface AnalyticsTracker extends Analytics {}

applyMixins(AnalyticsTracker, [Analytics]);

export default AnalyticsTracker;