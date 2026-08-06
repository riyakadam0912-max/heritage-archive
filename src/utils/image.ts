const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL?.replace(/\/$/, '') ?? '';

export function resolveAssetUrl(url?: string | null): string {
  if (!url) return '';

  const normalizedUrl = url.trim();
  if (!normalizedUrl) return '';

  if (normalizedUrl.startsWith('data:') || normalizedUrl.startsWith('blob:')) {
    return normalizedUrl;
  }

  if (normalizedUrl.startsWith('/')) {
    return normalizedUrl;
  }

  if (/^https?:\/\//i.test(normalizedUrl)) {
    return normalizedUrl;
  }

  if (imageBaseUrl) {
    return `${imageBaseUrl}/${normalizedUrl.replace(/^\/+/, '')}`;
  }

  return normalizedUrl;
}
