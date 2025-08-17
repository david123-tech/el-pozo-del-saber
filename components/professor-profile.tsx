"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, User } from "lucide-react"

export function ProfessorProfile() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Perfil del Profesor</h2>
      <Card className="max-w-2xl mx-auto border-2 border-yellow-400">
        <CardHeader className="text-center">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="h-12 w-12 text-black" />
          </div>
          <CardTitle className="text-2xl text-card-foreground">Oscar Fabián Lizcano Toledo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-center">
            Ingeniero de Petróleos con más de 15 años de experiencia en la industria y la academia, apasionado por la
            docencia y la innovación en la educación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              onClick={() => window.open("mailto:oflizcanot@unillanos.edu.co")}
            >
              <Mail className="h-4 w-4 mr-2" />
              Contactar por Email
            </Button>

            <Button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold"
              onClick={() => window.open("https://wa.me/573183478951")}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
