import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SafenetService } from "./safenet.service";
import { SafenetControllerBase } from "./base/safenet.controller.base";

@swagger.ApiTags("safenets")
@common.Controller("safenets")
export class SafenetController extends SafenetControllerBase {
  constructor(
    protected readonly service: SafenetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
