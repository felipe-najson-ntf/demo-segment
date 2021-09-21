import React from 'react';
import { ConsentManager, openConsentManager } from '@segment/consent-manager';
import inEU from '@segment/in-eu';

export default function ConsentBanner() {
  const bannerContent = (
    <span>
      We use cookies (and other similar technologies) to collect data to improve
      your experience on our site. By using our website, you’re agreeing to the
      collection of data as described in our{' '}
      <a href='/docs/legal/website-data-collection-policy/' target='_blank'>
        Website Data Collection Policy
      </a>
      .
    </span>
  );
  const bannerSubContent = 'You can change your preferences at any time.';
  const preferencesDialogTitle = 'Website Data Collection Preferences';
  const preferencesDialogContent =
    'We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.';
  const cancelDialogTitle = 'Are you sure you want to cancel?';
  const cancelDialogContent =
    'Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our Website Data Collection Policy.';

  return (
    <div>
      <ConsentManager
        writeKey={'5V8KznnIFIDh1ejQLbmX7ikfSRa6r8bF'}
        closeBehavior={() => ({
          functional: true,
          advertising: true,
          marketingAndAnalytics: true,
        })}
        shouldRequireConsent={() => false}
        bannerContent={bannerContent}
        bannerSubContent={bannerSubContent}
        preferencesDialogTitle={preferencesDialogTitle}
        preferencesDialogContent={preferencesDialogContent}
        cancelDialogTitle={cancelDialogTitle}
        cancelDialogContent={cancelDialogContent}
        implyConsentOnInteraction={true}
      />

      <button type='button' onClick={openConsentManager}>
        Website Data Collection Preferences
      </button>
    </div>
  );
}
