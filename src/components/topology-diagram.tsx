export function TopologyDiagram() {
  return (
    <svg
      viewBox="0 0 800 410"
      className="w-full h-auto"
      role="img"
      aria-label="Enterprise boundary architecture diagram showing customer-controlled private environment with external connectivity and managed operations"
    >
      <defs>
        <pattern id="dotGrid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
        </pattern>
      </defs>

      {/* background grid */}
      <rect className="td-enter" width="800" height="410" fill="url(#dotGrid)" style={{ animationDelay: "0.02s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.02s backwards" }} />

      {/* outer boundary */}
      <rect className="td-enter" x="60" y="60" width="680" height="300" rx="14" fill="#f8fafc" stroke="#0b1a3d" strokeWidth="2" style={{ animationDelay: "0.04s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.04s backwards" }} />

      {/* label for outer boundary */}
      <text className="td-enter" x="70" y="48" fill="#0b1a3d" fontSize="11" fontWeight="600" letterSpacing="1.5" style={{ animationDelay: "0.08s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.08s backwards" }}>
        CUSTOMER-CONTROLLED ENVIRONMENT
      </text>
      <line className="td-enter" x1="70" y1="54" x2="320" y2="54" stroke="#0b1a3d" strokeWidth="1" style={{ animationDelay: "0.1s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.1s backwards" }} />

      {/* private data zone */}
      <g className="td-enter" style={{ animationDelay: "0.12s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.12s backwards" }}>
        <rect x="90" y="90" width="150" height="90" rx="10" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.25" />
        <text x="100" y="112" fill="#0b1a3d" fontSize="11" fontWeight="700">
          PRIVATE DATA
        </text>
        <text x="100" y="128" fill="#475569" fontSize="10">
          Customer records,
        </text>
        <text x="100" y="142" fill="#475569" fontSize="10">
          regulated workloads
        </text>
      </g>

      {/* models zone */}
      <g className="td-enter" style={{ animationDelay: "0.16s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.16s backwards" }}>
        <rect x="260" y="90" width="150" height="90" rx="10" fill="#ecfeff" stroke="#0284c7" strokeWidth="1.25" />
        <text x="270" y="112" fill="#0b1a3d" fontSize="11" fontWeight="700">
          SOVEREIGN MODELS
        </text>
        <text x="270" y="128" fill="#475569" fontSize="10">
          On-premise LLM,
        </text>
        <text x="270" y="142" fill="#475569" fontSize="10">
          confidential compute
        </text>
      </g>

      {/* workloads zone */}
      <g className="td-enter" style={{ animationDelay: "0.2s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.2s backwards" }}>
        <rect x="430" y="90" width="150" height="90" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.25" />
        <text x="440" y="112" fill="#0b1a3d" fontSize="11" fontWeight="700">
          PRIVATE WORKLOADS
        </text>
        <text x="440" y="128" fill="#475569" fontSize="10">
          AI inference,
        </text>
        <text x="440" y="142" fill="#475569" fontSize="10">
          managed services
        </text>
      </g>

      {/* central policy/control node */}
      <g className="td-enter" style={{ animationDelay: "0.22s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.22s backwards" }}>
        <circle cx="400" cy="230" r="18" fill="#0b1a3d" />
        <text x="390" y="234" fill="#ffffff" fontSize="10" fontWeight="700">
          POLICY
        </text>
        <text x="390" y="246" fill="#ffffff" fontSize="8" fontWeight="600">
          &amp; CONTROL
        </text>
      </g>

      {/* connections inside boundary */}
      <g className="td-enter" stroke="#0284c7" strokeWidth="1.25" strokeDasharray="3 3" fill="none" style={{ animationDelay: "0.26s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.26s backwards" }}>
        <path d="M 240 135 Q 240 170 256 200 Q 320 210 382 212" />
        <path d="M 410 135 Q 410 170 360 200 Q 310 210 382 212" />
        <path d="M 580 135 Q 580 170 544 200 Q 480 210 382 212" />
      </g>

      {/* external enterprise network */}
      <g className="td-enter" style={{ animationDelay: "0.3s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.3s backwards" }}>
        <rect x="60" y="310" width="200" height="70" rx="10" fill="#ffffff" stroke="#64748b" strokeWidth="1.25" />
        <text x="70" y="332" fill="#0b1a3d" fontSize="11" fontWeight="700">
          ENTERPRISE NETWORK
        </text>
        <text x="70" y="348" fill="#475569" fontSize="10">
          Campus & branch & cloud on-ramps
        </text>
      </g>

      {/* managed operations */}
      <g className="td-enter" style={{ animationDelay: "0.34s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.34s backwards" }}>
        <rect x="280" y="310" width="200" height="70" rx="10" fill="#ffffff" stroke="#64748b" strokeWidth="1.25" />
        <text x="290" y="332" fill="#0b1a3d" fontSize="11" fontWeight="700">
          MANAGED OPERATIONS
        </text>
        <text x="290" y="348" fill="#475569" fontSize="10">
          NOC / SOC & lifecycle & SLA
        </text>
      </g>

      {/* external public services */}
      <g className="td-enter" style={{ animationDelay: "0.38s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.38s backwards" }}>
        <rect x="500" y="310" width="220" height="70" rx="10" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.25" strokeDasharray="4 4" />
        <text x="510" y="332" fill="#0b1a3d" fontSize="11" fontWeight="700">
          AUTHORIZED EXTERNAL SERVICES
        </text>
        <text x="510" y="348" fill="#475569" fontSize="10">
          OEM fulfillment & vendor RMA & escalation
        </text>
      </g>

      {/* links from left side zones into control node label */}
      <g className="td-enter" stroke="#475569" strokeWidth="1" fill="none" style={{ animationDelay: "0.42s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.42s backwards" }}>
        <line x1="200" y1="230" x2="382" y2="230" />
        <line x1="582" y1="230" x2="382" y2="230" />
      </g>

      {/* bottom annotation */}
      <text className="td-enter" x="70" y="395" fill="#475569" fontSize="10" fontWeight="600" letterSpacing="1" style={{ animationDelay: "0.46s", animation: "tdFade 0.55s cubic-bezier(0.2,0.7,0.2,1) 0.46s backwards" }}>
        PRIVATE BOUNDARY &middot; AUTHORIZED CONNECTIVITY &middot; MANAGED OPERATIONS
      </text>
    </svg>
  )
}
