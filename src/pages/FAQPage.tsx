import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on complexity. Small projects usually take 3-7 days, while larger full-stack applications may take 2-4 weeks.",
  },
  {
    question: "Will I receive the source code?",
    answer:
      "Yes. Complete source code is provided along with project files and setup instructions.",
  },
  {
    question: "Do you provide project documentation?",
    answer:
      "Yes. Project reports, technical documentation, PPTs and deployment guides can be included based on your requirements.",
  },
  {
    question: "Do you help with project presentations and viva?",
    answer:
      "Yes. Guidance for project explanation, demonstrations and viva preparation is available.",
  },
  {
    question: "Can I request modifications after delivery?",
    answer:
      "Minor modifications are supported after delivery. Larger changes may require additional charges depending on the scope.",
  },
  {
    question: "Do you deploy projects?",
    answer:
      "Yes. Deployment support is available for websites, APIs and databases. Hosting and third-party service costs are billed separately.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing depends on project type, authentication requirements, features, deployment requirements and additional services selected during booking.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "React, Flutter, React Native, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, Java, Spring Boot and Python.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<
    number | null
  >(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* Hero */}

      <section className="py-24 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-blue-500 font-medium">
            FAQ
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Frequently Asked Questions
          </h1>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Everything you need to know before
            booking your project.
          </p>

        </div>
      </section>

      {/* FAQ Section */}

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  overflow-hidden
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index
                        ? null
                        : index
                    )
                  }
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    p-6
                    text-left
                  "
                >
                  <span className="font-medium">
                    {faq.question}
                  </span>

                  <span className="text-blue-500 text-2xl">
                    {openIndex === index
                      ? "−"
                      : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-400 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Still Have Questions?
          </h2>

          <p className="text-slate-400 mt-4">
            Submit your requirements and we'll
            discuss everything in detail.
          </p>

          <Link
            to="/book"
            className="
              inline-block
              mt-8
              bg-blue-600
              hover:bg-blue-700
              px-8
              py-4
              rounded-xl
              font-medium
            "
          >
            Book Project
          </Link>

        </div>
      </section>

    </div>
  );
};

export default FAQPage;