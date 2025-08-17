import { WelcomeSection } from "@/components/welcome-section"
import { ProfessorProfile } from "@/components/professor-profile"
import { EventsCalendar } from "@/components/events-calendar"
import { SubjectsOverview } from "@/components/subjects-overview"
import { GameRules } from "@/components/game-rules"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-12">
        <WelcomeSection />
        <ProfessorProfile />
        <EventsCalendar />
        <SubjectsOverview />
        <GameRules />
      </div>
    </div>
  )
}
