import { TherapyNavbar } from "./components/TherapyNavbar";
import { TherapyHero } from "./components/TherapyHero";
import { TherapyAbout } from "./components/TherapyAbout";
import { TherapyServices } from "./components/TherapyServices";
import { TherapyApproach } from "./components/TherapyApproach";
import { TherapyContact } from "./components/TherapyContact";
import { TherapyFooter } from "./components/TherapyFooter";

export default function App() {
  return (
    <div className="size-full">
      <TherapyNavbar />
      <TherapyHero />
      <TherapyAbout />
      <TherapyServices />
      <TherapyApproach />
      <TherapyContact />
      <TherapyFooter />
    </div>
  );
}