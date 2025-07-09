export default function DiscoveryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed z-40 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-7 rounded-full shadow-2xl text-lg flex items-center gap-2 transition-all cursor-pointer"
      style={{ boxShadow: '0 8px 32px 0 rgba(37,99,235,0.15)' }}
    >
      <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Ücretsiz Keşif Talebi
    </button>
  );
} 