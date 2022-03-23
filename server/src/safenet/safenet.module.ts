import { Module } from "@nestjs/common";
import { SafenetModuleBase } from "./base/safenet.module.base";
import { SafenetService } from "./safenet.service";
import { SafenetController } from "./safenet.controller";
import { SafenetResolver } from "./safenet.resolver";

@Module({
  imports: [SafenetModuleBase],
  controllers: [SafenetController],
  providers: [SafenetService, SafenetResolver],
  exports: [SafenetService],
})
export class SafenetModule {}
