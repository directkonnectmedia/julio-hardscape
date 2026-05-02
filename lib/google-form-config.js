// Google Forms integration for the booking wizard.
//
// To swap to a different form (e.g. the client's):
//   1. Get the submission URL from their form  (...formResponse)
//   2. Get each field's entry.XXXXXXXXX id from FB_PUBLIC_LOAD_DATA_ in the
//      public form HTML — or from the "Get pre-filled link" trick.
//   3. Paste new values below. No other file needs to change.

export const GOOGLE_FORM = {
  submissionUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdIcIKt-2P9UIxewl78xfJsOIGHpdz7CEoeZKTwwqdOeUkYJw/formResponse',
  fields: {
    firstName: 'entry.499082337',
    lastName: 'entry.1564228950',
    phone: 'entry.1456061016',
    email: 'entry.1927625565',
    services: 'entry.569035629',
    details: 'entry.1883694200',
  },
}
