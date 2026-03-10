import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "March 2025";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-sm leading-7 text-foreground/85">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy explains how WailBrew ("we", "us", or "our") collects, uses,
                and protects information when you visit our website at{" "}
                <span className="text-primary">wailbrew.app</span> (the "Site"). We are committed
                to protecting your privacy in accordance with the General Data Protection Regulation
                (GDPR) and applicable German data protection law (BDSG).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Controller</h2>
              <p>
                The controller responsible for data processing on this website is:
              </p>
              <div className="mt-3 p-4 rounded-lg bg-card border border-border text-sm">
                <p>Nico Wickersheim</p>
                <p>Freiburg im Breisgau, Germany</p>
                <p>
                  Contact:{" "}
                  <a
                    href="https://github.com/wickenico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/wickenico
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Data We Collect</h2>
              <p className="mb-3">
                When you visit this Site, various types of information may be collected automatically
                or through third-party services:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>IP address (anonymized or processed by third-party infrastructure)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URL</li>
                <li>Pages visited and time of visit</li>
                <li>Interaction data (clicks, scroll behavior) collected via analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Hosting – Vercel</h2>
              <p>
                This Site is hosted on <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133,
                Covina, CA 91723, USA). Vercel may process technical data (such as IP addresses and
                request logs) as part of providing the hosting service. Data may be transferred to
                the United States. Vercel complies with the EU–US Data Privacy Framework.
              </p>
              <p className="mt-2">
                For more information, see Vercel's Privacy Policy:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Analytics – Vercel Analytics & Speed Insights</h2>
              <p>
                We use <strong>Vercel Analytics</strong> and <strong>Vercel Speed Insights</strong>{" "}
                to understand how visitors interact with our Site and to measure web performance
                (Core Web Vitals). These tools collect anonymized usage data and do not use cookies.
                The legal basis is our legitimate interest in improving the Site (Art. 6(1)(f) GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Advertising – Google AdSense</h2>
              <p>
                This Site uses <strong>Google AdSense</strong>, an advertising service provided by
                Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Google AdSense
                uses cookies and similar tracking technologies to serve personalized advertisements
                based on your browsing behavior.
              </p>
              <p className="mt-2">
                Google AdSense may collect and process the following data:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
                <li>Cookie identifiers and device identifiers</li>
                <li>IP address</li>
                <li>Browsing history and interests (for ad personalization)</li>
                <li>Interaction with advertisements</li>
              </ul>
              <p className="mt-3">
                The legal basis for this processing is your consent (Art. 6(1)(a) GDPR) or, where
                applicable, our legitimate interest. You can opt out of personalized advertising at{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  google.com/settings/ads
                </a>{" "}
                or via the{" "}
                <a
                  href="https://optout.aboutads.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Digital Advertising Alliance opt-out
                </a>
                .
              </p>
              <p className="mt-2">
                For more information, see Google's Privacy Policy:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  policies.google.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. GitHub API</h2>
              <p>
                Our Site fetches publicly available data (stars, forks, latest release version) from
                the <strong>GitHub API</strong> (api.github.com) to display live project statistics.
                This request is made from your browser and is subject to GitHub's Privacy Policy:{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub Privacy Statement
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Cookies</h2>
              <p>
                This Site itself does not set any first-party cookies. However, third-party services
                (Google AdSense) may set cookies in your browser. You can manage or disable cookies
                in your browser settings at any time. Please note that disabling cookies may affect
                the functionality of certain features.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Your Rights (GDPR)</h2>
              <p className="mb-3">Under the GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong>Right of access</strong> (Art. 15 GDPR) – Request information about your personal data</li>
                <li><strong>Right to rectification</strong> (Art. 16 GDPR) – Request correction of inaccurate data</li>
                <li><strong>Right to erasure</strong> (Art. 17 GDPR) – Request deletion of your data</li>
                <li><strong>Right to restriction</strong> (Art. 18 GDPR) – Request restriction of processing</li>
                <li><strong>Right to data portability</strong> (Art. 20 GDPR)</li>
                <li><strong>Right to object</strong> (Art. 21 GDPR) – Object to processing based on legitimate interests</li>
                <li><strong>Right to withdraw consent</strong> (Art. 7(3) GDPR)</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us via{" "}
                <a
                  href="https://github.com/wickenico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                . You also have the right to lodge a complaint with a supervisory authority, in
                particular in the EU member state of your habitual residence (in Germany:{" "}
                <a
                  href="https://www.bfdi.bund.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Bundesbeauftragte für den Datenschutz und die Informationsfreiheit
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Data Retention</h2>
              <p>
                We do not directly store personal data on our own servers. Data processed by
                third-party services (Vercel, Google) is retained according to their respective
                policies. Log data held by Vercel for infrastructure purposes is typically retained
                for a short period (up to 30 days).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The "last updated" date at the
                top of this page indicates when changes were made. We encourage you to review this
                policy periodically.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
