import axios from 'axios';

import { env } from '@/lib/env';

export const http = axios.create({
  baseURL: env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
});
