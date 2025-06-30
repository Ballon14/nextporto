import { portfolioData } from "../../lib/data"
import ContactSection from "../components/sections/ContactSection"

export const metadata = {
    title: "Contact",
    description:
        "Hubungi programmer gabut untuk kolaborasi atau diskusi coding.",
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-dark-900">
            <ContactSection profile={portfolioData.profile} />
        </div>
    )
}
