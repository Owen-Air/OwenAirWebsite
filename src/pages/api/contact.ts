import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  // Placeholder endpoint for future Cloudflare Worker + Turnstile + email flow.
  const payload = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    service: String(formData.get('service') ?? ''),
    preferredContact: String(formData.get('preferredContact') ?? ''),
    message: String(formData.get('message') ?? ''),
    createdAt: new Date().toISOString()
  };

  if (!payload.name || !payload.email || !payload.service || !payload.message) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  return new Response(
    JSON.stringify({
      ok: true,
      status: 'placeholder',
      message:
        'Request received by placeholder endpoint. Connect this route to Cloudflare Workers, Turnstile, rate limiting, and email delivery.',
      preview: payload
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    }
  );
};
