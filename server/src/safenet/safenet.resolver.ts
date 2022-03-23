import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SafenetResolverBase } from "./base/safenet.resolver.base";
import { Safenet } from "./base/Safenet";
import { SafenetService } from "./safenet.service";

@graphql.Resolver(() => Safenet)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SafenetResolver extends SafenetResolverBase {
  constructor(
    protected readonly service: SafenetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
