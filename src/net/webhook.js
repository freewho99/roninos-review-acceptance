export async function triggerWebhook(req) {
  return await fetch(req.body.targetUrl);
}
