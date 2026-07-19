import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  // NumberFieldScrubArea,
} from "@/components/reui/number-field";

export function QuantityNumberField() {
  return (
    <div className="w-full max-w-24">
      <NumberField size="sm" defaultValue={1} min={1} max={100}>
        {/* <NumberFieldScrubArea label="Quantity" /> */}
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
  );
}
