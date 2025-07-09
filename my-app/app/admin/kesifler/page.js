'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function getCookie(name) {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

export const dynamic = 'force-dynamic';

export default function KesiflerAdminPage() {
  const [kesifler, setKesifler] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('admin_auth');
    if (token !== '1') {
      router.replace('/admin/login');
      return;
    }
    fetchKesifler();
  }, []);

  async function fetchKesifler() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/discovery');
      const data = await res.json();
      if (data.success) setKesifler(data.data);
      else setError(data.error || 'Başvurular alınamadı.');
    } catch (e) {
      setError('Başvurular alınamadı.');
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    if (!window.confirm('Bu başvuruyu silmek istediğinize emin misiniz?')) return;
    try {
      const res = await fetch(`/api/discovery?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setKesifler(kesifler.filter(k => k.id !== id));
        alert('Kayıt başarıyla silindi.');
      } else {
        alert(data.error || 'Silinemedi.');
      }
    } catch (e) {
      console.error('Silme hatası:', e);
      alert('Silinemedi. Lütfen tekrar deneyin.');
    }
  }

  function handleLogout() {
    document.cookie = 'admin_auth=; path=/; max-age=0';
    router.push('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Ücretsiz Keşif Başvuruları</h1>
        <button onClick={handleLogout} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">Çıkış Yap</button>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th className="py-3 px-4 text-center">ID</th>
              <th className="py-3 px-4 text-center">Ad</th>
              <th className="py-3 px-4 text-center">Soyad</th>
              <th className="py-3 px-4 text-center">Telefon</th>
              <th className="py-3 px-4 text-center">E-Posta</th>
              <th className="py-3 px-4 text-center">İş Yeri mi?</th>
              <th className="py-3 px-4 text-center">KVKK</th>
              <th className="py-3 px-4 text-center">Tarih</th>
              <th className="py-3 px-4 text-center">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {kesifler.map(k => (
              <tr key={k.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-4 text-center text-gray-800 dark:text-gray-200">{k.id}</td>
                <td className="py-2 px-4 text-center text-gray-800 dark:text-gray-200">{k.firstName}</td>
                <td className="py-2 px-4 text-center text-gray-800 dark:text-gray-200">{k.lastName}</td>
                <td className="py-2 px-4 text-center text-gray-800 dark:text-gray-200">{k.phone}</td>
                <td className="py-2 px-4 text-center text-gray-800 dark:text-gray-200">{k.email}</td>
                <td className="py-2 px-4 text-center text-gray-800 dark:text-gray-200">{k.isBusiness ? 'Evet' : 'Hayır'}</td>
                <td className="py-2 px-4 text-center text-gray-800 dark:text-gray-200">{k.allowKVKK ? 'Evet' : 'Hayır'}</td>
                <td className="py-2 px-4 text-center text-gray-800 dark:text-gray-200">{new Date(k.createdAt).toLocaleString('tr-TR')}</td>
                <td className="py-2 px-4 text-center">
                  <button onClick={() => handleDelete(k.id)} className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 text-sm font-bold">Sil</button>
                </td>
              </tr>
            ))}
            {loading && <tr><td colSpan={9} className="text-center py-8 text-gray-500 dark:text-gray-400">Yükleniyor...</td></tr>}
            {!loading && kesifler.length === 0 && <tr><td colSpan={9} className="text-center py-8 text-gray-500 dark:text-gray-400">Kayıt yok.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
} 