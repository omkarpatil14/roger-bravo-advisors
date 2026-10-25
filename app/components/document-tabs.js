"use client";

import { useState } from "react";
import { FileText } from "lucide-react";

export function DocumentTabs({ groups }) {
  const [active, setActive] = useState(0);
  const current = groups[active];

  return (
    <div className="doc-tabs">
      <div className="doc-tab-row" role="tablist" aria-label="Investor documents">
        {groups.map((group, index) => (
          <button
            key={group.category}
            type="button"
            role="tab"
            id={`doc-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`doc-panel-${index}`}
            className={active === index ? "doc-tab is-active" : "doc-tab"}
            onClick={() => setActive(index)}
            data-cursor="View"
          >
            {group.category}
          </button>
        ))}
      </div>

      <div
        className="doc-grid"
        role="tabpanel"
        id={`doc-panel-${active}`}
        aria-labelledby={`doc-tab-${active}`}
      >
        {current.documents.map((document) => (
          <a
            key={document.file}
            className="doc-chip"
            href={document.file}
            target="_blank"
            rel="noreferrer"
            data-cursor="Open"
          >
            <span className="doc-chip-icon" aria-hidden="true">
              <FileText strokeWidth={1.4} />
            </span>
            <span className="doc-chip-title">{document.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
