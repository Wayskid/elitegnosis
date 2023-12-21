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
          online_course_des:
            "Allow your followers to learn more from you. Talk about your passions or anything else! ",
          online_comm: "Online Community",
          online_comm_des:
            "Allow your followers to connect more with you but most importantly connect between each other. Create a stronger community!",
          offer_btn: "Revenue Simulator",
          name: "Name",
          email: "Email",
          message: "Message",
          followers: "Number of Followers",
          engagements: "Engagement Rate",
          price: "Paid Online Course / Community (monthly)",
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
        contact_page: {
          add_value: "Want to Add Value To Your Audience?",
          make_it_happen: "Let's Make It Happen!",
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
          online_course_des:
            "Apprend à tes abonnés tes passions. Pour passer de simple créateur à Mentor!",
          online_comm: "Communauté en ligne",
          online_comm_des:
            "Permets à tes abonnés de connecter plus avec toi mais surtout de connecter plus entre eux. Créer un communauté plus soudée et loyale!",
          offer_btn: "Simulateur de revenus",
          name: "Nom",
          email: "E-mail",
          message: "Message",
          followers: "Nombre d'abonnés",
          engagements: "Taux d'Engagement",
          price: "Formation / Communauté en Ligne ( par mois )",
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
        contact_page: {
          add_value: "Tu Veux Ajouter De La Valeur À Ton Audience ?",
          make_it_happen: "Parlons-En!",
        },
      },
    },
  },
});

export default i18next;
