// external modules
// ...

// internal modules
import { Heartbeat } from "./heartbeat.model";

class HeartbeatService {
    heartbeat() {
        return new Date().getTime()
    }
}

export const heartbeatService = new HeartbeatService();