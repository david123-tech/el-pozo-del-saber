import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Trophy } from "lucide-react"

export function WelcomeSection() {
  return (
    <section className="text-center space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Bienvenido a <span className="text-yellow-500">El Pozo del Saber</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Una plataforma educativa gamificada diseñada para estudiantes de ingeniería de petróleos. Aprende, participa y
          acumula coins mientras dominas las materias más importantes de tu carrera.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card className="border-2 border-yellow-400">
          <CardContent className="p-6 text-center">
            <GraduationCap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Aprende Jugando</h3>
            <p className="text-muted-foreground">Sistema de recompensas que motiva tu participación activa en clase</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-yellow-400">
          <CardContent className="p-6 text-center">
            <Target className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Metas Claras</h3>
            <p className="text-muted-foreground">Objetivos específicos por materia con recompensas especiales</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-yellow-400">
          <CardContent className="p-6 text-center">
            <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Competencia Sana</h3>
            <p className="text-muted-foreground">Rankings por materia que fomentan la excelencia académica</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
