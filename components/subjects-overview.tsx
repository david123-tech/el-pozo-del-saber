import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy } from "lucide-react"
import Link from "next/link"

const subjects = [
  {
    name: "Balance de Materia y Energía",
    href: "/balance-materia-energia",
    topStudents: [
      { name: "Ana García", coins: 850 },
      { name: "Carlos López", coins: 820 },
      { name: "María Rodríguez", coins: 780 },
    ],
  },
  {
    name: "Geoquímica del Petróleo",
    href: "/geoquimica-petroleo",
    topStudents: [
      { name: "Pedro Martínez", coins: 920 },
      { name: "Laura Sánchez", coins: 890 },
      { name: "Diego Torres", coins: 860 },
    ],
  },
  {
    name: "Ingeniería de Yacimientos",
    href: "/ingenieria-yacimientos",
    topStudents: [
      { name: "Sofia Herrera", coins: 950 },
      { name: "Andrés Gómez", coins: 910 },
      { name: "Camila Ruiz", coins: 880 },
    ],
  },
]

export function SubjectsOverview() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Materias</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.href} className="border-2 border-yellow-400 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-card-foreground text-center">{subject.name}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium text-muted-foreground">Top 3 Estudiantes</span>
                </div>

                {subject.topStudents.map((student, index) => (
                  <div key={student.name} className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0
                            ? "bg-yellow-400 text-black"
                            : index === 1
                              ? "bg-gray-300 text-black"
                              : "bg-yellow-600 text-white"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="text-card-foreground">{student.name}</span>
                    </span>
                    <span className="font-semibold text-yellow-600">{student.coins} coins</span>
                  </div>
                ))}
              </div>

              <Link href={subject.href}>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Ver Materia Completa
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
