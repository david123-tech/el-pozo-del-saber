"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Filter } from "lucide-react"
import { useState } from "react"

const events = [
  {
    id: 1,
    title: "Parcial Balance de Materia",
    date: "2024-03-15",
    subject: "Balance de Materia y Energía",
    type: "Examen",
  },
  {
    id: 2,
    title: "Taller Geoquímica",
    date: "2024-03-18",
    subject: "Geoquímica del Petróleo",
    type: "Taller",
  },
  {
    id: 3,
    title: "Presentación Yacimientos",
    date: "2024-03-22",
    subject: "Ingeniería de Yacimientos",
    type: "Presentación",
  },
  {
    id: 4,
    title: "Quiz Balance de Energía",
    date: "2024-03-25",
    subject: "Balance de Materia y Energía",
    type: "Quiz",
  },
]

export function EventsCalendar() {
  const [selectedSubject, setSelectedSubject] = useState<string>("Todas")

  const subjects = ["Todas", "Balance de Materia y Energía", "Geoquímica del Petróleo", "Ingeniería de Yacimientos"]

  const filteredEvents =
    selectedSubject === "Todas" ? events : events.filter((event) => event.subject === selectedSubject)

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Calendario de Eventos</h2>

      <Card className="border-2 border-yellow-400">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-yellow-500" />
              Próximos Eventos
            </CardTitle>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border border-border bg-background text-foreground rounded-md px-3 py-1 text-sm"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-border rounded-lg hover:bg-muted/50"
              >
                <div>
                  <h3 className="font-semibold text-card-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.subject}</p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <p className="text-sm font-medium text-yellow-600">{event.type}</p>
                  <p className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString("es-ES")}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
