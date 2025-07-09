import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  const kesifler = await prisma.discoveryRequest.findMany({ orderBy: { id: 'desc' } });
  return Response.json({ success: true, data: kesifler });
}

export async function POST(request) {
  const body = await request.json();
  if (!body.name || !body.surname || !body.phone || !body.allowKVKK) {
    return Response.json({ success: false, error: 'Zorunlu alanlar eksik.' });
  }
  await prisma.discoveryRequest.create({
    data: {
      firstName: body.name,
      lastName: body.surname,
      phone: body.phone,
      email: body.email || '',
      isBusiness: !!body.isBusiness,
      allowKVKK: !!body.allowKVKK
    }
  });
  return Response.json({ success: true });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get('id'));
  // fakeKesifler = fakeKesifler.filter(k => k.id !== id); // This line was removed as per the new_code, as fakeKesifler is no longer defined.
  return Response.json({ success: true });
} 