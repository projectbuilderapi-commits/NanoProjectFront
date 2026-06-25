import { useState } from "react";
import { Link } from "react-router-dom";
import { createContact } from "../services/contactService";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

const contactMethods = [
  {
    title: "Email",
    value: "projectbuilderapi@gmail.com",
    icon: "📧",
  },
  {
    title: "WhatsApp",
    value: "Adding Soon",
    icon: "💬",
  },
  {
    title: "GitHub",
    value: "Adding Soon",
    icon: "💻",
  },
  {
    title: "LinkedIn",
    value:"Adding Soon",
    icon: "🔗",
  },
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const handleSubmit = async (
     e: React.FormEvent
    ) => {
      e.preventDefault();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!formData.name.trim()) return alert("Name is required");
      if (!formData.email.trim()) return alert("Email is required");
      if (!emailRegex.test(formData.email)) return alert("Please enter a valid email address");
      if (!formData.subject.trim()) return alert("Subject is required");
      if (!formData.message.trim()) return alert("Message is required");

      try {
        setLoading(true);

        await createContact(
          formData
        );

        toast.success(
          "Message sent successfully"
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        if(error instanceof Error){
          toast.error(
            error.message
          )
        }
      } finally {
        setLoading(false);
      }
    };
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* Hero */}

      <section className="py-24 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-blue-500 font-medium">
            CONTACT
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Let's Discuss Your Project
          </h1>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have questions or need a custom
            solution? Reach out and let's
            discuss your requirements.
          </p>

        </div>
      </section>

      {/* Contact Section */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Info */}

            <div>

              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-5">

                {contactMethods.map((item) => (
                  <div
                    key={item.title}
                    className="
                      bg-slate-900
                      border
                      border-slate-800
                      rounded-2xl
                      p-6
                    "
                  >
                    <div className="flex items-center gap-4">

                      <div className="text-3xl">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-slate-400">
                          {item.value}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* Contact Form */}

            <div
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
              "
            >
              <h2 className="text-3xl font-bold mb-8">
                Quick Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-xl
                    p-4
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-xl
                    p-4
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-xl
                    p-4
                  "
/>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-slate-950
                    border
                    border-slate-700
                    rounded-xl
                    p-4
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    py-4
                    rounded-xl
                    font-medium
                  "
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready To Start?
          </h2>

          <p className="text-slate-400 mt-4">
            Get a project estimate in minutes
            using our booking system.
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

export default ContactPage;