import { ENDPOINTS } from "./config.js";

export async function loadLogs() {
    const panel = document.getElementById("logs-panel");
    if (!panel) return;

    try {
        const t0 = performance.now();
        const res = await fetch(ENDPOINTS.fids);

        const ok = res.ok ? "OK" : "ERR";
        const dt = Math.round(performance.now() - t0);

        const div = document.createElement("div");
        div.className = "log-entry " + (ok === "OK" ? "log-ok" : "log-error");
        div.textContent = `${new Date().toLocaleTimeString()} FIDS → ${ok} (${dt} ms)`;
        panel.appendChild(div);

    } catch (err) {
        const div = document.createElement("div");
        div.className = "log-entry log-error";
        div.textContent = `${new Date().toLocaleTimeString()} FIDS → ERR`;
        panel.appendChild(div);
    }
}
