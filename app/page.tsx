import DynamicMoments from "./DynamicMoments";
import OptimizedImage from "./OptimizedImage";

export default function Home() {
  return (
    <main id="top">
      <div className="announcement">
        <span className="announcement-mark" aria-hidden="true">✦</span>
        <p>Docklands · Mon–Fri 7:30 AM—3:00 PM · Coffee, jaffles &amp; little joys</p>
      </div>

      <header className="site-header">
        <div className="header-tools page-width">
          <span>DOCKLANDS · MELBOURNE</span>
          <span>MON–FRI · 7:30 AM—3:00 PM</span>
        </div>
        <a className="wordmark" href="#top" aria-label="Again Coffee home">
          Again
          <small>Coffee Brewers</small>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#journal">Journal</a>
          <a href="#moments-gallery">At Again</a>
          <a href="#visit">Visit</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#story">Story</a>
            <a href="#journal">Journal</a>
            <a href="#moments-gallery">At Again</a>
            <a href="#visit">Visit</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-label="Everyday life at Again Coffee">
        <OptimizedImage
          alt=""
          baseName="again-coffee-hero"
          className="hero-image"
          eager
          height={1454}
          sizes="100vw"
          width={1082}
          widths={[480, 720, 1082]}
        />
        <div className="hero-shade" />
        <div className="hero-copy page-width">
          <p>BREWED IN DOCKLANDS · MADE WITH CARE</p>
          <h1>
            Coffee for
            <br />slower days.
          </h1>
          <a href="#moments-gallery">See the photo journal <span>↘</span></a>
        </div>
      </section>

      <section className="story" id="story">
        <div className="page-width story-grid">
          <p className="eyebrow">HELLO FROM AGAIN</p>
          <div>
            <h2>Coffee for the everyday.</h2>
            <p className="story-copy">
              A little coffee corner in Docklands for warm cups, freshly made jaffles,
              and small moments worth coming back for.
            </p>
          </div>
        </div>
      </section>

      <div className="press-strip" aria-label="Again Coffee media feature">
        <div>
          <span>FEATURED BY 9POSTCARDS / CHANNEL 9</span><i>✦</i>
          <span>A LITTLE COFFEE CORNER IN DOCKLANDS</span><i>✦</i>
          <span>COFFEE WORTH COMING BACK TO</span><i>✦</i>
          <span>FEATURED BY 9POSTCARDS / CHANNEL 9</span><i>✦</i>
          <span>A LITTLE COFFEE CORNER IN DOCKLANDS</span><i>✦</i>
          <span>COFFEE WORTH COMING BACK TO</span><i>✦</i>
        </div>
      </div>

      <DynamicMoments />

      <section className="story-pause" aria-labelledby="slow-mornings-title">
        <div className="page-width story-pause-grid">
          <p className="eyebrow dark">ONE CUP AT A TIME</p>
          <h2 id="slow-mornings-title">Some mornings are<br /><em>made to linger.</em></h2>
          <p>
            Stop by on your way through Docklands, or stay for the kind of coffee
            that turns a quick hello into a slower moment.
          </p>
        </div>
      </section>

      <section className="journal" id="journal">
        <div className="journal-image">
          <OptimizedImage
            alt="Hands tasting and evaluating freshly brewed coffee"
            baseName="coffee-pour"
            height={1200}
            sizes="(max-width: 680px) 100vw, 63vw"
            width={1800}
            widths={[640, 1000, 1600]}
          />
          <span>MADE AT AGAIN</span>
        </div>
        <div className="journal-copy">
          <p className="eyebrow">AT THE COUNTER</p>
          <h2>Made with<br /><em>care.</em></h2>
          <p>
            From the first coffee of the morning to the last cup of the afternoon,
            we care about the small details that make each visit feel good.
          </p>
          <a href="#visit">Visit us in Docklands <span>→</span></a>
        </div>
      </section>

      <section
        className="story-pause story-pause-rose"
        aria-labelledby="coffee-and-jaffles-title"
      >
        <div className="page-width story-pause-grid">
          <p className="eyebrow dark">FROM MORNING TO AFTERNOON</p>
          <h2 id="coffee-and-jaffles-title">Coffee first.<br /><em>Something savoury next.</em></h2>
          <p>
            Begin with your usual cup, then stay for a freshly made jaffle—
            warm, generous, and ready whenever the day needs a little lift.
          </p>
        </div>
      </section>

      <section className="freshly-made" id="jaffles">
        <div className="freshly-made-image">
          <OptimizedImage
            alt="Fresh jaffles topped with mozzarella being prepared at Again Coffee"
            baseName="again-jaffle-prep"
            height={1448}
            sizes="(max-width: 680px) 100vw, 54vw"
            width={1086}
            widths={[480, 720, 1086]}
          />
          <span>FRESH FROM THE COUNTER</span>
        </div>
        <div className="freshly-made-copy">
          <p className="eyebrow dark">FRESHLY MADE AT AGAIN</p>
          <h2>Jaffles, made<br /><em>fresh every day.</em></h2>
          <p>
            Four favourites, filled with plenty of melted mozzarella—perfect for
            breakfast or an afternoon snack.
          </p>
          <a
            href="https://www.instagram.com/againcoffeemel/p/DXIaoe6EmCs/"
            target="_blank"
            rel="noreferrer"
          >
            See the story on Instagram <span>↗</span>
          </a>
        </div>
      </section>

      <section className="moments page-width">
        <div className="moments-head">
          <div>
            <p className="eyebrow dark">AT AGAIN</p>
            <h2>A day at the counter</h2>
          </div>
          <p>From the first tray of pastries<br />to the last coffee of the afternoon.</p>
        </div>
        <div className="moment-grid">
          <figure className="moment-large">
            <OptimizedImage
              alt="A barista preparing a new iced coffee recipe"
              baseName="barista-craft"
              height={2700}
              sizes="(max-width: 680px) 100vw, 68vw"
              width={1800}
              widths={[540, 900, 1400]}
            />
            <figcaption>A NEW RECIPE AT THE BAR</figcaption>
          </figure>
          <aside className="counter-note" aria-label="A note from the counter">
            <span>COUNTER NOTE · 07</span>
            <blockquote>“Make it sweet, clean, and easy to come back to.”</blockquote>
            <p>Today&apos;s espresso: Huila, Colombia<br />Orange blossom · Apricot · Honey</p>
          </aside>
        </div>
        <a className="moments-link" href="#moments-gallery">
          Explore the photo journal <span>→</span>
        </a>
      </section>

      <section className="around-again" aria-labelledby="around-again-title">
        <div className="page-width around-again-intro">
          <p className="eyebrow dark">AROUND AGAIN</p>
          <h2 id="around-again-title">A little corner,<br /><em>open for the day.</em></h2>
          <p>
            Warm light, a quiet table, and something fresh on the counter.
            Come in for a quick takeaway or stay a little longer.
          </p>
        </div>

        <div className="page-width around-again-grid">
          <figure className="around-again-storefront">
            <OptimizedImage
              alt="Again Coffee storefront window with the open sign, coffee, and a baked treat"
              baseName="again-storefront"
              height={1448}
              sizes="(max-width: 680px) 100vw, 54vw"
              width={1086}
              widths={[480, 720, 1086]}
            />
            <figcaption>
              <span>01 / THE WINDOW</span>
              <span>FIND US ON IMPORT LANE</span>
            </figcaption>
          </figure>

          <div className="around-again-side">
            <div className="around-again-note">
              <span>COME IN · TAKE A SEAT</span>
              <h3>Inside, the pace<br /><em>softens.</em></h3>
              <p>
                Take the sunny seat, set down your cup, and let the next few
                minutes belong to you.
              </p>
            </div>
            <figure>
              <OptimizedImage
                alt="A sunlit corner inside Again Coffee with plants, tables, and branded tote bags"
                baseName="again-interior-display"
                height={1448}
                sizes="(max-width: 680px) 100vw, 46vw"
                width={1086}
                widths={[480, 720, 1086]}
              />
              <figcaption>
                <span>02 / INSIDE AGAIN</span>
                <span>A CORNER TO STAY</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-title">
          <p className="eyebrow dark">COME BY FOR COFFEE</p>
          <h2>Find us in<br />Docklands.</h2>
        </div>
        <div className="visit-details">
          <div>
            <span>Address</span>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&amp;query=6%20Import%20Ln%2C%20Docklands%20VIC%203008"
                target="_blank"
                rel="noreferrer"
              >
                6 Import Ln<br />Docklands VIC 3008
              </a>
            </p>
          </div>
          <div>
            <span>Hours</span>
            <p>Mon–Fri<br />7:30 AM—3:00 PM</p>
          </div>
          <div>
            <span>Contact</span>
            <p>
              <a
                href="https://www.instagram.com/againcoffeemel/"
                target="_blank"
                rel="noreferrer"
              >
                @againcoffeemel
              </a>
              <br />Instagram
            </p>
          </div>
        </div>
        <div className="visit-stamp" aria-hidden="true">
          <span>A</span>
          <small>COME BACK<br />AGAIN</small>
        </div>
      </section>

      <footer className="footer">
        <div className="page-width footer-inner">
          <a className="footer-wordmark" href="#top">Again</a>
          <p>Coffee worth coming back to.</p>
          <div className="footer-links">
            <a href="#journal">Journal</a>
            <a href="#moments-gallery">Moments</a>
            <a href="#story">About</a>
            <a href="#visit">Visit</a>
            <a href="#top">Back to top ↑</a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 AGAIN COFFEE BREWERS</span>
            <span>DOCKLANDS · MELBOURNE · @AGAINCOFFEEMEL</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
