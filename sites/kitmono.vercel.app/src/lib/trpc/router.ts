
import { t } from '$lib/trpc/t'
import { sharedRouter } from 'trpc-definition'


export const router = t.router({
  greeting: t.procedure.query(async () => {
    return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
  }),
  shared: sharedRouter
});

