import type { OlfactoryPyramid as Pyramid } from "../data/products";

export default function OlfactoryPyramid({ pyramid, compact = false }: { pyramid: Pyramid; compact?: boolean }) {
  const levels = [
    { title: "Salida", notes: pyramid.salida, width: "w-[68%]", color: "from-[#F7E2A7] to-[#D4A64F]" },
    { title: "Corazón", notes: pyramid.corazon, width: "w-[84%]", color: "from-[#E4BD72] to-[#B8893B]" },
    { title: "Fondo", notes: pyramid.fondo, width: "w-full", color: "from-[#B8893B] to-[#76511F]" },
  ];

  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      {levels.map((level) => (
        <div key={level.title} className={`${level.width} mx-auto rounded-xl bg-gradient-to-r ${level.color} px-3 py-2 text-center text-[#160D05] shadow-lg`}>
          <p className="text-[9px] font-bold uppercase tracking-[0.24em]">{level.title}</p>
          <p className={`${compact ? "text-[10px]" : "text-xs md:text-sm"} mt-1 leading-snug`}>
            {level.notes.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
}
