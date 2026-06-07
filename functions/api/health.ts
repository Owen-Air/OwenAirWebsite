function json(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}

export const onRequestGet: PagesFunction = () => {
  return json({
    ok: true,
    timestamp: new Date().toISOString(),
    services: {
      static: true
    }
  });
};

export const onRequestHead: PagesFunction = () => {
  return new Response(null, {
    status: 200,
    headers: { 'Cache-Control': 'no-store' }
  });
};
