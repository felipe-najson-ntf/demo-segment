import React from 'react';
import { ConsentManagerBuilder } from '@segment/consent-manager';

export default function CMB() {
  const CATEGORIES = {
    functional: true,
    marketingAndAnalytics: true,
    advertising: true,
  };

  return (
    <ConsentManagerBuilder
      writeKey='<your-segment-key>'
      // mapCustomPreferences={mapCategories}
      initialPreferences={CATEGORIES}
      defaultDestinationBehavior='imply'
    >
      {({ destinations, preferences, setPreferences, saveConsent }) => (
        <div>
          <h2>Tracking tools</h2>
          <ul>
            {destinations.map((destination) => (
              <li key={destination.id}>
                <label>
                  <input
                    type='checkbox'
                    checked={Boolean(preferences[destination.id])}
                    onChange={() =>
                      setPreferences({
                        [destination.id]: !preferences[destination.id],
                      })
                    }
                  />
                  {destination.category}
                </label>
              </li>
            ))}
          </ul>

          <button type='button' onClick={() => saveConsent()}>
            Save
          </button>
        </div>
      )}
    </ConsentManagerBuilder>
  );
}
