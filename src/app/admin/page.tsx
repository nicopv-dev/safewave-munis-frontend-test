import { Metadata } from "next";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart } from "recharts";
import Example from "@/components/admin/charts/example";
import CustomPieChart from "@/components/admin/charts/pie-chart";
import CustomRadialChart from "@/components/admin/charts/radial-chart";

export const metadata: Metadata = {
  title: "Municipalidad de Test - SafeWave",
};

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Resumen</h2>
        <p className="text-gray-500 text-sm">
          Aqui se depliegan un resumen de las redes vecinales de tu comuna y
          todas las publicaciones
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <CustomRadialChart title="Robos" />
        <CustomRadialChart title="Accidentes" />
        <CustomRadialChart title="Personas Extraviadas" />
        <CustomRadialChart title="Otro" />
      </div>

      <div className="col-span-2">
        <CustomPieChart title="Tipos de publicaciones" />
      </div>
    </div>
  );
}
