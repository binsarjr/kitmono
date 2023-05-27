import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { publicProcedure, router } from './t'

export const sharedRouter = router({
    greeting: publicProcedure.query(() => 'hello shared tRPC'),
})

export type SharedRouter = typeof sharedRouter
export type SharedRouterInputs = inferRouterInputs<SharedRouter>
export type SharedRouterOutputs = inferRouterOutputs<SharedRouter>