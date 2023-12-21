import React from "react";

export default function About({ lightDark }) {
  return (
    <div className="px-6 md:px-8 mt-32">
      <div className="pt-10 mb-20">
        <p
          className={`text-5xl showcaseHeader ${
            lightDark ? "text-white" : "text-black"
          }`}
        >
          Our Vision
        </p>
        <p
          className={`text-lg mt-5 ${lightDark ? "text-white" : "text-black"}`}
        >
          To empower passionate creators and elevate their influence by
          providing innovative digital solutions. We envision a world where
          every content creator can seamlessly transition from influencer to
          mentor, guiding their audience through immersive online master courses
          and fostering genuine connections within exclusive paid online
          communities.
        </p>
      </div>
      <div className="">
        <p
          className={`text-5xl showcaseHeader ${
            lightDark ? "text-white" : "text-black"
          }`}
        >
          Our Mission
        </p>
        <p
          className={`text-lg mt-5 ${lightDark ? "text-white" : "text-black"}`}
        >
          Our Mission At Elite Gnosis, our mission is to transform digital
          content creators into industry leaders. We are committed to enabling
          creators to monetize their expertise by offering comprehensive website
          solutions. Through personalized online master courses, we empower
          creators to transcend traditional content boundaries and become
          mentors. Our paid online communities provide a space for meaningful
          interactions, enabling creators to cultivate a dedicated and engaged
          audience. By fostering education, connection, and community, we strive
          to redefine the creator experience and contribute to the growth of
          authentic online relationships.
        </p>
      </div>
    </div>
  );
}
