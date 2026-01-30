import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white mt-auto">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-semibold text-white hover:text-sage transition-colors">
              BestFindsUK
            </Link>
            <p className="mt-4 text-grey-light text-sm leading-relaxed">
              Thoughtfully curated premium products for intentional living. Quality over quantity, always.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/beauty" className="text-grey-light hover:text-white text-sm transition-colors">
                  Beauty & Clean Cosmetics
                </Link>
              </li>
              <li>
                <Link href="/home-kitchen" className="text-grey-light hover:text-white text-sm transition-colors">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link href="/lifestyle" className="text-grey-light hover:text-white text-sm transition-colors">
                  Lifestyle & Workspace
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-grey-light hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-grey-light hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/disclosure" className="text-grey-light hover:text-white text-sm transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-grey-light hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-grey/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-grey-light text-sm">
              &copy; {currentYear} BestFindsUK. All rights reserved.
            </p>
            <p className="text-grey-light text-xs">
              Some links are affiliate links. We may earn a commission at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
