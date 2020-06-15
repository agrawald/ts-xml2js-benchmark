import { performance, PerformanceObserver } from "perf_hooks";

export class Performance {
  private key: string;
  constructor(private label: string, private parser: any) {
    this.key = `${this.parser}.${this.label}`;
    performance.mark(`${this.key}.start`);
  }

  measure() {
    performance.mark(`${this.key}.end`);
    performance.measure(this.key, `${this.key}.start`, `${this.key}.end`);
    performance.clearMarks(`${this.key}-start`);
    performance.clearMarks(`${this.key}-end`);
  }
}

export function startPerformanceObserver() {
  const obs = new PerformanceObserver((list) => {
    const entry = list.getEntries()[0];
    console.log(`${entry.name}`, entry.duration);
  });
  obs.observe({ entryTypes: ["measure"], buffered: false });
}
