'use client';
import { useState } from 'react';

export default function DiscoveryModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    isBusiness: false,
    allowKVKK: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setForm({
          name: '',
          surname: '',
          phone: '',
          email: '',
          isBusiness: false,
          allowKVKK: false
        });
      } else {
        setError(data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Ücretsiz Keşif Talebi
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
              <strong>Ücretsiz Keşif Hizmetimiz:</strong> Uzman ekibimiz adresinize gelerek güvenlik ihtiyaçlarınızı değerlendirir ve size en uygun çözümü önerir. 
              Keşif sonrasında detaylı rapor ve fiyat teklifi sunulur.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="surname"
                  value={form.surname}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Soyadınız"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Telefon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="05XX XXX XX XX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                E-posta
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="ornek@email.com"
              />
            </div>

            <div className="space-y-2 mt-4">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                <input type="checkbox" name="isBusiness" checked={form.isBusiness} onChange={handleChange} />
                Başvuru iş yeri için.
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                <input type="checkbox" name="allowKVKK" checked={form.allowKVKK} onChange={handleChange} required />
                KVKK metnini okudum ve onaylıyorum. <span className="text-red-500">*</span>
              </label>
            </div>

            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            {success && (
              <div className="text-green-600 text-base font-semibold text-center mb-2 border border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 rounded-lg py-3 px-2">
                Başvurunuz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.
              </div>
            )}
            <button type="submit" disabled={loading || success} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg transition-all disabled:opacity-60 mt-2 cursor-pointer">
              {loading ? 'Gönderiliyor...' : success ? 'Başarıyla Gönderildi' : 'Gönder'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 