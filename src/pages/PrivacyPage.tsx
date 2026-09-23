import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { breadcrumbSchema } from '../components/Breadcrumbs';
import { Section } from '../components/Section';

export const PrivacyPage: React.FC = () => {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Privacy' }];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHeader
        index=""
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How Flynn James Pontino handles the small amount of data submitted through this portfolio site."
        photoClass="bg-photo-about"
      />
      <Section>
        <article className="max-w-3xl space-y-8 text-[14.5px] text-slate-300 leading-[1.8]">
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">Overview</h2>
            <p>
              This site is a personal portfolio for B2B sales services provided by Flynn James Q. Pontino. I collect the absolute minimum amount of data required to respond to inquiries and schedule calls. Nothing more.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">What I collect</h2>
            <p className="mb-3">When you submit the contact form or request a strategy session, you provide:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-400">
              <li>Your name</li>
              <li>Your work email address</li>
              <li>Your company name</li>
              <li>Target market and message details</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">How it's used</h2>
            <p>
              Submitted information is used only to respond to your inquiry or confirm a scheduled call. It is never sold, shared, or used for unsolicited marketing purposes.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-4">Your rights</h2>
            <p>
              You can request deletion of any data submitted through this site at any time by emailing <a href="mailto:va.flynnjames@gmail.com" className="text-amber-400 hover:underline">va.flynnjames@gmail.com</a>.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
};