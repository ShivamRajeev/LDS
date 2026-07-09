const FilterBlock = ({ title, options, selectedValue, onChange }) => {
  return (
    <fieldset>
      <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
        {title}
      </legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-2 text-sm text-brand-ivory/80">
            <input
              type="radio"
              name={title}
              checked={selectedValue === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 border-brand-ivory/30 bg-brand-charcoal text-brand-gold focus:ring-brand-gold"
            />
            <span>{option}</span>
          </label>
        ))}
        <button
          type="button"
          onClick={() => onChange("")}
          className="mt-2 text-xs uppercase tracking-[0.12em] text-brand-ivory/60 hover:text-brand-gold"
        >
          Clear
        </button>
      </div>
    </fieldset>
  );
};

const FilterSidebar = ({ filters, selectedFilters, setSelectedFilters }) => {
  const handleFilterChange = (key, value) => {
    setSelectedFilters((previous) => ({ ...previous, [key]: value }));
  };

  return (
    <aside className="rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-5 backdrop-blur-sm">
      <h3 className="mb-5 font-display text-xl text-brand-cream">Filter Products</h3>
      <div className="space-y-7">
        <FilterBlock
          title="Indoor / Outdoor"
          options={filters.application}
          selectedValue={selectedFilters.application}
          onChange={(value) => handleFilterChange("application", value)}
        />
        <FilterBlock
          title="Mounting"
          options={filters.mounting}
          selectedValue={selectedFilters.mounting}
          onChange={(value) => handleFilterChange("mounting", value)}
        />
        <FilterBlock
          title="Color Tone"
          options={filters.colorTone}
          selectedValue={selectedFilters.colorTone}
          onChange={(value) => handleFilterChange("colorTone", value)}
        />
        <FilterBlock
          title="Sector"
          options={filters.sector}
          selectedValue={selectedFilters.sector}
          onChange={(value) => handleFilterChange("sector", value)}
        />
      </div>
    </aside>
  );
};

export default FilterSidebar;
