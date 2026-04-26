const buttonLabels = {
  bi: 'BI',
  cs: 'Customer Success',
  revops: 'RevOps',
}

function AdaptiveToggle({ mode, options, onChange }) {
  return (
    <div className="adaptive-toggle" aria-label="Adaptive tone selector">
      <span className="toggle-label">Viewing as:</span>
      <div className="toggle-controls" role="tablist" aria-label="Adaptive modes">
        {options.map((option) => {
          const active = option.value === mode

          return (
            <button
              key={option.value}
              type="button"
              className={`toggle-button${active ? ' is-active' : ''}`}
              onClick={() => onChange(option.value)}
              role="tab"
              aria-selected={active}
            >
              {buttonLabels[option.value] ?? option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default AdaptiveToggle
