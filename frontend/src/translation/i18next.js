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
          level: "Level Up!",
          your_followers: "Your Followers Deserve It!",
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
        chat_bubble: {
          how_to_help: "How can we help?",
          response: "We usually respond in a few hours",
          subject: "Subject",
          on_it: "We're on it!",
          done: "You'll receive an email reply within a few hours.",
        },
        about_page: {
          vision: "Our Vision",
          our_vision:
            "To empower passionate creators and elevate their influence by providing innovative digital solutions. We envision a world where every content creator can seamlessly transition from influencer to mentor, guiding their audience through immersive online master courses and fostering genuine connections within exclusive paid online communities.",
          mission: "Our Mission",
          our_mission:
            "Our Mission At Elite Gnosis, our mission is to transform digital content creators into industry leaders. We are committed to enabling creators to monetize their expertise by offering comprehensive website solutions. Through personalized online master courses, we empower creators to transcend traditional content boundaries and become mentors. Our paid online communities provide a space for meaningful interactions, enabling creators to cultivate a dedicated and engaged audience. By fostering education, connection, and community, we strive to redefine the creator experience and contribute to the growth of authentic online relationships.",
        },
      },
    },
    fr: {
      translation: {
        nav: {
          home: "ACCUEIL",
          about: "À PROPOS",
          contact: "CONTACT",
          simulator: "SIMULATEUR",
        },
        home_page: {
          level: "Level Up!",
          your_followers: "Tes Abonnés Le Méritent!",
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
        chat_bubble: {
          how_to_help: "Comment pouvons nous aider?",
          response: "Nous répondons généralement en quelques heures",
          subject: "Sujette",
          on_it: "Nous nous en occupons!",
          done: "Vous recevrez une réponse par e-mail dans quelques heures.",
        },
        about_page: {
          vision: "Notre Vision",
          our_vision:
            "Permettre aux créateurs passionnés d'accroître leur influence grâce à des solutions numériques novatrices. Nous envisageons un monde où chaque créateur de contenu peut passer aisément du status de l'influenceur à celui du mentor, guidant son public à travers des cours en ligne immersifs et favorisant des connexions authentiques au sein de communautés en ligne exclusives payantes.",
          mission: "Notre Mission",
          our_mission:
            "Chez Elite Gnosis, notre mission est de transformer les créateurs de contenu numérique en leaders de l'industrie. Nous nous engageons à permettre aux créateurs de monétiser leur expertise en offrant des solutions de site web complètes. À travers des cours en ligne personnalisés, nous permettons aux créateurs de transcender les limites traditionnelles du contenu et à devenir des mentors. Nos communautés en ligne payantes offrent un espace pour des interactions significatives, permettant aux créateurs de cultiver un public dévoué et engagé. En favorisant l'éducation, la connexion et la communauté, nous redéfinissons l'expérience du créateur et contribuons à la croissance d'authentiques relations en ligne.",
        },
      },
    },
  },
});

export default i18next;
