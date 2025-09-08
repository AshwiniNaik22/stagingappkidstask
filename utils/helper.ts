import { randomUUID } from 'crypto';

export function uniqueName(prefix: string) {
  return `${prefix}-${randomUUID().slice(0, 6)}`;
}
