import { NeuralNetworkIcon } from "hugeicons-react";

export default function RedesVecinales() {
  return (
    <div>
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <NeuralNetworkIcon />
          <h2 className="text-2xl font-semibold">Redes vecinales</h2>
        </div>
        <p className="text-gray-500 text-sm">
          Aqui se depliegan las redes vecinales de tu comuna
        </p>
      </div>
    </div>
  );
}
