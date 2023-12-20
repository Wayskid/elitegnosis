import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "fr",
  resources: {
    en: {
      translation: {
        nav: {
          home: "HOME",
          about: "ABOUT",
          contact: "CONTACT",
          simulator: "SIMULATOR",
        },
        home_page: {
          our_offers: "Our Offers",
          online_course: "Online Courses",
          online_comm: "Online Community",
          offer_btn: "Revenue Simulator",
          name: "Name",
          email: "Email",
          message: "Message",
          followers: "Number of Followers",
          engagements: "Engagement Rate",
          price: "Paid Online Course (monthly)",
          revenue_btn: "Estimate",
          result: "Your estimated income will be",
          help_you: "Let us help you get there",
          month: "month",
          go_again: "Calculate Again",
          get_in_touch: "Get in touch",
          send_message: "Send Message",
          phone: "Phone",
          address: "Address",
          social: "Social",
        },
      },
    },
    fr: {
      translation: {
        nav: {
          home: "MAISON",
          about: "À PROPOS",
          contact: "CONTACT",
          simulator: "SIMULATEUR",
        },
        home_page: {
          our_offers: "Nos offres",
          online_course: "Cours en ligne",
          online_comm: "Communauté en ligne",
          offer_btn: "Simulateur de revenus",
          name: "Nom",
          email: "E-mail",
          message: "Message",
          followers: "Nombre d'abonnés",
          engagements: "Taux d'Engagement",
          price: "Formation en Ligne ( par mois )",
          revenue_btn: "Estimation",
          result: "Votre revenu estimé sera",
          help_you: "Laissez-nous vous aider à y parvenir",
          month: "mois",
          go_again: "Calculer à nouveau",
          get_in_touch: "Entrer en contact",
          send_message: "Envoyer le message",
          phone: "Téléphone",
          address: "Adresse",
          social: "Sociale",
        },
      },
    },
  },
});

export default i18next;
