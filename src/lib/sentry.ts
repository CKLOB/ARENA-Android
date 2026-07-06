import * as Sentry from '@sentry/react-native';

import { env } from '@/lib/env';

if (env.EXPO_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: env.EXPO_PUBLIC_SENTRY_DSN,
    enableAutoSessionTracking: true,
  });
}

export { Sentry };
