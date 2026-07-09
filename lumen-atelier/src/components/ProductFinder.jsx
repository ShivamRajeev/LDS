import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { finderOptions, products } from "../data/products";

const SelectField = ({ label, value, onChange, options }) => {
  return (
    <label className="text-sm text-brand-ivory/80">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-brand-ivory/20 bg-brand-black px-3 py-2 text-brand-cream outline-none transition focus:border-brand-gold"
      >
        <option value="">Any</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

const ProductFinder = () => {
  const [criteria, setCriteria] = useState({
    application: "",
    mounting: "",
    lightingType: "",
    colorTemperature: "",
  });

  const matches = useMemo(() => {
    return products.filter((product) => {
      const applicationMatch =
        !criteria.application || product.applications.includes(criteria.application);
      const mountingMatch = !criteria.mounting || product.mounting === criteria.mounting;
      const typeMatch = !criteria.lightingType || product.lightingType === criteria.lightingType;
      const colorMatch =
        !criteria.colorTemperature ||
        product.colorTemperature === criteria.colorTemperature ||
        (criteria.colorTemperature !== "Tunable" &&
          product.specifications.colorTemperature.includes(criteria.colorTemperature));

      return applicationMatch && mountingMatch && typeMatch && colorMatch;
    });
  }, [criteria]);

  const updateCriteria = (key, value) => {
    setCriteria((previous) => ({ ...previous, [key]: value }));
  };

  return (
    <section className="space-y-8">
      <div className="grid gap-4 rounded-2xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField
          label="Application"
          value={criteria.application}
          onChange={(value) => updateCriteria("application", value)}
          options={finderOptions.application}
        />
        <SelectField
          label="Mounting"
          value={criteria.mounting}
          onChange={(value) => updateCriteria("mounting", value)}
          options={finderOptions.mounting}
        />
        <SelectField
          label="Lighting Type"
          value={criteria.lightingType}
          onChange={(value) => updateCriteria("lightingType", value)}
          options={finderOptions.lightingType}
        />
        <SelectField
          label="Color Temperature"
          value={criteria.colorTemperature}
          onChange={(value) => updateCriteria("colorTemperature", value)}
          options={finderOptions.colorTemperature}
        />
      </div>

      {matches.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {matches.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-brand-ivory/10 bg-brand-charcoal/70 p-6 text-brand-ivory/75">
          No exact matches found. Try broadening your selections.
        </p>
      )}
    </section>
  );
};

export default ProductFinder;
