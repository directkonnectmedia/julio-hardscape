import React from 'react'

const REVIEWS = [
  {
    initials: 'MR',
    name: 'Maria R.',
    city: 'Tolleson, AZ',
    text: 'They completely transformed our backyard into a desert oasis. The paver patio is absolutely stunning — crisp borders, perfect drainage, and it still looks brand new. Professional crew and on-time every day.',
  },
  {
    initials: 'JT',
    name: 'James T.',
    city: 'Avondale, AZ',
    text: 'Julio Hardscape installed artificial turf across our entire side yard. Our water bill dropped and the lawn looks incredible year-round — soft underfoot and genuinely outdoor-ready.',
  },
  {
    initials: 'SL',
    name: 'Sarah L.',
    city: 'Goodyear, AZ',
    text: 'From the first consultation to the final walkthrough, Julio Hardscape exceeded every expectation on our new paver walkway and courtyard. Highly recommend to anyone in the West Valley.',
  },
  {
    initials: 'DM',
    name: 'Daniel M.',
    city: 'Buckeye, AZ',
    text: 'We combined a new paver driveway with turf for the dog run. Clean jobsite every day, great communication, and the finished work looks like a magazine cover.',
  },
  {
    initials: 'PK',
    name: 'Priya K.',
    city: 'Litchfield Park, AZ',
    text: 'We refreshed our backyard with premium pavers leading out to UV-stable turf — the team handled everything with our HOA and kept us updated daily. Worth every penny.',
  },
  {
    initials: 'RF',
    name: 'Robert F.',
    city: 'Phoenix, AZ',
    text: 'The artificial turf install transformed how we use our yard — no mud, no bare patches, and it drains perfectly after monsoon rains. Excellent workmanship.',
  },
  {
    initials: 'AB',
    name: 'Amanda B.',
    city: 'Peoria, AZ',
    text: 'Installed pet-friendly artificial turf for our two dogs. No more dust bowl, no more brown spots, and the kids love it too. Incredibly happy with the whole experience.',
  },
]

function Stars() {
  return (
    <div className="rc-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-accent)">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="rc-card">
      <div className="rc-card-top">
        <Stars />
        <svg className="rc-quote" width="36" height="36" viewBox="0 0 24 24" fill="var(--color-accent)" opacity="0.18" aria-hidden="true">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2z" />
        </svg>
      </div>
      <p className="rc-text">&ldquo;{review.text}&rdquo;</p>
      <div className="rc-reviewer">
        <div className="rc-avatar"><span>{review.initials}</span></div>
        <div className="rc-reviewer-meta">
          <span className="rc-name">{review.name}</span>
          <span className="rc-city">{review.city}</span>
        </div>
      </div>
    </article>
  )
}

export default function ReviewsCarousel() {
  const loop = [...REVIEWS, ...REVIEWS]

  return (
    <div className="rc-root" aria-label="Customer reviews">
      <div className="rc-viewport">
        <div className="rc-track">
          {loop.map((review, i) => (
            <div key={i} className="rc-slide">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
      <div className="rc-edge rc-edge-left" aria-hidden="true" />
      <div className="rc-edge rc-edge-right" aria-hidden="true" />

      <style jsx>{`
        .rc-root {
          position: relative;
          width: 100%;
        }
        .rc-viewport {
          overflow: hidden;
          padding: 8px 0 20px;
        }
        .rc-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: rc-scroll 55s linear infinite;
          will-change: transform;
        }
        .rc-root:hover .rc-track {
          animation-play-state: paused;
        }
        @keyframes rc-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 10px)); }
        }
        .rc-slide {
          flex: 0 0 auto;
          width: 380px;
        }
        .rc-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 22px 24px;
          background: var(--color-surface);
          border-radius: var(--border-radius-sm);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--color-border);
          min-height: 260px;
        }
        .rc-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .rc-stars {
          display: flex;
          gap: 2px;
        }
        .rc-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-on-surface);
          margin: 0;
          font-family: var(--font-family-body);
          flex: 1;
        }
        .rc-reviewer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--color-border);
        }
        .rc-avatar {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: var(--color-on-primary, #fff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
        }
        .rc-reviewer-meta {
          display: flex;
          flex-direction: column;
        }
        .rc-name {
          font-weight: 600;
          color: var(--color-on-surface);
          font-size: 0.92rem;
        }
        .rc-city {
          font-size: 0.8rem;
          color: var(--color-on-surface-secondary);
        }
        .rc-edge {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          pointer-events: none;
          z-index: 2;
        }
        .rc-edge-left {
          left: 0;
          background: linear-gradient(to right, var(--color-background, #faf9f7), transparent);
        }
        .rc-edge-right {
          right: 0;
          background: linear-gradient(to left, var(--color-background, #faf9f7), transparent);
        }
        @media (max-width: 640px) {
          .rc-slide {
            width: 300px;
          }
          .rc-track {
            gap: 14px;
            animation-duration: 45s;
          }
          .rc-edge {
            width: 40px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .rc-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
