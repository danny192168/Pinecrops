import { SearchIcon } from "lucide-react";

import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export function SearchBar() {
  return (
    <Field className="max-w-xs">
      <InputGroup className="bg-secondary">
        <InputGroupInput
          id="inline-start-input"
          className="text-gray-700"
          placeholder="Search..."
        />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
