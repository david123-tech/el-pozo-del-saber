"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Download, Filter, Target } from "lucide-react"
import { useState } from "react"

const getStudentsForSubject = (title: string) => {
  const baseStudents = {
    "Balance de Materia y Energía": [
      { id: 1, name: "Ana García", coins: 850, penalties: 1 },
      { id: 2, name: "Carlos López", coins: 820, penalties: 0 },
      { id: 3, name: "María Rodríguez", coins: 780, penalties: 2 },
      { id: 4, name: "Pedro Martínez", coins: 750, penalties: 1 },
      { id: 5, name: "Laura Sánchez", coins: 720, penalties: 0 },
      { id: 6, name: "Diego Torres", coins: 690, penalties: 3 },
      { id: 7, name: "Sofia Herrera", coins: 650, penalties: 1 },
      { id: 8, name: "Andrés Gómez", coins: 620, penalties: 2 },
      { id: 9, name: "Camila Ruiz", coins: 580, penalties: 4 },
      { id: 10, name: "Juan Pérez", coins: 550, penalties: 1 },
    ],
    "Geoquímica del Petróleo": [
      { id: 1, name: "Valentina Castro", coins: 920, penalties: 0 },
      { id: 2, name: "Sebastián Morales", coins: 880, penalties: 1 },
      { id: 3, name: "Isabella Vargas", coins: 850, penalties: 2 },
      { id: 4, name: "Mateo Jiménez", coins: 820, penalties: 0 },
      { id: 5, name: "Lucía Ramírez", coins: 780, penalties: 1 },
      { id: 6, name: "Gabriel Silva", coins: 750, penalties: 3 },
      { id: 7, name: "Natalia Ortiz", coins: 720, penalties: 2 },
      { id: 8, name: "Daniel Rojas", coins: 680, penalties: 1 },
      { id: 9, name: "Alejandra Mendoza", coins: 650, penalties: 4 },
      { id: 10, name: "Felipe Guerrero", coins: 600, penalties: 2 },
    ],
    "Ingeniería de Yacimientos": [
      { id: 1, name: "Camilo Herrera", coins: 780, penalties: 2 },
      { id: 2, name: "Valeria Núñez", coins: 750, penalties: 1 },
      { id: 3, name: "Nicolás Restrepo", coins: 720, penalties: 0 },
      { id: 4, name: "Mariana Ospina", coins: 690, penalties: 3 },
      { id: 5, name: "Santiago Mejía", coins: 660, penalties: 1 },
      { id: 6, name: "Daniela Cardona", coins: 630, penalties: 2 },
      { id: 7, name: "Alejandro Vega", coins: 600, penalties: 4 },
      { id: 8, name: "Carolina Muñoz", coins: 570, penalties: 1 },
      { id: 9, name: "Esteban Ríos", coins: 540, penalties: 3 },
      { id: 10, name: "Sofía Delgado", coins: 510, penalties: 2 },
    ],
  }

  return baseStudents[title as keyof typeof baseStudents] || baseStudents["Balance de Materia y Energía"]
}

interface SubjectPageProps {
  title: string
  description: string
  href: string
}

