type SheetName = 'rsvp';

type SheetPayload = Record<string, string | number>;

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwBEp0LySKDZuuaimZiqkkhMryBDAYZNHk4UOZmHsP4x05vw91ojYh3d9pl_L6SDF1O/exec';

export async function submitToGoogleSheet(sheet: SheetName, payload: SheetPayload): Promise<void> {

  const body = new URLSearchParams();
  body.append('sheet', sheet);
  body.append('payload', JSON.stringify(payload));

  // Google Apps Script web apps often run cross-origin without CORS headers.
  // no-cors still sends the request, but the response is opaque to the browser.
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
}
