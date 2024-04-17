import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errors/bad-request";

export async function getEvent(app: FastifyInstance) {
    app
        .withTypeProvider<ZodTypeProvider>()
        .get("/events/:eventId", {
            schema: {
                summary: "Get an event",
                tags: ["events"],
                params: z.object({
                    eventId: z.string().uuid(),
                }),
                response: {
                    200: z.object({
                        event: z.object({
                            id: z.string().uuid(),
                            title: z.string(),
                            details: z.string().nullable(),
                            slug: z.string(),
                            maximunAttendees: z.number().int().nullable(),
                            attendeesAmount: z.number().int(),
                        })
                    })
                }
            }
        }, async (request, reply) => {
            const { eventId } = request.params;

            const event = await prisma.event.findUnique({
                select: {
                    id: true,
                    title: true,
                    details: true,
                    slug: true,
                    maximunAttendees: true,
                    _count: {
                        select: {
                            attendees: true,
                        }
                    }
                },
                where: {
                    id: eventId
                }
            });

            if (event === null) {
                throw new BadRequest("Event not found.");
            }

            return reply.send({
                event: {
                    id: event.id,
                    title: event.title,
                    details: event.details,
                    slug: event.slug,
                    maximunAttendees: event.maximunAttendees,
                    attendeesAmount: event._count.attendees
                }
            });
        })
}