export function SubjectPage({ title, description }: SubjectPageProps) {
  const [filter, setFilter] = useState<"all" | "top5" | "risk">("all")

  const mockStudents = getStudentsForSubject(title)
  const sortedStudents = [...mockStudents].sort((a, b) => b.coins - a.coins)

  const getFilteredStudents = () => {
    switch (filter) {
      case "top5":
        return sortedStudents.slice(0, 5)
      case "risk":
        return sortedStudents.slice(-3)
      default:
        return sortedStudents
    }
  }

  const filteredStudents = getFilteredStudents()
  const totalCoins = sortedStudents.reduce((sum, student) => sum + student.coins, 0)
  const averageCoins = Math.round(totalCoins / sortedStudents.length)

  const downloadPDF = () => {
    // Mock PDF download functionality
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Posición,Nombre,Coins,Penalizaciones\n" +
      filteredStudents
        .map((student, index) => `${index + 1},${student.name},${student.coins},${student.penalties}`)
        .join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `ranking-${title.toLowerCase().replace(/\s+/g, "-")}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Progress Barrel and Goals */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-2 border-yellow-400">
          <CardHeader>
            <CardTitle className="text-center">Progreso del Curso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="w-32 h-48 mx-auto relative bg-muted rounded-lg border-4 border-yellow-600 overflow-hidden">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-yellow-500 to-yellow-400 transition-all duration-1000"
                  style={{ height: `${Math.min((averageCoins / 10000) * 100, 100)}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black font-bold text-sm">{averageCoins} coins</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Promedio del curso</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progreso hacia 5,000 coins</span>
                <span className="text-sm text-gray-600">{Math.min((averageCoins / 5000) * 100, 100).toFixed(1)}%</span>
              </div>
              <Progress value={Math.min((averageCoins / 5000) * 100, 100)} className="h-2" />

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progreso hacia 10,000 coins</span>
                <span className="text-sm text-gray-600">{Math.min((averageCoins / 10000) * 100, 100).toFixed(1)}%</span>
              </div>
              <Progress value={Math.min((averageCoins / 10000) * 100, 100)} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-yellow-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-yellow-500" />
              Metas del Curso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/30">
              <h3 className="font-semibold text-yellow-400 mb-2">🎯 Meta 1: 5,000 Coins</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Recompensa:</strong> Pregunta bonus en el siguiente parcial
              </p>
            </div>

            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/30">
              <h3 className="font-semibold text-yellow-400 mb-2">🏆 Meta 2: 10,000 Coins</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Recompensa:</strong> Recompensa libre decidida por el curso
              </p>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">¡Trabajen juntos para alcanzar estas metas!</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ranking Table */}
      <Card className="border-2 border-yellow-400">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Ranking de Estudiantes
            </CardTitle>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as "all" | "top5" | "risk")}
                  className="border border-border bg-background text-foreground rounded-md px-3 py-1 text-sm"
                >
                  <option value="all">Todos los estudiantes</option>
                  <option value="top5">Top 5</option>
                  <option value="risk">En riesgo (últimos 3)</option>
                </select>
              </div>

              <Button onClick={downloadPDF} size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Download className="h-4 w-4 mr-2" />
                Descargar PDF
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Posición</th>
                  <th className="text-left py-3 px-4 font-semibold">Estudiante</th>
                  <th className="text-right py-3 px-4 font-semibold">Coins</th>
                  <th className="text-right py-3 px-4 font-semibold">Penalizaciones</th>
                  <th className="text-center py-3 px-4 font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => {
                  const actualPosition = sortedStudents.findIndex((s) => s.id === student.id) + 1
                  const isTop3 = actualPosition <= 3
                  const isRisk = actualPosition > sortedStudents.length - 3
                  const cannotUseCoins = student.penalties >= 5

                  return (
                    <tr
                      key={student.id}
                      className={`border-b border-border hover:bg-accent/50 ${
                        isTop3 ? "bg-yellow-500/10" : isRisk ? "bg-red-500/10" : ""
                      }`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              actualPosition === 1
                                ? "bg-yellow-400 text-black"
                                : actualPosition === 2
                                  ? "bg-gray-300 text-black"
                                  : actualPosition === 3
                                    ? "bg-yellow-600 text-white"
                                    : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {actualPosition}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium">{student.name}</td>
                      <td className="py-3 px-4 text-right">
                        <span className={`font-bold ${student.coins < 0 ? "text-red-600" : "text-yellow-600"}`}>
                          {student.coins}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className={`${student.penalties >= 5 ? "text-red-600 font-bold" : "text-gray-600"}`}>
                          {student.penalties}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        {cannotUseCoins && (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Sin canje</span>
                        )}
                        {isTop3 && !cannotUseCoins && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Top 3</span>
                        )}
                        {isRisk && !cannotUseCoins && (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">En riesgo</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-muted-foreground text-center">
            Mostrando {filteredStudents.length} de {sortedStudents.length} estudiantes
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
