"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Plus, Minus, AlertTriangle, Info } from "lucide-react"

const earnCoinsRules = [
  {
    title: "Participación en clase",
    coins: "+10 coins",
    description:
      "Se otorgan por participar activamente en discusiones, hacer preguntas pertinentes o contribuir al aprendizaje del grupo.",
  },
  {
    title: "Responder voluntariamente una pregunta difícil",
    coins: "+15 coins",
    description:
      "Recompensa por demostrar un profundo conocimiento y valentía al abordar preguntas que van más allá del material básico.",
  },
  {
    title: "Resolver un ejercicio en el tablero voluntariamente",
    coins: "+20 coins",
    description:
      "Para estudiantes que toman la iniciativa de resolver problemas frente a la clase, demostrando su comprensión.",
  },
  {
    title: "Explicar un tema complejo con claridad frente al grupo",
    coins: "+20 coins",
    description: "Premia la habilidad de simplificar y comunicar ideas complejas de manera efectiva a sus compañeros.",
  },
  {
    title: "Asistencia diaria",
    coins: "+5 coins",
    description:
      "Se otorgan por asistir a cada clase. Solo aplica para llegadas antes de 10 minutos de iniciar la clase.",
  },
  {
    title: "Asistencia perfecta en una semana",
    coins: "+10 coins",
    description: "Un bono adicional por no tener ninguna falta durante una semana completa.",
  },
  {
    title: "Puntualidad constante (un mes sin llegar tarde)",
    coins: "+20 coins",
    description: "Recompensa mayor por la disciplina y el compromiso de llegar a tiempo durante un mes.",
  },
  {
    title: "Eventos especiales (talleres, trabajos adicionales)",
    coins: "Variable",
    description:
      "Se podrán adjuntar coins adicionales en eventos que el docente defina y establezca, como talleres o trabajos adicionales.",
  },
]

const spendCoinsRules = [
  {
    title: "Poder saltarse un quiz",
    coins: "300 coins",
    description:
      "Permite al estudiante no presentar un quiz y obtener una calificación de 5.0. No aplicable a parciales.",
  },
  {
    title: "Omitir una pregunta del parcial",
    coins: "300 coins",
    description:
      "Válido para una sola pregunta en un examen parcial, cuyo valor no exceda 1.0 punto. Se debe notificar antes de empezar.",
  },
  {
    title: "Pista en los parciales",
    coins: "150 coins",
    description:
      "El profesor proporcionará una pista clave para una pregunta a elección del estudiante durante el examen.",
  },
  {
    title: "Corregir una sección de una tarea con puntos",
    coins: "100 coins",
    description:
      "Permite al estudiante reenviar una sección específica de una tarea ya calificada para mejorar su nota.",
  },
  {
    title: "En exposición: omitir una pregunta del público",
    coins: "100 coins",
    description: "Da el derecho a no responder una pregunta del público o de los compañeros durante una presentación.",
  },
  {
    title: "Entrega tardía sin penalización (12 horas extra)",
    coins: "100 coins",
    description:
      "Otorga un plazo adicional de 12 horas para la entrega de una tarea sin ninguna penalización por tardanza.",
  },
  {
    title: "Elegir compañero de equipo en un proyecto",
    coins: "150 coins",
    description:
      "Permite al estudiante elegir a su compañero o grupo para un proyecto, sujeto a la aprobación del profesor.",
  },
  {
    title: 'Revisión de calificación "injusta"',
    coins: "100 coins",
    description:
      "Si un estudiante considera que una calificación es injusta, puede solicitar una segunda revisión detallada por parte del profesor.",
  },
  {
    title: "Tiempo extra en un quiz (5 minutos adicionales)",
    coins: "80 coins",
    description: "Añade 5 minutos al tiempo total de un quiz para poder revisar y completar las respuestas.",
  },
  {
    title: '"Borrón y cuenta nueva" en una tarea (rehacerla)',
    coins: "200 coins",
    description:
      "Permite al estudiante rehacer completamente una tarea (no un proyecto grande) y reemplazar la calificación anterior.",
  },
]

const penaltyRules = [
  {
    title: "Falta injustificada",
    coins: "–10 coins",
    description: "La inasistencia a clase sin justificación médica o de fuerza mayor resultará en esta penalización.",
  },
  {
    title: "Uso del celular sin permiso",
    coins: "–30 coins",
    description:
      "Para mantener el enfoque en clase, el uso de dispositivos móviles para fines no académicos será penalizado.",
  },
  {
    title: "Ser disruptivo en clase/presentación",
    coins: "–30 coins",
    description: "Interrumpir, hablar fuera de turno o cualquier comportamiento que afecte el ambiente de aprendizaje.",
  },
]

const balanceRules = [
  'Cada estudiante inicia con un saldo de 50 "coins" de cortesía.',
  'El saldo total de "coins" puede ser negativo.',
  'No se permite transferir "coins" entre compañeros.',
  'El "banco de coins" se publicará semanalmente.',
  'Si un estudiante acumula 5 penalizaciones (independientemente de la categoría o el valor individual), pierde automáticamente el derecho a canjear "coins" en el examen parcial de esa materia.',
]

function RuleSection({
  title,
  rules,
  icon,
  color,
}: {
  title: string
  rules: Array<{ title: string; coins: string; description: string }>
  icon: React.ReactNode
  color: string
}) {
  return (
    <Card className="border-2 border-yellow-400">
      <CardHeader>
        <CardTitle className={`flex items-center gap-2 ${color}`}>
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {rules.map((rule, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left bg-muted hover:bg-muted/80 rounded-lg transition-colors">
              <div className="flex items-center justify-between w-full">
                <span className="font-medium text-card-foreground">{rule.title}</span>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${color}`}>{rule.coins}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-3 py-2 text-sm text-muted-foreground bg-card border-l-4 border-yellow-400 ml-3">
              {rule.description}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  )
}

export function GameRules() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Reglas del Juego</h2>

      <div className="space-y-8">
        <RuleSection
          title="Cómo Ganar Coins"
          rules={earnCoinsRules}
          icon={<Plus className="h-5 w-5" />}
          color="text-green-600"
        />

        <RuleSection
          title="Canjear Coins"
          rules={spendCoinsRules}
          icon={<Minus className="h-5 w-5" />}
          color="text-blue-600"
        />

        <RuleSection
          title="Penalizaciones"
          rules={penaltyRules}
          icon={<AlertTriangle className="h-5 w-5" />}
          color="text-red-600"
        />

        <Card className="border-2 border-yellow-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-muted-foreground">
              <Info className="h-5 w-5" />
              Reglas de Equilibrio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {balanceRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
