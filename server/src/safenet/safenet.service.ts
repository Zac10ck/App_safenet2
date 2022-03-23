import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SafenetServiceBase } from "./base/safenet.service.base";

@Injectable()
export class SafenetService extends SafenetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
