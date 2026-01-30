import Layout from "../components/Layout";
import Link from "next/link";

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="BestFindsUK privacy policy - how we collect, use, and protect your information."
    >
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
              Privacy Policy
            </h1>

            <div className="prose text-grey space-y-6">
              <p className="text-lg">
                At BestFindsUK, we take your privacy seriously. This policy explains
                what information we collect, how we use it, and your rights regarding
                your data.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Information We Collect
              </h2>

              <h3 className="text-lg font-medium text-charcoal mt-6 mb-3">
                Automatically Collected Information
              </h3>
              <p>When you visit BestFindsUK, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on site</li>
                <li>General geographic location (country/city level)</li>
              </ul>
              <p>
                This information is collected through cookies and similar technologies
                and is used to improve our site and understand how visitors interact
                with our content.
              </p>

              <h3 className="text-lg font-medium text-charcoal mt-6 mb-3">
                Information You Provide
              </h3>
              <p>
                We may collect information you voluntarily provide, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email address (if you subscribe to our newsletter)</li>
                <li>Contact information (if you reach out to us)</li>
                <li>Feedback and product suggestions</li>
              </ul>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improve our website content and user experience</li>
                <li>Send newsletters (only if you've subscribed)</li>
                <li>Respond to your enquiries</li>
                <li>Analyse site traffic and usage patterns</li>
                <li>Prevent fraud and abuse</li>
              </ul>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Cookies and Tracking
              </h2>
              <p>
                BestFindsUK uses cookies and similar tracking technologies. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential cookies:</strong> Required for basic site functionality
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how visitors use
                  our site (we use Google Analytics)
                </li>
                <li>
                  <strong>Affiliate cookies:</strong> Used by our affiliate partners to
                  track referrals when you click product links
                </li>
              </ul>
              <p>
                You can control cookie preferences through your browser settings. Note
                that disabling certain cookies may affect site functionality.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Third-Party Services
              </h2>
              <p>
                We work with third-party services that may collect information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> For website analytics
                </li>
                <li>
                  <strong>Amazon Associates:</strong> For affiliate link tracking
                </li>
                <li>
                  <strong>Other affiliate networks:</strong> For tracking purchases
                  made through our links
                </li>
              </ul>
              <p>
                These services have their own privacy policies governing their use
                of your information.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Data Retention
              </h2>
              <p>
                We retain personal information only as long as necessary for the
                purposes outlined in this policy. Analytics data is typically
                retained for 26 months. If you unsubscribe from our newsletter,
                we remove your email from our mailing list.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Your Rights (GDPR)
              </h2>
              <p>
                If you're in the UK or European Economic Area, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please{" "}
                <Link href="/contact" className="text-sage-dark hover:text-terracotta underline">
                  contact us
                </Link>.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect your personal information. However, no method of transmission
                over the internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Children's Privacy
              </h2>
              <p>
                BestFindsUK is not directed at children under 16. We do not knowingly
                collect personal information from children. If you believe we have
                collected information from a child, please contact us immediately.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Changes will
                be posted on this page with an updated revision date. We encourage
                you to review this policy periodically.
              </p>

              <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or our data practices,
                please{" "}
                <Link href="/contact" className="text-sage-dark hover:text-terracotta underline">
                  contact us
                </Link>.
              </p>

              <p className="text-sm text-grey-light mt-8">
                Last updated: January 2026
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-cream-dark">
              <Link
                href="/"
                className="text-sage-dark hover:text-terracotta inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
