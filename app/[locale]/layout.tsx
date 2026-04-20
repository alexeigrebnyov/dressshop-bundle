'use client';

import { Locale } from 'lib/i18n';
import { useParams } from 'next/navigation';

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}