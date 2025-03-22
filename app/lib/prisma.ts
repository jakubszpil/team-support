import { PrismaClient } from "@prisma/client";

declare global {
  var prismaClient: PrismaClient;
}

globalThis.prismaClient ??= new PrismaClient();

export const prisma = globalThis.prismaClient;
