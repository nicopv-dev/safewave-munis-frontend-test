import { UserSearch01Icon } from "hugeicons-react";

export default function Vecinos() {
  return (
    <div>
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <UserSearch01Icon />
          <h2 className="text-2xl font-semibold">Vecinos</h2>
        </div>

        <p className="text-gray-500 text-sm">
          Podras visualizar la lista de vecinos de tu comuna.
        </p>
      </div>
    </div>
  );
}
