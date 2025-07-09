import jwt from 'jsonwebtoken';

export async function POST(request) {
  const { username, password } = await request.json();
  const ADMIN_USER = process.env.ADMIN_USER;
  const ADMIN_PASS = process.env.ADMIN_PASS;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Set-Cookie': `admin_auth=1; Path=/; SameSite=Lax; Max-Age=86400`,
        'Content-Type': 'application/json',
      },
    });
  } else {
    return Response.json({ success: false, error: 'Kullanıcı adı veya şifre hatalı!' });
  }
} 